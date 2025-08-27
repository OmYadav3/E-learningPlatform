import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

/* ======MIDDLEWARE ======== */
app.use(cors(
    {
        origin:process.env.CORS_ORGIN,
        credentials:true,
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static('public'));
app.use(cookieParser());



export { app };
