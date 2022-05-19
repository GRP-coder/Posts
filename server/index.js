import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouters from'./routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: "30mb", extended : true }));

app.use(bodyParser.urlencoded({limit: "30mb", extended : true }));

app.use(cors());

app.use('/posts', postRouters);

const CONNECTION_URL = 'mongodb+srv://gyanaranjan:gyanaranjan@cluster0.u6yzq.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {})
.then(() => app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`)))
.catch((error) => console.log(error.message));

