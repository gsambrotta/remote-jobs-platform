import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv
from flask import Flask, jsonify

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
        json = jsonify(result)

        cursor.close()
        conn.close()
        return json
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
            return jsonify(result)
        else:
            return jsonify({"message": "Job not found"})
    
    except Exception as e:
        return {"error": str(e)}


if __name__ == '__main__':
    app.run(debug=True)