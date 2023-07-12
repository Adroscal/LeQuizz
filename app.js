const express = require('express')
//Serveur WEB

var bodyParser = require('body-parser')
const app = express()

const fs = require('fs')





var cors = require ('cors');
app.use(cors({
  origin:['null','null'],
  credentials:true
}));

app.use(function (req, res, next) {

res.header('Access-Control-Allow-Origin', "http://127.0.0.1:80");
res.header('Access-Control-Allow-Headers', true);
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
next();
});

//Convertisseur du corps en string
app.use(bodyParser.urlencoded({ extended: true }))

// Convertisseur en JSON
app.use(bodyParser.json())

//Port du Web Server
const port = 3000

app.listen(port, () => {
  console.log('Listening on ' + port)
})

//Démarrage du Web Server
app.get('/questions', async function(req, res){
  console.log("Récupération de toutes les questions");
  res.send("Toutes les questions")
})



//Requête pour démarrer le quizz
app.get('/quizz', async function(req,res){
  console.log("Récupération des questions et réponses du fichier lequizz.json")
  var tableauQuestions = [];



//Promesse de donnée qui à pour fonction de lire le fichier txt qui contient les questions
  let promesseReadFile = new Promise(function(readFileSuccess) {
  

    var obj;
  fs.readFile('quizz.json', 'utf8', function (err, data) {
    if (err) throw err;
    object = JSON.parse(data);
    readFileSuccess(object); // si récupération réussie
  });
    });



    promesseReadFile.then(
      function(value){
        tableauQuestions = value;
  
        const randomTableauQuestions = tableauQuestions.sort((a, b) => 0.5 - Math.random());
        //mise en aléatoire des questions
        
        randomTableauQuestions.forEach(element => {
          console.log(randomTableauQuestions);
          //affichage de chaque questions et réponses du tableau
          
        });


        res.send(randomTableauQuestions);
        //réponse de la requête contenant les questions dans un ordre aléatoire
      }
    )


})






  


  