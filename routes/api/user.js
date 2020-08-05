const express = require('express');
const lista_usuarios = require('../../models/user');
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
    let usuario = { id: 0 }
    const { nome, email, senha, is_active, is_admin } = req.body
    usuario.nome = nome
    usuario.email = email
    usuario.senha = senha
    usuario.is_active = is_active
    usuario.is_admin = is_admin

    if (!email){
      res.status(400).send({"error" : "email required"})
    }
    else{
      if(!(email.includes("@") && email.includes("."))){
        res.status(400).send({"error" : "not valid email"})
      }
      usuario.id = lista_usuarios[lista_usuarios.length-1].id +1
      lista_usuarios.push(usuario)
      res.send(lista_usuarios)
    }
  }catch(err){
    console.error(err.message)
    res.status(500).send({"error" : "Server Error"})
  }
})


module.exports = router;