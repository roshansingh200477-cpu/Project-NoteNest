require('dotenv').config();

const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require("cors");

app.use(cors({
  origin: "https://notenest-livid.vercel.app",
  credentials: true
}));
app.use(express.json());
// Avaliable Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.get('/', (req, res) => {
  res.send('Hello this is Roshan Singh')
})

app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
})