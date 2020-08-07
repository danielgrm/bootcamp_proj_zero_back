const express = require('express');
let { Usuario, lista_usuarios } = require('../../models/user');
const router = express.Router();


router.get('/:userId', (req, res, next)=> {
  try{
    let  usuario =  lista_usuarios.filter(u => u.id == req.params["userId"])
    if (usuario.length > 0){
      res.send(usuario[0])
    }else{
      res.status(404).send({"error" : "user not exist"})
    }
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})

router.delete('/:userId', (req, res, next)=> {
  try{
    let  usuario =  lista_usuarios.filter(u => u.id == req.params["userId"])
    if (usuario.length > 0){
      lista_usuarios = lista_usuarios.filter(u => u.id != req.params["userId"])
      res.send(lista_usuarios)
    }else{
      res.status(404).send({"error" : "user not exist"})
    }
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})

router.put('/:userId', (req, res, next)=> {
  try{
    let  usuario =  lista_usuarios.filter(u => u.id == req.params["userId"])
    if (usuario.length > 0){
      usuario = usuario[0]
      let { nome, email, senha, is_active, is_admin } = req.body
      usuario = req.body
      res.send(usuario)
    }else{
      res.status(404).send({"error" : "user not exist"})
    }
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})

router.patch('/:userId', (req, res, next)=> {
  try{
    let  usuario =  lista_usuarios.filter(u => u.id == req.params["userId"])
    if (usuario.length > 0){
      usuario = usuario[0]
      let { nome, email, senha, is_active, is_admin } = req.body
      for (const [chave, valor] of Object.entries(req.body)){
        if (chave == 'email' && (valor == "" || valor == null)){
          continue
        }
        usuario[chave] =  valor
      }
      res.send(usuario)
    }else{
      res.status(404).send({"error" : "user not exist"})
    }
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})
router.get('/', (req, res, next)=> {
  try{
    res.send(lista_usuarios)
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})

router.post('/',[], (req, res, next) => {
  try{
    let { nome, email, senha, is_active, is_admin } = req.body
    let usuario = new Usuario(nome=nome, email=email, senha=senha, is_active=is_active, is_admin=is_admin)

    if (!email){
      res.status(400).send({"error" : "email required"})
    }
    else{
      if(!(email.includes("@") && email.includes("."))){
        res.status(400).send({"error" : "not valid email"})
      }
      lista_usuarios.push(usuario)
      res.send(lista_usuarios)
    }
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})


module.exports = router;