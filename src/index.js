import './style.css';
import { createNote , createProject} from './createDOM';

const home = document.getElementById('home');
const content = document.getElementById('content');
const projectBar = document.getElementById('projects')
const openNoteForm = document.getElementById('add');
const noteDialog = document.getElementById('noteDialog');
const noteForm = document.getElementById('noteForm');
const projectDialog = document.getElementById('projectDialog');
const projectForm = document.getElementById('projectForm');
const openProjectForm = document.getElementById('newProject');

openProjectForm.addEventListener('click', () => projectDialog.showModal())
openNoteForm.addEventListener('click', () => noteDialog.showModal());



class Note {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.status = false;
    }
}

let projects = [];
let homeArray = [];

let homeTitle = "title";
pushToArray(homeArray, homeTitle)
pushToArray(projects, homeArray);

let noteIns = new Note("Task", "Long description of words", "2024-03-21", "middle");
let newTask = new Note("Cleaning", "I have to clean the whole godamn house", "2024-04-10", "low")
let task = new Note("coding", "i have to code a lot and it huerts", "2024-03-30", "high");

pushToArray(projects[0], noteIns);
pushToArray(projects[0], newTask);
pushToArray(projects[0], task);

function pushToArray(array, object) {
    if(!array.includes(object))
    array.push(object)
}

function homeComponent(projectsArray) {
console.log(homeArray)

    displayNote(projects[0]); // auch kaka weil [0]

console.log(projects)

    addNote(projects[0]);
    //noteForm.addEventListener('submit', (e) => addNote(e, projects[0]))
}

/* 
function (projectsArray) {
    projectsArray = projects;
    let newProject = [];
    pushToArray(projectsArray, newProject)

//console.log(homeArray)

    displayNote(projects[0]); // auch kaka weil [0]
//console.log(projects)

    openNoteForm.addEventListener('click', () => noteDialog.showModal());
    //das kann glaube ich auch global- wichtig ist wohin submitted wird

    noteForm.addEventListener('submit', (e) => addNote(e, projects[0]))
} */



function addNote(array) {
    
    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const fd = new FormData(noteForm);

        let note = new Note(fd.get('task'), fd.get('description'), fd.get('duedate'), fd.get('priority'));
                
        pushToArray(array, note);
        displayNote(array);
        noteDialog.close();
        noteForm.reset();
    console.log(array)
    })
}

function addProject(e, title) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const fd = new FormData(projectForm);

    let newProject = []
    let projectTitle = `${title}`;
    newProject.push(projectTitle);

    pushToArray(projects, newProject);
    displayProject(projects);
    projectDialog.close();
    projectForm.reset();
}

function cacheProjectElement() {
    let projectContainer = document.querySelector('#projects > div:last-child');
    let projectTitle = document.querySelector('#projects > div:last-child p');
    let trashProject = document.querySelector('#projects > div:last-child #trash');

    return {projectContainer, projectTitle, trashProject}
}

function displayProjectDOM(array) {
    let allProjects = document.querySelectorAll('#projects p');

    for (let i = 0; i < array.length; i++) {
        let isCreated = Array.from(allProjects).some((instance) => instance == array[i]);

        if(!isCreated) {
            projectBar.appendChild(createProject());
            cacheProjectElement().projectTitle.textContent = array[i][0]
        }
    }

}

function cacheNoteElements() {
    let noteContainer = document.querySelector('.note:last-child');
    let title = document.querySelector('.note:last-child h2');
    let description = document.querySelector('.note:last-child #des');
    let duedate = document.querySelector('.note:last-child #date');
    let deleteButton = document.querySelector('.note:last-child #delete');
    let editButton = document.querySelector('.note:last-child #edit');

    return {noteContainer, title, description, duedate, deleteButton, editButton};
}

function displayNote(array) {
    let allNotes = document.querySelectorAll('.note h2')
    
    for (let i = 1; i < array.length; i++) {
    
        let isCreated = Array.from(allNotes).some((instance) => instance.textContent == array[i].title)
        
        if(!isCreated) {
            
            array[i].index = i; // könnte auch beim pushen hinzugefügt werden

            content.appendChild(createNote());
            cacheNoteElements().title.textContent = array[i].title;
            cacheNoteElements().description.textContent = array[i].description;
            cacheNoteElements().duedate.textContent = array[i].duedate;
            cacheNoteElements().noteContainer.setAttribute('data-priority', array[i].priority) 
            

           let passArray = array;
           let passObject = array[i]

            cacheNoteElements().deleteButton.addEventListener('click', (e) => {
                removeFromArray(passArray, passObject);
                removeFromDOM(e);
                
            })

            cacheNoteElements().editButton.addEventListener('click', (e) => {
                editNote(array[i]);
                removeFromArray(passArray, passObject);
                removeFromDOM(e);
            })
        }
    }
}


function removeFromArray(array, object) {

      array.splice(object.index,1);
  
      array.forEach((item)=> {
        if(item.index > object.index) 
        item.index -= 1;
      })
      console.log(array);
      //noteContainer.remove(); --> Ist im DOM Build enthalten
}

function removeFromDOM(e) {
    let button = e.currentTarget;
    let parent = button.parentNode;
    parent.remove();
}


function editNote(object) {

    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('duedate');
    let lowInput = document.getElementById('low');
    let middleInput = document.getElementById('middle');
    let highInput = document.getElementById('high');

    taskInput.setAttribute('value', object.title);
    descriptionInput.value = object.description;
    dateInput.setAttribute('value', object.duedate);
    switch(object.priority) {
        case('low'): lowInput.setAttribute('checked', '')
            break
        case('middle'): middleInput.setAttribute('checked', '')
            break
        case('high'): highInput.setAttribute('checked', '');
            break
    }

    noteDialog.showModal();
}





home.addEventListener('click', ()=> homeComponent());


homeComponent();

console.log(projects)