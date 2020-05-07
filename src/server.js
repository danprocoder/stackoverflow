import express from 'express';
import bodyParser from 'body-parser';
import bearerToken from 'express-bearer-token';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();

/*
 * --------------------------------------------------
 * Initialize mongoose
 * --------------------------------------------------
 */
const MONGO_URI = process.env.NODE_ENV !== 'test'
    ? process.env.MONGO_URI
    : process.env.MONGO_URI_TEST;
mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .catch(err => {
    console.error(err);
  });

/*
 * --------------------------------------------------
 * Handle CORS
 * --------------------------------------------------
 */
app.use(bearerToken());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/*
 * --------------------------------------------------
 * Register routes
 * --------------------------------------------------
 */
app.use('/api/v1/', routes);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to stackoverflow clone' });
});

/*
 * --------------------------------------------------
 * Server
 * --------------------------------------------------
 */
app.listen(process.env.PORT || 8754, () => {
  console.log('Server started');
});
