import express from `express`
import { engine } from `express-handlebars`;
import { services } from `./data/services.data.js`

const app = express()

//public directory
app.use(express.static(`public`))

app.use(`/css`, express.static(`node_modules/bootstrap/dist/css`))
app.use(`/js`, express.static(`node_modules/bootstrap/dist/js`))
app.use(`/js`, express.static(`node_modules/bootstrap/dist/`))

//handlebars
app.engine(`.hbs`, engine({ extname: `.hbs` }));
app.set(`view engine`, `.hbs`);
app.set(`views`, `./ views`);

app.get(`/ `, (req, res) => {
    res.render(`home`, { title: "Home Page 2.0" }),
});

app.get(`/ services`, (req, res) => {
    res.render(`services`, { services: services });
});


app.listen(5001, () => console.log(`servidor encendido http://localhost:${5001}`))

//como buscar algo de un array ?re:find(services/qa)
const service = services.find((iten) => item.url === `/services/${nameURL}`)
console.log(service)
res.render(`service`,);

});
