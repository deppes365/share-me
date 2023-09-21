import dotenv from 'dotenv';
import express from 'express';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log(`server listening on port ${PORT}`);
    else 
        console.log("Error occurred, server can't start", error);
    }
);