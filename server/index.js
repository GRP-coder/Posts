import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouters from'./routes/posts.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended : true }));

app.use(bodyParser.urlencoded({limit: "30mb", extended : true }));

app.use(cors());

app.use('/posts', postRouters);

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {})
.then(() => app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`)))
.catch((error) => console.log(error.message));

