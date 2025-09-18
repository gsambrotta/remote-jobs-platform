# React Vite Remote Jobs Frontend

This is a React application built with **Typescript**, **Vite** and **Tailwind CSS**. It provides the frontend interface for the Remote Jobs Platform, consuming job listings from the Flask + Supabase backend [this](https://github.com/gsambrotta/remote-jobs-platform/tree/main/backend)

---

## Prerequisites

* Node.js 18+
* npm
* Backend API running (see [backend README](../backend/README.md))

---

## Setup

1. **Clone the repo**

```bash
git clone https://github.com/gsambrotta/remote-jobs-platform
cd frontend
```

2. **Install Dependencies & run the app**

```bash
npm install
npm run dev
```

* Visit http://localhost:5173 → loads the React app

## Notes

* Do **not commit `.env`** to Git.
* The frontend expects the backend API to be running (default proxy http://localhost:5000).
* Aliases are configured in vite.config.ts (e.g., @components, @hooks).


