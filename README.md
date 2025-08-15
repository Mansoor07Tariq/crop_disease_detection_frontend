# 🌿 Plant Disease Detector (Next.js + FastAPI)

This project is a web-based crop disease detection app built using **Next.js (React)** on the frontend and **FastAPI** on the backend.

Users can upload an image of a plant, and the system will identify potential diseases using a machine learning model, returning:
- 🌱 Disease Name
- 📊 Confidence Score
- 🧪 Severity
- 💊 Treatment Recommendations

---

## 🔍 Features

- 📷 Upload plant images directly from the browser
- ⚡ Fast disease prediction via backend API (FastAPI)
- 🎯 Displays confidence score as a percentage
- 🚨 Shows severity and step-by-step treatment plan
- 💡 Developer mode with mock results for UI testing

---

## 📦 Tech Stack

| Layer        | Technology       |
|--------------|------------------|
| Frontend     | Next.js (React)  |
| Styling      | Tailwind CSS     |
| Backend API  | FastAPI (Python) |
| Image Upload | FormData + Fetch |
| Hosting      | GitHub (static) / Render / Vercel (optional) |

---

## 🧪 Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/Mansoor07Tariq/plant-disease-detector.git
cd plant-disease-detector
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000)

> ⚠️ Make sure your FastAPI backend is running at `http://localhost:8000/api/predict`

---

## 📤 API Response Format

The backend should respond with a JSON like:

```json
{
  "disease": "Apple__Cedar_rust",
  "confidence": 0.37462499737739563,
  "severity": "mild",
  "treatment_steps": [
    "Remove nearby juniper hosts if possible.",
    "Apply copper spray once at early leaf‐unfolding."
  ]
}
```
