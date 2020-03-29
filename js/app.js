//Vars
const car = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');
const coursesList = document.querySelector('#lista-carrito tbody');
const clearCarBtn = document.getElementById('vaciar-carrito');

//Listeners
getEventListeners();

function getEventListeners(){
    courses.addEventListener('click', buyCourses);
    coursesList.addEventListener('click', deleteCourse);
    clearCarBtn.addEventListener('click', clearCar);
    document.addEventListener('DOMContentLoaded', getLocalStorage);
}

//Functions

function buyCourses(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const course = e.target.parentElement.parentElement;
        dataCourse(course);
    }
}

function dataCourse(course){
    const infoCourse = {
        image: course.querySelector('img').src,
        tittle: course.querySelector('h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }

    setCourse(infoCourse);
}

function setCourse(data){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${data.image}" width="100"> 
        </td>
        <td> ${data.tittle} </td>
        <td> ${data.price} </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${data.id}">X</a>
        </td>
    `;
    coursesList.appendChild(row);
    saveInLS(data);
}

function deleteCourse(e){
    e.preventDefault();
    let course;

    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        console.log('The course has been removed.')
    }
}

function clearCar(e){
    while(coursesList.firstChild){
        coursesList.removeChild(coursesList.firstChild);
    }
    return false
}

function saveInLS(course){
    let courses;
    courses = coursesFromLS();
    courses.push(course);
    localStorage.setItem('cursos', JSON.stringify(courses));
}

function coursesFromLS(){
    let coursesLS;
    if(localStorage.getItem('cursos') === null) {
        coursesLS = [];
    } else {
        coursesLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return coursesLS;
}

function getLocalStorage(){
    let coursesLS;
    coursesLS = coursesFromLS();
    coursesLS.forEach( data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${data.image}" width="100"> 
            </td>
            <td> ${data.tittle} </td>
            <td> ${data.price} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${data.id}">X</a>
            </td>
        `;
        coursesList.appendChild(row);
    });
    console.log(coursesLS);
}