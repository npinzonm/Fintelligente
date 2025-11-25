import pandas as pd
from io import BytesIO

def parse_financial_file(file):
    content = file.file.read()
    filename = file.filename.lower()

    df = None
    if filename.endswith(".csv"):
        df = pd.read_csv(BytesIO(content))
    elif filename.endswith(".xlsx") or filename.endswith(".xls"):
        df = pd.read_excel(BytesIO(content))
    else:
        raise ValueError("Formato no soportado. Usa CSV o Excel.")

    # Normalizamos columnas comunes
    df.columns = df.columns.str.lower()

    # Buscamos nombre más probable
    amount_col = next((c for c in df.columns if "monto" in c or "valor" in c), None)
    desc_col = next((c for c in df.columns if "descr" in c), None)

    if not amount_col or not desc_col:
        raise ValueError("El archivo no contiene columnas válidas.")

    transactions = df[[desc_col, amount_col]].to_dict(orient="records")

    return transactions