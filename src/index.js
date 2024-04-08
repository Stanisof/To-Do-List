import './style.css';
import { createNote , createProject} from './createDOM';
import {format} from 'date-fns';

const home = document.getElementById('home');
const content = document.getElementById('content');
const projectBar = document.getElementById('projects')
const openNoteForm = document.getElementById('add');
const noteDialog = document.getElementById('noteDialog');
let noteForm = document.getElementById('noteForm');
const projectDialog = document.getElementById('projectDialog');
const projectForm = document.getElementById('projectForm');
const openProjectForm = document.getElementById('newProject');
const dateInput = document.getElementById('duedate')

let getToday = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
let setToday = format(new Date(getToday),'yyyy-MM-dd');
dateInput.value = setToday;

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

let exampleNote = new Note("Laundry", "Wash all the clothes and fold the old ones", "2024-04-23", "low");
let example = new Note("Book flight", "Book flight to Argentina for vacation", "2024-04-29", "high");
let ex = new Note ("Buy present", "Buy birthday present for sisters birthday", "2024-05-03", "middle");


(function (){
    if(!localStorage.getItem("projectArray")) {
        let projectArray = [];
        let homeArray = {title: "Home",
                         index: 0,
                        notes: [exampleNote, example, ex],}
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
        return JSON.parse(localStorage.getItem(string))
    },
}

openProjectForm.addEventListener('click', () => projectDialog.showModal())
openNoteForm.addEventListener('click', () => {
    let dateInput = document.getElementById('duedate')
    dateInput.value = setToday;
    noteDialog.showModal();
});

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

    pushToArray(mainArray, newProject);
    renderProject(mainArray);
    addNote(mainArray, newProject);
    removePreviousContent();
    renderNote(newProject);

    data.sendData(mainArray);

    projectDialog.close();
    projectForm.reset();
}

function addNote(main, projectObject) {

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
    })
}


function cacheDOMProject() {
    let projectContainer = document.querySelector('#projects > div:last-child');
    let projectTitle = document.querySelector('#projects > div:last-child p');
    let trashProject = document.querySelector('#projects > div:last-child #trash');

    return {projectContainer, projectTitle, trashProject}
}

function renderProject(array) {
    let allProjects = document.querySelectorAll('#projects p');

    for (let i = 1; i < array.length; i++) {
        let isCreated = Array.from(allProjects).some((instance) => instance.textContent == array[i].title);

        array[i].index = i; 

        if(!isCreated) {
            projectBar.appendChild(createProject());
            cacheDOMProject().projectTitle.textContent = array[i].title;
            cacheDOMProject().projectContainer.setAttribute("data-index", i)

            cacheDOMProject().projectContainer.addEventListener('click', (e) => {
                removePreviousContent();
                let index = e.currentTarget.dataset.index
                let mainArray = data.retrieveData("projectArray");

                addNote(mainArray, mainArray[index]);
                renderNote(mainArray[index]);
                changeColor(e);
            })

            cacheDOMProject().trashProject.addEventListener('click',(e)=> {
                let mainArray = data.retrieveData("projectArray");
                let parent = e.currentTarget.parentNode
                let allDivs = document.querySelectorAll('#projects > div');
                
                mainArray[parent.dataset.index].notes.forEach((item) => {
                    if(parent.dataset.index > item.projectIndex)
                    item.projectIndex -=1
                })
                removeElement(mainArray, e, allDivs)
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

function renderNote(projectObject) {
    let allNotes = document.querySelectorAll('.note h2');
    let container = projectObject
    let notesArray = projectObject.notes
    notesArray.forEach((item) => item.projectIndex = container.index)


    for (let i = 0; i < notesArray.length; i++) {
    
        let isCreated = Array.from(allNotes).some((instance) => instance.textContent == notesArray[i].title)
        
        if(!isCreated) {
            
            notesArray[i].index = i;

            content.appendChild(createNote());
            cacheDOMNote().title.textContent = notesArray[i].title;
            cacheDOMNote().description.textContent = notesArray[i].description;
            cacheDOMNote().duedate.textContent = notesArray[i].formattedDate;
            cacheDOMNote().noteContainer.setAttribute('data-priority', notesArray[i].priority);
            cacheDOMNote().noteContainer.dataset.index = i;
            

            cacheDOMNote().deleteButton.addEventListener('click', (e) => {
                let mainArray = data.retrieveData("projectArray");
                let allNotes = document.querySelectorAll('#content > div');
                let mainPosition = notesArray[0].projectIndex;

                removeElement(notesArray, e, allNotes)
                mainArray[mainPosition].notes = notesArray;
                data.sendData(mainArray);                
            })

            cacheDOMNote().editButton.addEventListener('click', (e) => {
                let allNotes = document.querySelectorAll('#content > div')
                let parent = e.currentTarget.parentNode;

                editNote(notesArray[parent.dataset.index]);
                removeElement(notesArray, e, allNotes)
            })

            cacheDOMNote().checkBox.addEventListener('change', (e) => {
                let checkBox = e.currentTarget;
                let parent = checkBox.parentNode.parentNode;
                parent.toggleAttribute('checked')
            })
        }
    }
}


function removeElement(array, e, elements) {
    let parent = e.currentTarget.parentNode
    array.forEach((item) => {
        if(item.index > parent.dataset.index)
        item.index -= 1
    });
    elements.forEach((item) => {
        if(item.dataset.index > parent.dataset.index) {
            item.dataset.index -= 1;
            }
    });
    array.splice(parent.dataset.index, 1);
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

    taskInput.value = object.title;
    descriptionInput.value = object.description;
    dateInput.value = object.duedate;
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

function changeColor(e) {
    let allElements = document.querySelectorAll('#projects > div, #home');
    allElements.forEach((item)=> item.classList.remove('selected'));
    e.currentTarget.classList.add('selected');    
}

home.addEventListener('click', (e)=> {
    homeComponent();
    changeColor(e);
});

homeComponent();
renderProject(data.retrieveData("projectArray"));
