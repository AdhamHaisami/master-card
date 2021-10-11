const app = require('./app');

const port = app.get('PORT');

app.listen(port, () => {
  console.log(`WE ARE LIVE ON http://localhost:${port}`);
});
