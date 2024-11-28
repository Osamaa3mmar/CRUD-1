const courseName=document.querySelector("#CourseName");
const courseTag=document.querySelector("#CourseTag");
const coursePrice=document.querySelector("#CoursePrice");
const courseDescription=document.querySelector("#CourseDescription");
const courseCapacity=document.querySelector("#CourseCapacity");
const addBtn=document.querySelector(".addBtn");
const table=document.querySelector("#data");
const delBtn=document.querySelector(".del-btn");
const clrBtn=document.querySelector(".clr-btn");

let courses=[];

clrBtn.onclick=()=>{
    clearInputs();
}

const loadContent=()=>{
    console.log(courses.length);
    table.innerHTML=courses.map((element,index)=>{
        return`
        <tr>
            <td>${index}</td>
            <td>${element.name}</td>
            <td>${element.tag}</td>
            <td>${element.price}</td>
            <td>${element.description}</td>
            <td>${element.capacity}</td>
          </tr>
        `;
    }).join("");

}
function clearInputs(){

    courseName.value="";
    courseTag.value="";
    coursePrice.value="";
    courseDescription.value="";
    courseCapacity.value="";
}

if(localStorage.getItem("courses")!=null){
courses=JSON.parse(localStorage.getItem("courses"));
}
loadContent();

addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const course={
        name:courseName.value,
        tag:courseTag.value,
        price:coursePrice.value,
        description:courseDescription.value,
        capacity:courseCapacity.value
    }

    courses.push(course);
    localStorage.setItem("courses",JSON.stringify(courses));
    table.innerHTML+=`
    <tr>
            <td>1</td>
            <td>${course.name}</td>
            <td>${course.tag}</td>
            <td>${course.price}</td>
            <td>${course.description}</td>
            <td>${course.capacity}</td>
          </tr>`;

          clearInputs();
})






delBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.removeItem("courses");
    courses=[];
    loadContent();
})