import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS
from helpers.api_response import api_response

load_dotenv()
USER = os.getenv("user")
PASSWORD = os.getenv("password")
HOST = os.getenv("host")
PORT = os.getenv("port")
DBNAME = os.getenv("dbname")

# Connect to the database
def get_connection():
    return psycopg2.connect(
        user=USER,
        password=PASSWORD,
        host=HOST,
        port=PORT,
        dbname=DBNAME
    )


app = Flask(__name__)
ENV = os.getenv("FLASK_ENV", "development")

if ENV == "development":
    CORS(app)
else:
    CORS(app, resources={r"/*": {"origins": "https://frontend.com"}})

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/jobs', methods=['GET'])
def get_jobs():
    try: 
        conn = get_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT * FROM jobs;")
        result = cursor.fetchall()
        # json = jsonify(result)

        cursor.close()
        conn.close()
        return api_response(result, "Jobs fetched successfully")
    except Exception as e:\
        return {"error": str(e)}

@app.route('/job/<string:id>', methods=['GET'])
def get_job(id):
    try: 
        conn = get_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT * FROM jobs WHERE id= %s;", (id,))
        result = cursor.fetchone()
        cursor.close()
        conn.close()

        if result: 
            return api_response(result, "Job fetched successfully")
        else:
            return api_response(None, "Job not found", success=False, status=404)   
    
    except Exception as e:
        return {"error": str(e)}


if __name__ == '__main__':
    app.run(debug=(ENV=="development"))