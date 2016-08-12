const app = require('express')();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Feel the magic in the air!!!');
});
app.listen(port, () => {
  console.log(`🚀  Server is running on port: ${port}`);
});
