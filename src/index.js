import './style.css';
import { createNote , createProject} from './createDOM';
import {format} from 'date-fns';
//import { data } from './storage';

const home = document.getElementById('home');
const content = document.getElementById('content');
const projectBar = document.getElementById('projects')
const openNoteForm = document.getElementById('add');
const noteDialog = document.getElementById('noteDialog');
let noteForm = document.getElementById('noteForm');
const projectDialog = document.getElementById('projectDialog');
const projectForm = document.getElementById('projectForm');
const openProjectForm = document.getElementById('newProject');

(function (){
    if(!localStorage.getItem("projectArray")) {
        let projectArray = [];
        let homeArray = {title: "Home",
                         index: 0,
                        notes: [],}
        projectArray.push(homeArray);
        localStorage.setItem("projectArray", JSON.stringify(projectArray))
    }
})()

let data = {
    sendData: function(array) {
        localStorage.clear();
        localStorage.setItem("projectArray", JSON.stringify(array));
    },
    retrieveData: function(string) {
        //localStorage.removeItem(string);
        return JSON.parse(localStorage.getItem(string))
    },
}


//let mainArray = [];
//let homeArray = [];

class Note {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.formattedDate = this.formatDate();
    }

    formatDate() {
    return  format(new Date(this.duedate), 'dd.MMMM');
    }
}

/* let noteIns = new Note("Task", "Long description of words", "2024-03-21", "middle");
let newTask = new Note("Cleaning", "I have to clean the whole godamn house", "2024-04-10", "low")
let task = new Note("coding", "i have to code a lot and it huerts", "2024-03-30", "high"); */

/* pushToArray(homeArray, noteIns);
pushToArray(homeArray, newTask);
pushToArray(homeArray, task); */


openProjectForm.addEventListener('click', () => projectDialog.showModal())
openNoteForm.addEventListener('click', () => noteDialog.showModal());

function pushToArray(array, object) {
    if(!array.includes(object)) {
    array.push(object);
    }
}

function homeComponent() {
    let mainArray = data.retrieveData("projectArray")
    removePreviousContent();
    addNote(mainArray, mainArray[0])
    renderNote(mainArray[0]);
//console.log(homeArray);
//console.log(mainArray);
}

projectForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    e.stopImmediatePropagation(); 
    const fd = new FormData(projectForm);

    addProject(fd.get('title'));
})

function addProject(title) {
    let newProject = {};
    newProject.title = `${title}`;
    newProject.notes = [];

    let mainArray = data.retrieveData("projectArray");

    pushToArray(mainArray, newProject);// fügt das ProjObj zu mainArray hinzu
    renderProject(mainArray);

console.log(mainArray);

    addNote(mainArray, newProject) // soll neue Notiz zum array im Project-obj hinzufügen
    removePreviousContent();
    renderNote(newProject);

    data.sendData(mainArray);

console.log(mainArray)
    projectDialog.close();
    projectForm.reset();
}

function addNote(main, projectObject) { //hier wird das note Array aus projectObject verarbeitet, außer beim Homecomponent

    let newNoteForm = noteForm.cloneNode(true);
    noteForm.parentNode.replaceChild(newNoteForm,noteForm);
    noteForm = newNoteForm;
    

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const fd = new FormData(noteForm);

        let note = new Note(fd.get('task'), fd.get('description'), fd.get('duedate'), fd.get('priority'));
        
        pushToArray(projectObject.notes, note);
        renderNote(projectObject);

        data.sendData(main);

        noteDialog.close();
        noteForm.reset();
    console.log(main);
//hier muss aber das mainArray überschrieben werden mit der neuen Notiz
    })
}


function cacheDOMProject() {
    let projectContainer = document.querySelector('#projects > div:last-child');
    let projectTitle = document.querySelector('#projects > div:last-child p');
    let trashProject = document.querySelector('#projects > div:last-child #trash');

    return {projectContainer, projectTitle, trashProject}
}

function renderProject(array) { // hier kommt das mainArray rein
    let allProjects = document.querySelectorAll('#projects p');

    for (let i = 1; i < array.length; i++) {
        let isCreated = Array.from(allProjects).some((instance) => instance.textContent == array[i].title);

        array[i].index = i; // hier wird position des Projekts in main gespeichert

        if(!isCreated) {
            projectBar.appendChild(createProject());
            cacheDOMProject().projectTitle.textContent = array[i].title;
            cacheDOMProject().projectContainer.setAttribute("data-index", i)

            //let projectObject = array[i];

            cacheDOMProject().projectContainer.addEventListener('click', (e) => {
                removePreviousContent();
                let index = e.currentTarget.dataset.index
                console.log(index)

                let mainArray = data.retrieveData("projectArray");


                addNote(mainArray, mainArray[index]); //wenn ein Project gelöscht wird, dann stimmt i nicht mehr
                renderNote(mainArray[index]);
                
                let allElements = document.querySelectorAll('#projects > div');
                allElements.forEach((item)=> item.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
            })

            cacheDOMProject().trashProject.addEventListener('click',(e)=> {
                let mainArray = data.retrieveData("projectArray");
                let parent = e.currentTarget.parentNode
                let allDivs = document.querySelectorAll('#projects > div');
                
                mainArray[parent.dataset.index].notes.forEach((item) => {
                    if(parent.dataset.index > item.projectIndex)
                    item.projectIndex -=1
                })
                mainArray.forEach((item) => {
                    if(item.index > parent.dataset.index)
                    item.index -= 1
                });
                mainArray.splice(parent.dataset.index,1); //wenn es danach steht sollte es den Error fixen, dass er .notes nicht lesen kann, weil da kein Obj mehr ist


                allDivs.forEach((item) => {
                    if(item.dataset.index > parent.dataset.index) {
                        item.dataset.index -= 1;
                        }
                    })

                parent.remove()
                /* removeFromArray(mainArray, projectObject); // entfernt nur index 1 > die connecteten indices stimmen auch nicht mehr
                console.log(mainArray);
                console.log(projectObject) */
                //removeFromDOM(e);
                console.log(mainArray);

                data.sendData(mainArray)
            })
        }
    }
}


function cacheDOMNote() {
    let noteContainer = document.querySelector('.note:last-child');
    let title = document.querySelector('.note:last-child h2');
    let description = document.querySelector('.note:last-child #des');
    let duedate = document.querySelector('.note:last-child #date');
    let deleteButton = document.querySelector('.note:last-child #delete');
    let editButton = document.querySelector('.note:last-child #edit');
    let checkBox = document.querySelector('.note:last-child input')

    return {noteContainer, title, description, duedate, deleteButton, editButton, checkBox};
}

function renderNote(projectObject) { //recieved das projObj
    let allNotes = document.querySelectorAll('.note h2');
    let container = projectObject
    let notesArray = projectObject.notes
    notesArray.forEach((item) => item.projectIndex = container.index)


    for (let i = 0; i < notesArray.length; i++) {
    
        let isCreated = Array.from(allNotes).some((instance) => instance.textContent == notesArray[i].title)
        
        if(!isCreated) {
            
            notesArray[i].index = i; // könnte auch beim pushen hinzugefügt werden

            content.appendChild(createNote());
            cacheDOMNote().title.textContent = notesArray[i].title;
            cacheDOMNote().description.textContent = notesArray[i].description;
            cacheDOMNote().duedate.textContent = notesArray[i].formattedDate;
            cacheDOMNote().noteContainer.setAttribute('data-priority', notesArray[i].priority);
            cacheDOMNote().noteContainer.dataset.index = i;
            

            cacheDOMNote().deleteButton.addEventListener('click', (e) => {
                let mainArray = data.retrieveData("projectArray");
                let allNotes = document.querySelectorAll('#content > div');
                let parent = e.currentTarget.parentNode;
                let mainPosition = notesArray[0].projectIndex;

                notesArray.splice(parent.dataset.index,1);
                allNotes.forEach((item)=> {
                    if(item.dataset.index > parent.dataset.index)
                    item.dataset.index -= 1;
                }) 
                //removeFromArray(notesArray, notesArray[i]);
                mainArray[mainPosition].notes = notesArray;

                parent.remove()
                data.sendData(mainArray);
                //removeFromDOM(e);
                
            })

            cacheDOMNote().editButton.addEventListener('click', (e) => {
                
                let parent = e.currentTarget.parentNode;

                editNote(notesArray[parent.dataset.index]);
                notesArray.splice(parent.dataset.index,1);
                allNotes.forEach((item)=> {
                    if(item.dataset.index > parent.dataset.index)
                    item.dataset.index -= 1;
                })
                parent.remove()
                //senden müsste nicht notwendig sein, da es submitted wird

                
                //removeFromArray(notesArray, notesArray[i]);
                //removeFromDOM(e);
            })

            cacheDOMNote().checkBox.addEventListener('change', (e) => {
                let checkBox = e.currentTarget;
                let parent = checkBox.parentNode.parentNode;
                parent.toggleAttribute('checked')
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
}

function removeFromDOM(e) {
    let button = e.currentTarget;
    let parent = button.parentNode;
    let allDivs = document.querySelectorAll('#sidebar div');
    console.log(allDivs);

    allDivs.forEach((item) => {
    if(item.dataset.index > parent.dataset.index) {
        item.dataset.index -= 1;
        }
    })
    

    console.log(parent.dataset.index)
    parent.remove();
}

function removePreviousContent() {
    let allElements = content.querySelectorAll('.note');
    allElements.forEach((node) => node.remove());
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
renderProject(data.retrieveData("projectArray"));
