# Flask Supabase Jobs API

This is a simple Flask API that connects to a Supabase (PostgreSQL) database to fetch job listings. It demonstrates how to securely store credentials using `.env`, query data, and return JSON responses via Flask routes.

---

## Prerequisites

* Python 3.10+
* Supabase project with a PostgreSQL database
* Virtual environment recommended

---

## Setup

1. **Clone the repo**

```bash
git clone https://github.com/gsambrotta/remote-jobs-platform
cd /backend
```

2. **Create a virtual environment**

```bash
python3 -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Create a `.env` file copying `.env.example`**
---

## Running the App

```bash
python3 app.py
```

* Visit `http://127.0.0.1:5000/jobs` → returns all jobs as JSON
* Visit `http://127.0.0.1:5000/job/<job-uuid>` → returns a single job as JSON


---

## Dependencies

* Flask
* psycopg2-binary
* python-dotenv
* openai
* supabase
* feedparser

> Install all with `pip install -r requirements.txt`.

---

## Notes

* Do **not commit `.env`** or virtual environment to Git.
* Routes are registered **before `app.run()`** to avoid 404 errors.

