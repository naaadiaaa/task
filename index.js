import express from 'express';
const app = express();
const students=[

{
  id: 1,
  name: "nadia",
  city: "Mansora"

},
{
  id: 2,
  name: "Ahmed",
  city: "Shebeen"
},
{
id: 3,
name: "yasser",
city: "tanta" 

},
{
 id: 4,
 name: "ziad",
 city: "cairo"
}

];



 

const studentsFunction = (request , response) =>{
let output = '<ul>'

for(let i=0; i< students.length;i++){
const student =students[i];
output += "<li>" + student.name + "</li>";

}


output += '</ul>';

response.send(output)

};

app .get('/Students', studentsFunction)

 
app.listen(5000);

