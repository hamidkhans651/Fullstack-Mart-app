from fastapi import FastAPI
from  fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm


app = FastAPI()

outh2_schene = OAuth2PasswordBearer(tokenUrl="")

@app.get("/")
async def root():
    print(OAuth2PasswordBearer.__doc__)
    return{"this ":"is product service "}


@app.ger("/tokem")
def 

