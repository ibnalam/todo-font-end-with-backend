const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


function check(req, res, next){
    let auth = req.headers
    console.log(auth.authorization)
    if(auth.authorization == "dghzf"){
        next()
    }else{
        res.send({"error": "You have no permission"})
    }
}



app.post('/createtodos',check, function (req, res) {
    let {name, email,roll,reg} = req.body
    console.log(req.body)


    if(!name){
        console.log("nam nai ")
        res.send({"error": "name is required "})
    }else if (!email) {
        res.send({"error": "email is required "})
    }





  res.send({"success" : "Registrarion Successful"})
})




app.listen(8000,()=>{
    console.log("port is running")
})
