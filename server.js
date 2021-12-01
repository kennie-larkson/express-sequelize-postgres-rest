const app = require('./app.js')
const Sequelize = require("sequelize")

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Wevesti server listening on localhost:${port}`)
}


);


const sequelize = new Sequelize('wevesti', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: "postgres"
});
sequelize.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});

