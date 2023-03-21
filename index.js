import express from 'express';
const PORT = 5000;

const app = express();
app.use(express.json());
app.post('/api/get', (req, res) => {
    res.status(200).send('Got it!')
    console.log(req.body)
  })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});