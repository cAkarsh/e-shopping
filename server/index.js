import express from 'express';
import bodyParser from 'body-parser';
import cassandra from 'cassandra-driver';
import cors from 'cors';
import productsRoutes from './routes/products.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/products', productsRoutes);

const PORT = process.env.PORT || 9042;

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'songs'
});

client.connect()
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

export {
  client
};
