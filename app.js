const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello All! Welcome to Clickops Technologies ... Am Excite to share my first CICD project is working Fine.\n');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
