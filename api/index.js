const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');


const {logErrors,errorHandler,boomErrorHandler} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get('/api', (req, res) => {

  res.send('Hola mi server en express');

})

app.get('/api/nuevo-endpoint', (req, res) => {

  res.send('nuevo endpoint');

})

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/categories/:categoryId/products/productId', (req, res) => {

const {categoryId,productId} = req.params;

res.json({
  categoryId,productId,
  name: 'product 1',
  price: 1000
});

});

app.listen(port, () => {

  console.log('Mi port ' + port);

})
