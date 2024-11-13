const express = require('express');

//service
const my_business_logic = require('./service/my_business_logic');

const app = express();
const port = 3000;
app.use(express.json());


//get
//greetings
app.get('/', (request, response) => {
res.send('Daisy!');
});

let students =[
    {id: 1, name: 'John', age: 20},
    {id: 2, name: 'Jane', age: 21},
    {id: 3, name: 'Bob', age: 22},
    {id: 4, name: 'Alice', age: 23},
    {id: 5, name: 'Mike', age: 24},
];

app.get(`/list_of_friends_by_id/:`,(request,response)=>{
    console.log("logging request params",request,response);
    console.log("use value from end",request.params.students_id);
    return request.send("sending nothing back")
});

app.get('/list_of_students', (response) => {
    console.log("i got here to");
    return response.send(my_business_logic.get_list_of_students());
});

app.get('/list_of_student_by_id/:student_id', (request, response) => {
    return response.send(friends);
});

app.get('./list_of_students_by_id/:students_id',(request,response)  =>{

    // console.log("logging request params", request, response)

    //console.log("use value from front end", request, response)
    return response.status(200).send(my_business_logic.getstudentsbyid(request));
});


//post

app.post('/sign_up', (request, response) => {
    console.log("logging request params", request, response.body)
    return response.send(students);
});

//delete

app.delete('/sign_up', (request, response) => {
    console.log("logging request params", request, response.body)
    return response.send(students);
});

//patch

app.patch('/sign_up', (request, response) => {
    console.log("logging request params", request, response.body)
    return response.send(students);
});

//put

app.put('/sign_up', (request, response) => {
    console.log("logging request params", request, response.body)
    return response.send(students);
});
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});

 const bodyParser = require('body-parser');
 app.use(bodyParser.json());

