# RanticIceCreamApp
Repositorio para la entrega del proyecto "Rantic Ice Cream App".


Patron utilizado:
MVC

Design:
components: model,store,controller,network.
network: Compuesta por los archivos: response.js, con las funciones de success y error, para tener una forma estructurada de cualquier response o respuesta que venga desde el servidor, y routes.js, tendrá importadas las rutas y peticiones de cada componente del servidor.
node_modules
config.js
db.js (database)
package-lock.json

Must haves:
Insomnia/Postman.

Peticion:


Register:

POST:http://localhost:4000/user/register

req.body = 
    {
	      "name":"<INSERT>",
	      "email":"<INSERT>",
	      "password":"<INSERT>"
  }

response = {
       "error": "",
       "body": {
         "order": [],
         "orderList": [],
         "_id": "",
         "name": "<INSERT>",
         "email": "<INSERT>",
         "password": "<INSERT>",
         "__v": 0
       }
}


Login steps:

POST:

http://localhost:4000/session/login

req.body = 
	{
	"email":"<INSERT>",
	"password":"<INSERT>"
	}
  
response = 
    {
      "error": "",
      "body": {
        "_id": "",
        "user": {
          "order": [],
          "orderList": [],
          "_id": "",
          "name": "<INSERT>",
          "email": "<INSERT>",
          "password": "<INSERT>",
          "__v": 0
        },
      }
    }




POST:http://localhost:4000/orderList

req.body = {
	      "user":"",
	      "duration": 
}

response = {
  "error": "",
  "body": {
    "metaUser": "",
    "Time": "",
    "TimeOut": 
  }
}



