import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-1.5-flash")

def classify_transactions_with_ai(transactions_list):
    prompt = f"""
Eres un clasificador financiero. Recibirás una lista de transacciones 
en formato JSON.

Debes devolver un JSON EXACTO con esta estructura:

{{
  "ingresos": <total>,
  "egresos": <total>,
  "categorias": {{
      "alimentación": <total>,
      "transporte": <total>,
      "entretenimiento": <total>,
      "salud": <total>,
      "otros": <total>
  }}
}}

Lista de transacciones:
{transactions_list}
"""

    response = model.generate_content(prompt)
    return response.text