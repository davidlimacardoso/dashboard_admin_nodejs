//Carregando os módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express();
const admin = require("./routes/admin")
const path = require("path")

//Configurações 
//Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Handlebars
app.engine('handlebars', handlebars({defaultLayout: "main"}))
app.set("view engine", 'handlebars')

//Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")))

//Rotas
app.use('/admin', admin)

//Iniciar o servidor
const PORT = 8080;
app.listen(PORT,() =>{
    console.log("Servidor iniciado!");
})