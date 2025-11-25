from fastapi import FastAPI
from .routers import files
import uvicorn

app = FastAPI(title="Financial Files Service", version="1.0")

app.include_router(files.router)

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8002, reload=True)