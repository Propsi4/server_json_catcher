import express from 'express';
const PORT = 3000;

const app = express();
app.use(express.json());
app.post('/api/get', (req, res) => {
    console.log(req.body)
  })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});