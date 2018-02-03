// index.js --> Morgan
const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const express = require("express") 
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express() //instância do express --> passo 10.

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static("public"))

const err = res => err => res.status(500).send(err)

//*** Listando pessoa --> passo 11.
app.get("/listpessoas", (req, res) => {
  knex("pessoa").select()
    .then(ret => res.send(ret)).catch(err(res))
})

app.get("/:idpessoa", (req, res) => {
    const idpessoa = req.params.idpessoa
    knex("pessoa").select().where({ idpessoa })
      .then(([pessoa]) => res.send(pessoa)).catch(err(res))
  })

//***  Adicionando pessoa --> passo 13.
app.post("/save", (req, res) => {
    knex("pessoa").insert(req.body, "idpessoa")
      .then(ret => res.send(ret)).catch(err(res))
  })
  app.put("/save", (req, res) => {
    const idpessoa = req.body.idpessoa
    knex("pessoa").update(req.body).where({ idpessoa })
      .then(ret => res.send(ret)).catch(err(res))
  })
  app.delete("/:idpessoa", (req, res) => {
    const idpessoa = req.params.idpessoa
    knex("pessoa").del().where({ idpessoa })
       .then(ret => res.send(ret)).catch(err(res))
      })

knex.migrate.latest().then(_ =>
  app.listen(3000, _ =>
    console.log("server online!")))