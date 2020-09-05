const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');
const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res)
{
  var fName = req.body.firstName;
  var lName = req.body.lastName;
  var email = req.body.Email
  var password = req.body.password;
  console.log(fName,lName,email,password);
  var data =
  {
    members: [
      {
        fName: firstName,
        lName:lastName,
        email:Email,

        status: "subscribed"
      }
    ]
  };
  var jsonData = JSON.stringify(data);
var options =
{
  url: "https://reqres.in/api",
  method :"POST",
  headers:
  {
    "Authorization": "TusharV 58aad84e0cbe9fed818f6511989b7e94-us20"
  }

};

request(options,function(error,response,body)
{
  if(error)
  {
    console.log(error);
  }
  else {
    console.log(response.statusCode);
  }
 });
});
app.listen(3000,function()
{
  console.log("server is running on port");
});
// 58aad84e0cbe9fed818f6511989b7e94-us20
// 4cc20dedc7
// const http = require('http');
// const server = http.createServer((req,res)=>
// {
//   console.log(req.url);
//   res.end('hello');
// });
// server.listen(3000);
