const express = require('express');
const cors = require('cors');
const routes = require('./routes');

let app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));

app.use(express.json());
app.use(cors());
app.use('/', routes);

const db = require('./models');

//force vai dropar e subir novo sempre!
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.")
// });

db.sequelize.sync();

app.listen(PORT, () => {
  console.log(`Application is listening ot port ${PORT}`);
});
