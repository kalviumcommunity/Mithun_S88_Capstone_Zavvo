require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));


const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
