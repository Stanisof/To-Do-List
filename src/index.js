import './style.css';
import { createNote } from './createDOM';

const home = document.getElementById('home');
const content = document.getElementById('content');
const openNoteForm = document.getElementById('add');
const noteDialog = document.getElementById('noteDialog');
const noteForm = document.getElementById('noteForm');

console.log(noteForm)

class Note {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.status = false;
    }
}

let projects = []


function homeComponent() {
    let homeArray = [];
    pushToArray(projects, homeArray)
console.log(homeArray)

    displayElement(projects[0]); // auch kaka weil [0]
console.log(projects)

    openNoteForm.addEventListener('click', () => noteDialog.showModal());
    //das kann glaube ich auch global- wichtig ist wohin submitted wird

    noteForm.addEventListener('submit', (e) => addNote(e, projects[0]))
}

function pushToArray(array, object) {
    if(!array.includes(object))
    array.push(object)
}

function addNote(e, item) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const fd = new FormData(noteForm);

        let note = new Note(fd.get('task'), fd.get('description'), fd.get('duedate'), fd.get('priority'));
            
        pushToArray(item, note);
        displayElement(projects[0]);

        noteDialog.close();
        noteForm.reset();
        console.log(item)
    
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


function displayElement(array) {
    let allNotes = document.querySelectorAll('.note h2')
    
    for (let i = 0; i < array.length; i++) {
    
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

let noteIns = new Note("Task", "Long description of words", "2024-03-21", "middle");
let newTask = new Note("Cleaning", "I have to clean the whole godamn house", "2024-04-10", "low")
let task = new Note("coding", "i have to code a lot and it huerts", "2024-03-30", "high");

homeComponent();

pushToArray(projects[0], noteIns);
pushToArray(projects[0], newTask);
pushToArray(projects[0], task);

console.log(projects)