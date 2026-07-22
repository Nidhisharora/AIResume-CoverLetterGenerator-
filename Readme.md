# 🤖 AI Resume & Cover Letter Generator

An AI-powered Resume & Cover Letter Generator built using **React**, **FastAPI**, and **Google Gemini API**. The application helps users generate professional resume summaries, personalized cover letters, improve project descriptions, and enhance skills using Generative AI.

---

## ✨ Features

- 📝 Generate AI-powered Resume Summaries
- 💼 Generate Personalized Cover Letters
- 🚀 Improve Project Descriptions
- 🛠️ Enhance Skills for Better ATS Optimization
- ⚡ FastAPI REST Backend
- 🎨 Responsive React Frontend
- 🤖 Powered by Google Gemini API

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- CSS

### Backend
- FastAPI
- Python
- Uvicorn

### AI
- Google Gemini API (`google-genai`)

### Other Libraries
- Pydantic
- Python-dotenv
- CORS Middleware

---

# 📂 Project Structure

```text
AI-Resume-Generator/
│
├── backend/
│   ├── app.py
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Prerequisites

Before running the project, make sure you have installed:

- Python 3.10+
- Node.js 18+
- npm
- Git
- Google Gemini API Key

---

# 🔑 Getting a Gemini API Key

1. Go to **Google AI Studio**.
2. Create a new project.
3. Generate an API Key.
4. Copy the generated key.

---

# 📥 Clone the Repository

```bash
git clone https://github.com/your-username/AI-Resume-Generator.git

cd AI-Resume-Generator
```

---

# ⚙️ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

### Create a Virtual Environment

**Windows**

```bash
python -m venv venv
```

### Activate Virtual Environment

**Windows (PowerShell)**

```bash
venv\Scripts\Activate
```

**Windows (CMD)**

```bash
venv\Scripts\activate.bat
```

**Linux / macOS**

```bash
source venv/bin/activate
```

---

### Install Backend Dependencies

```bash
pip install -r requirements.txt
```

Or install manually:

```bash
pip install fastapi uvicorn google-genai python-dotenv pydantic python-multipart
```

---

### Create a `.env` File

Create a `.env` file inside the **backend** folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

### Run the Backend

```bash
uvicorn app:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🚀 Running the Project

### Terminal 1

```bash
cd backend

venv\Scripts\Activate

uvicorn app:app --reload
```

### Terminal 2

```bash
cd frontend

npm install

npm run dev
```

Now open:

```
http://localhost:5173
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health Check |
| GET | `/health` | Server Status |
| POST | `/generate-summary` | Generate Resume Summary |
| POST | `/generate-cover-letter` | Generate Cover Letter |
| POST | `/improve-project` | Improve Project Description |
| POST | `/enhance-skills` | Enhance Skills |

---

# 📝 Sample Request

```json
{
  "name": "John Doe",
  "education": "B.Tech Computer Science",
  "experience": "Web Developer Intern",
  "skills": [
    "Python",
    "React",
    "FastAPI"
  ],
  "projects": [
    "AI Resume Generator"
  ],
  "achievements": [
    "IBM Certification"
  ],
  "target_role": "Software Engineer"
}
```

---

# ⚠️ Common Issues

## 429 RESOURCE_EXHAUSTED

The free-tier Gemini API quota has been reached.

**Solutions**

- Wait for the daily quota reset.
- Enable billing for higher usage limits.
- Verify your API key in the `.env` file.
- Check usage in Google AI Studio.

---

## Invalid API Key (401)

Verify that your `.env` contains the correct key.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Restart the backend after updating the key.

---

## CORS Error

Ensure your frontend origin is allowed in FastAPI.

```python
allow_origins=[
    "http://localhost:5173"
]
```

---

## Module Not Found

Install all required packages.

```bash
pip install -r requirements.txt
```

---

# 🔮 Future Improvements

- 📄 Resume PDF Export
- 🎨 Multiple Resume Templates
- 📊 ATS Resume Score Checker
- 🔑 Keyword Optimization
- 👤 User Authentication
- ☁️ Cloud Deployment
- 📂 Resume History

---

# 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Nidhish Arora**

- GitHub: https://github.com/Nidhisharora
- LinkedIn: https://linkedin.com/in/nidhisharora

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!