//Vars
const car = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');

//Listeners
getEventListeners();

function getEventListeners(){
    courses.addEventListener('click', buyCourses);
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
    console.log(course);
}