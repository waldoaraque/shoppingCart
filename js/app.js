//Vars
const car = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');
const coursesList = document.querySelector('#lista-carrito tbody');

//Listeners
getEventListeners();

function getEventListeners(){
    courses.addEventListener('click', buyCourses);
    courses.addEventListener('click', deleteCourse);
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

    console.log(course);
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
}

function deleteCourse(e){
    e.preventDefault();
    let course;

    if (e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        console.log('The course has been removed.')
    }
}