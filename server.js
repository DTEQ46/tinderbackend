import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import cors from 'cors';

//App Config
const app = express();
const port = process.env.PORT || 8001;

//Middlewares

app.use(express.json());
app.use(cors());

// DB config
const username = 'admin';
const password = 'dteq46';
const cluster = 'cluster0.1pfcg';
const dbname = 'tinderdb';
mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Connected successfully');
});

//API Endpoints

app.get('/', (req, res) =>
  res.status(200).send('Welcome to Backend Programming!!!')
);

app.post('/tinder/cards', async (request, response) => {
  const user = new Cards(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/tinder/cards', async (request, response) => {
  const users = await Cards.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));
