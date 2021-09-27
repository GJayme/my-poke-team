const express = require('express');

const userRoutes = require('./routes/userRoutes');

let app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use("/api/v1/users", userRoutes);

const db = require('./models');

//force vai dropar e subir novo sempre!
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.")
// });

db.sequelize.sync();

app.get('/', (req, res) => {
    res.json({ message: "ralalal"});
});

app.listen(PORT, () =>{
    console.log(`Application is listening ot port ${PORT}`);
});
