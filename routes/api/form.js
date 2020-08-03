const express = require('express');
const router = express.Router();

router.get('/',[], (req, res, next)=> {
  res.status(405).send({"error" : "method not allowed"})
})


router.get('/me/',[], (req, res, next)=> {
  res.send({"me" : "me"})
})

router.post('/',[], (req, res, next)=> {
  const {name, email} = req.body

  if (req.headers["code"] != "42"){
    res.status(403).send({"error" : "not a valid code"})
  }else{
    console.log(`${JSON.stringify(req.body)}`)
    if (!email){
        res.status(400).send({"error" : "email required"})
    }
    else{
        if(!(email.includes("@") && email.includes("."))){
          res.status(400).send({"error" : "not valid email"})
        }
        res.send(req.body)
  }

  }

})

module.exports = router;
