const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const controller = require('./controller.js');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.get('/mylist', controller.getMyList);
app.post('/mylist', controller.addItem);
app.delete(`/api/mylist/:id`, controller.deleteItem);

app.listen(4000, ()=>console.log(`server running on 4000`))