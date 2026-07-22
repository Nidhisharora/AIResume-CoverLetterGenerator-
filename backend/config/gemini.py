import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

# Configure Gemini - "Whenever we make a request, this tells use this API key."
genai.configure(api_key=api_key)

model = genai.GenerativeModel("gemini-flash-latest")