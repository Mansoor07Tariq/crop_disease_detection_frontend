# 🌿 Crop Disease Detector (Next.js + FastAPI)

This is a complete crop disease detection system with:

* **Frontend**: Next.js (React) app for uploading plant images and displaying predictions
* **Backend**: FastAPI service for running the ML models and returning predictions
* **Machine Learning Models**: Pre-trained `.h5` files for crop disease detection and treatment recommendations

Users can upload an image of a plant, and the system will identify potential diseases using a machine learning model, returning:

* 🌱 **Disease Name**
* 📊 **Confidence Score**
* 🧪 **Severity**
* 💊 **Treatment Recommendations**

---

## 🔍 Features

* 📷 Upload plant images directly from the browser
* ⚡ Fast disease prediction via backend API (FastAPI)
* 🎯 Displays confidence score as a percentage
* 🚨 Shows severity and step-by-step treatment plan
* 💡 Developer mode with mock results for UI testing

---

## 📦 Tech Stack

| Layer        | Technology                     |
| ------------ | ------------------------------ |
| Frontend     | Next.js (React)                |
| Styling      | Tailwind CSS                   |
| Backend API  | FastAPI (Python)               |
| ML Models    | TensorFlow (.h5)               |
| Image Upload | FormData + Fetch               |
| Hosting      | GitHub Pages / Render / Vercel |

---

## 🗂 Files Included

### Backend

* `plant_disease_model.h5` – Pre-trained crop disease detection model
* `plant_disease_model_augmented.h5` – Augmented version of the model
* `Crop_Disease_with_treatment_x24144801.ipynb` – Notebook demonstrating detection and treatment suggestions

---

## 📂 Datasets

The datasets used for training are too large to store on GitHub. You can download them here:

1. **[Dataset 1 – Original Crop Disease Dataset](YOUR_DATASET_1_LINK_HERE)**
   Contains the primary images used for initial training.

2. **[Dataset 2 – Augmented Crop Disease Dataset](YOUR_DATASET_2_LINK_HERE)**
   Contains augmented versions of the original dataset for better model generalization.

After downloading, place both datasets inside the `Datasets/` folder in the backend project root.

---

## 🧪 Getting Started (Local Development)

### 1. Clone both repositories

```bash
# Backend
git clone https://github.com/Mansoor07Tariq/crop_disease_detection_backend.git
cd crop_disease_detection_backend
```

```bash
# Frontend
git clone https://github.com/Mansoor07Tariq/plant-disease-detector.git
cd plant-disease-detector
```

---

### 2. Backend Setup

```bash
cd crop_disease_detection_backend
pip install fastapi uvicorn tensorflow
```

Run the FastAPI server:

```bash
uvicorn main:app --reload
```

> Replace `main:app` with your actual FastAPI app entrypoint if named differently.

API will be available at:

```
http://127.0.0.1:8000/docs
```

---

### 3. Frontend Setup

```bash
cd crop_disease_detection_frontend
npm install
npm run dev
```

Open your browser at:

```
http://localhost:3000
```

⚠️ Ensure your FastAPI backend is running at:

```
http://localhost:8000/api/predict
```

---

## 📤 API Response Format

The backend responds with JSON like:

```json
{
  "disease": "Apple__Cedar_rust",
  "confidence": 0.3746,
  "severity": "mild",
  "treatment_steps": [
    "Remove nearby juniper hosts if possible.",
    "Apply copper spray once at early leaf‐unfolding."
  ]
}
```

---

## 📝 Notes

* The `.h5` model files are tracked with Git LFS — install Git LFS before cloning:

```bash
git lfs install
```

* Datasets are not stored in the repo due to GitHub size limits; download from the links above.
* Once both backend and frontend are running, you can upload plant images to get predictions instantly.
