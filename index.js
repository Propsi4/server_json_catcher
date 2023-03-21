import express from 'express';
const PORT = 5000;
let index = 1
const app = express();
app.use(express.json());
app.post('/api/get', (req, res) => {
    console.log(`=================${index}===================`)
    try{
    res.status(200).send('Got it!')
    console.log(req.body)
    index++
    } catch (err) {}
  })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});