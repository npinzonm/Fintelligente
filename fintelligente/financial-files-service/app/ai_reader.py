import google.generativeai as genai
import os
import base64

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


def analyze_pdf(file_bytes: bytes):
    encoded = base64.b64encode(file_bytes).decode("utf-8")

    prompt = """
    You are a system that extracts bank transactions from PDF bank statements.
    Return ONLY a JSON list with this structure:

    [
      {
        "description": "...",
        "amount": -50.00,
        "date": "2024-02-10"
      },
      ...
    ]
    """

    model = genai.GenerativeModel("gemini-1.5-pro")

    res = model.generate_content(
        [
            {"mime_type": "application/pdf", "data": encoded},
            prompt
        ]
    )

    return eval(res.text)