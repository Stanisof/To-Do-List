import './style.css';
import { createNote } from './createDOM';

const home = document.getElementById('home');
const content = document.getElementById('content');
const openNoteForm = document.getElementById('add');
const noteDialog = document.getElementById('noteDialog');
const noteForm = document.getElementById('noteForm');

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
    projects.push(homeArray)
console.log(homeArray)

    displayElement(projects[0]);
console.log(projects)
    openNoteForm.addEventListener('click', () => noteDialog.showModal());

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        const fd = new FormData(noteForm);

        let note = new Note(fd.get('task'), fd.get('description'), fd.get('duedate'), fd.get('priority'));
        
        pushToArray(projects[0], note);
        displayElement(projects[0]);

        noteDialog.close();
        noteForm.reset();
        console.log(projects[0])
    })
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
            
            array[i].index = i;

            content.appendChild(createNote());
            cacheNoteElements().title.textContent = array[i].title;
            cacheNoteElements().description.textContent = array[i].description;
            cacheNoteElements().duedate.textContent = array[i].duedate;
            cacheNoteElements().noteContainer.setAttribute('data-priority', array[i].priority) 
            
            removeFromArray(array, array[i], cacheNoteElements().deleteButton)
        }
    }

}

function pushToArray(array, object) {
    array.push(object)
}

function removeFromArray(array, object, button) {

    button.addEventListener('click', () => {
      array.splice(object.index,1);
  
      array.forEach((item)=> {
        if(item.dataIndex > object.dataIndex) 
        item.dataIndex -= 1;
      })
      console.log(array);
      //noteContainer.remove();
  
    })
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