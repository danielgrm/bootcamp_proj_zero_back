const express = require('express');
let lista_usuarios = require('../../models/list');
const Usuario = require('../../models/user');
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
      usuario.nome = nome
      usuario.email = email
      usuario.senha = senha
      usuario.is_active = is_active
      usuario.is_admin = is_admin

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
      if (nome){
        usuario.nome = nome
      }
      if (email){
        usuario.email = email
      }
      if (senha){
        usuario.senha = senha
      }
      //TODO: validar undefined
      if (is_active){
        usuario.is_active = is_active
      }
      if (is_admin){
        usuario.is_admin = is_admin
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
    let usuario = new Usuario(id=0, nome=nome, email=email, senha=senha, is_active=is_active, is_admin=is_admin)

    if (!email){
      res.status(400).send({"error" : "email required"})
    }
    else{
      if(!(email.includes("@") && email.includes("."))){
        res.status(400).send({"error" : "not valid email"})
      }
      // TODO: tranformar no método de classe
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