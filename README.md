# 🌍 Pakufi Global Jobs Platform

This project is a simple job board that helps people from underrepresented regions (e.g., Africa, the Balkans, Asia, Latin America) find **100% remote jobs** that **do not require a work visa for Europe, USA, Switzerland, or other wealthy Western countries**.  

You can visit the platform here: https://remote-jobs-platform-frontend.onrender.com

Here is the introduction video for CS50 Final Project: https://youtu.be/gGza58kiD74
---

## Tech Stack

* **Frontend**
  - React 18
  - Vite
  - Tailwind CSS
  - TypeScript
  - Axios

* **Backend**
  - Python 3.10+
  - Flask
  - Supabase (PostgreSQL)
  - psycopg2-binary
  - python-dotenv
  - feedparser
  - openai (for job classification and structuring)

---

## Project Structure

The repository contains **two separate applications**:

1. **Frontend** (`/frontend`)  
   * Built with **React + Vite + Tailwind**  
   * Displays the job listings, filters, and UI  
   * Fetches job data from the backend API  

   See [Frontend README](./frontend/README.md) for setup instructions  

2. **Backend** (`/backend`)  
   * Built with **Flask**  
   * Connects to a **Supabase (PostgreSQL) database**  
   * Exposes REST API endpoints to serve job data  
   * Contains scripts to fetch and structure job postings  

   See [Backend README](./backend/README.md) for setup instructions  

Both the frontend and backend are **separate apps**.  
They require separate installation, setup, and running processes.  

---

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/gsambrotta/remote-jobs-platform
   cd remote-jobs-platform
