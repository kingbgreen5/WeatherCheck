const express = require('express');
const routes = require('./routes');
const cityRoutes = require('./routes/api/cityRoutes');
// import sequelize connection
const sequelize = require('./config/connection');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);
app.use('/cities', cityRoutes)

// sync sequelize models to the database, then turn on the server


sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });
  