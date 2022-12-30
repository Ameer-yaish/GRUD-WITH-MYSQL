var data = document.getElementById('data');
var courseName=document.getElementById('courseName');
var courseCat=document.getElementById('courseCat');
var coursePrice=document.getElementById('coursePrice');
var courseDesc=document.getElementById('courseDesc');
var addBtn = document.getElementById('click');
let courses=[];

addBtn.onclick=function(){
    inputData();
}
async function getData(){
    var response =await fetch(`http://localhost:3000/courses`);
    var data = await response.json();
    courses=data.courses;
    showData();
}
getData();
function showData(){
    var result =``;
    for(var i=0;i<courses.length;i++){
        result+=`
            <tr>
                <td>${courses[i].id}</td>
                <td>${courses[i].name}</td>
                <td>${courses[i].cat}</td>
                <td>${courses[i].price}</td>
                <td>${courses[i].description}</td>
            </tr>
        `;
    }
    data.innerHTML=result;
}
function inputData(){ 

    var course ={
        name:courseName.value,
        cat:courseCat.value,
        price:coursePrice.value,
        description:courseDesc.value,
    }
    crudOperation('addCourse','POST',course)
}

function crudOperation(endPoint,method,data){


    // POST request using fetch()
fetch(`http://localhost:3000/${endPoint}`, {
    // Adding method type
    method: method,
    // Adding body or contents to send
    body: JSON.stringify(data),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
// Converting to JSON
.then(response => response.json())
// Displaying results to console
.then(json => {
    if(json.message=='success'){
        getData();
    }
});
}