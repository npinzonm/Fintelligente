from fastapi import APIRouter, UploadFile, File, HTTPException
from ..utils.parser import parse_financial_file
from ..core.gemini import classify_transactions_with_ai
import json

router = APIRouter(prefix="/files", tags=["Files"])

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        transactions = parse_financial_file(file)

        # Enviar a IA
        ai_response = classify_transactions_with_ai(transactions)

        # Convertimos el JSON que devuelve la IA
        result = json.loads(ai_response)

        return {
            "status": "ok",
            "data": result
        }

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))