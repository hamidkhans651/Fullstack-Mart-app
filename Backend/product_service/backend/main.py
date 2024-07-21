from fastapi import FastAPI
# from starlette.middleware.cors import CORSMiddleware

app = FastAPI()


@app.get("/")
async def read_root():
    return {"this is ": "hamid"}


