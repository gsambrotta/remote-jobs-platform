from openai import OpenAI
from supabase import create_client
import json
import feedparser
import os
from dotenv import load_dotenv
import re
from html import unescape
from datetime import datetime

load_dotenv()
client = OpenAI(api_key=os.getenv("openai_key"))
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

rss_url = "https://weworkremotely.com/categories/remote-programming-jobs.rss"
NUM_ITEMS = 3
MAX_DESC_LEN = 1000

feed = feedparser.parse(rss_url)
# print(f"Found {len(feed.entries)} jobs in the feed.\n")
# print(feed)

# for i, entry in enumerate(feed.entries[:NUM_ITEMS], 1):
#     print(f"Job {i}:")
#     print(f"Title: {entry.title}")
#     print(f"Link: {entry.link}")
#     print(f"Description: {entry.summary}\n")

def clean_summary(summary, max_len=MAX_DESC_LEN):
    text = re.sub(r"<.*?>", "", summary)  # remove HTML tags
    text = unescape(text)                 # decode entities
    text = text.replace("\n", " ").replace("\r", " ")  # remove newlines
    return text[:max_len]

rss_text = "\n".join(
    [f"Title: {entry.title}\Source_URL: {entry.link}\Visa: {entry.region}\nDescription: {clean_summary(entry.summary)}" 
     for entry in feed.entries[:NUM_ITEMS]]
)

# print("RSS Text to send to GPT:\n", rss_text)

current_time = datetime.utcnow().isoformat() + "Z"
# Ask GPT to extract jobs
prompt = f"""
Extract the job information from the following RSS entries.
Descriptions may be truncated. 
Return ONLY a JSON array of objects with these keys:
- title (string. If null, skip the entry)
- short_summary (string, 1–2 sentences, equivalent to Description)
- remote (boolean, assume true if not specified)
- visa_required (boolean, false if Visa equal to "Anywhere in the World" otherwise assume true)
- skills_required (array of strings, else null. Extract explicit technical or job-related skills, preferably as as comma-separated words or phrases and return as an array.)
- company (string if available, else null. Look in Description for company names, e.g., after 'Headquarters:' or similar markers.)
- source_url (string, equivalent to Link)
- date_fetched (ISO 8601 timestamp, use current date/time: "{current_time}").

RSS content:
{rss_text}
"""

response = client.chat.completions.create(model="gpt-4o-mini",
messages=[{"role": "user", "content": prompt}],
max_tokens=500,
temperature=0.5)

jsonResponse = response.choices[0].message.content
jobs = json.loads(jsonResponse)

response = supabase.table("jobs").insert(jobs).execute()

print(response)