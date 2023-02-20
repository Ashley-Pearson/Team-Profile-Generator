const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, id, email, github }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <link rel="stylesheet" href="./dist/style.css">
  <title>Team Profile</title>
</head>

<body>
 <div class="jumbotron jumbotron-fluid">

 </body>
</html>`;