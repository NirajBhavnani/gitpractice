function makeAJAXCall(methodType, url, async=true, data=null){
    return new Promise((resolve, reject) =>{
        
        const xhttp  = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            console.log(xhttp.readyState)
            if(xhttp.readyState == 4){
                if(xhttp.status >= 200 && xhttp.status < 300){
                    resolve(xhttp.responseText)
                }
                else{
                    reject(new Error('Failure response'));
                }
            }
        }


        xhttp.open(methodType, url, async);

        // for adding
        if(data){
            xhttp.setRequestHeader("Content-Type","application/json");
            xhttp.send(JSON.stringify(data));
        } else {
            xhttp.send(); //normal
        }
    });
}

var baseUrl = 'http://localhost:3000/employees';
var baseUrl2 = 'http://localhost:3000/employees/5';
var baseUrl3 = 'http://localhost:3000/employees/5';
        
function display(data){
    console.log('Displaying successful', data);
}

function deleteUser(data){
    console.log(data)
}

function addData(data){
    console.log(data);
}

var userData = {
    "id": 5,
    "first_name": "Smit",
    "last_name": "Koli",
    "email": "smit@codingthesmartway.com"
}

var newUserData = {
    "first_name": "Aditya",
    "last_name": "Uphade",
    "email": "aditya@codingthesmartway.com"
}

document.getElementById("helloButton").addEventListener('click', function () {
    makeAJAXCall('get', baseUrl).then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })
})

document.getElementById("deleteButton").addEventListener('click', function () {
    makeAJAXCall('delete', baseUrl2).then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })
})

document.getElementById("addButton").addEventListener('click', function () {
    makeAJAXCall('post', baseUrl, true, userData).then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })
})

document.getElementById("editButton").addEventListener('click', function () {
    makeAJAXCall('put', baseUrl3, true, newUserData).then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    })
})