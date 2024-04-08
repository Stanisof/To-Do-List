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
const dateInput = document.getElementById('duedate');

let getToday = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
let setToday = format(new Date(getToday),'yyyy-MM-dd');
dateInput.value = setToday;

openProjectForm.addEventListener('click', () => projectDialog.showModal())
openNoteForm.addEventListener('click', () => {
    let dateInput = document.getElementById('duedate')
    dateInput.value = setToday;
    noteDialog.showModal()
});

class Note {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.status = false;
        this.formattedDate = this.formatDate();
    }

    formatDate() {
    return  format(new Date(this.duedate), 'dd.MMMM');
    }
}

let exampleNote = new Note("Laundry", "Wash all the clothes and fold the old ones", "2024-04-23", "low");
let example = new Note("Book flight", "Book flight to Argentina for vacation", "2024-04-29", "high");
let ex = new Note ("Buy present", "Buy birthday present for sisters birthday", "2024-05-03", "middle");
let projectExample = new Note("Tiles", "Choose tile colors and form", "2024-05-15", "middle");
let proEx = new Note("Furniture", "Decide on what to keep and what to throw out. Drive to ikea for inspo", "2024-05-08", "low");

(function (){
    if(!localStorage.getItem("projectArray")) {
        let projectArray = [];
        let homeArray = {title: "Home",
                         index: 0,
                        notes: [exampleNote, example, ex],};
        let exampleProject = {title: "Kitchen renovation",
                              index: 1,
                              notes: [projectExample, proEx]}
        projectArray.push(homeArray);
        projectArray.push(exampleProject);
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

let project = {
    addProject: function(title) {
        let newProject = {};
        newProject.title = `${title}`;
        newProject.notes = [];

        let mainArray = data.retrieveData("projectArray");

        this.pushToArray(mainArray, newProject);// fügt das neue Projekt in das mainArray hinzu
        this.renderProjects(mainArray); // zeigt die Projekte in der sidebar an
        this.addNote(mainArray, newProject); //ist der Listener für Submit form
        this.removePreviousContent(); // entfernt erst die Notizen von anderem Projekt
        this.renderNotes(newProject); // zeigt die Notizen im content Bereich an

        data.sendData(mainArray);

        projectDialog.close();
        projectForm.reset();
    },
    pushToArray: function(array, item) {
        if(!array.includes(item))
        array.push(item)
    },
    renderProjects: function(array) {
        let allProjects = document.querySelectorAll('#projects p');

        for (let i = 1; i < array.length; i++) {
            let isCreated = Array.from(allProjects).some((instance) => instance.textContent == array[i].title);

            array[i].index = i;

            if(!isCreated) {
                projectBar.appendChild(createProject());
                this.cacheDOMProject().projectTitle.textContent = array[i].title;
                this.cacheDOMProject().projectContainer.setAttribute('data-index', i);

                this.cacheDOMProject().projectContainer.addEventListener('click', (e) => {
                    let index = e.currentTarget.dataset.index;
                    let mainArray = data.retrieveData("projectArray");

                    this.removePreviousContent();
                    this.addNote(mainArray, mainArray[index]);
                    this.renderNotes(mainArray[index]);
                    
                    this.changeColor(e)
                })

                this.cacheDOMProject().trashProject.addEventListener('click',(e)=> {
                    let mainArray = data.retrieveData("projectArray");
                    let parent = e.currentTarget.parentNode
                    let allDivs = document.querySelectorAll('#projects > div');
                    
                    mainArray[parent.dataset.index].notes.forEach((item) => {
                        if(parent.dataset.index > item.projectIndex)
                        item.projectIndex -=1
                    })
                    this.removeElement(mainArray, e, allDivs)
                    data.sendData(mainArray);
                })
            }
        }
    },
    renderNotes: function(projectObject) {
        let allNotes = document.querySelectorAll('.note h2');
        let container = projectObject;
        let notesArray = projectObject.notes;
        notesArray.forEach((item) => item.projectIndex = container.index);
    
        for (let i = 0; i < notesArray.length; i++) {
    
            let isCreated = Array.from(allNotes).some((instance) => instance.textContent == notesArray[i].title)
        
            if(!isCreated) {
            
                notesArray[i].index = i;

                content.appendChild(createNote());
                this.cacheDOMNote().title.textContent = notesArray[i].title;
                this.cacheDOMNote().description.textContent = notesArray[i].description;
                this.cacheDOMNote().duedate.textContent = notesArray[i].formattedDate;
                this.cacheDOMNote().noteContainer.setAttribute('data-priority', notesArray[i].priority) ;
                this.cacheDOMNote().noteContainer.dataset.index = i;
                

                this.cacheDOMNote().deleteButton.addEventListener('click', (e) => {
                    let mainArray = data.retrieveData("projectArray");
                    let allNotes = document.querySelectorAll('#content > div');
                    let mainPosition = notesArray[0].projectIndex;

                    this.removeElement(notesArray, e, allNotes)
                    mainArray[mainPosition].notes = notesArray;
                    data.sendData(mainArray);  
                })

                this.cacheDOMNote().editButton.addEventListener('click', (e) => {
                    let allNotes = document.querySelectorAll('#content > div')
                    let parent = e.currentTarget.parentNode;

                    this.editNote(notesArray[parent.dataset.index]);
                    this.removeElement(notesArray, e, allNotes)
                })

                this.cacheDOMNote().checkBox.addEventListener('change', (e) => {
                    let checkBox = e.currentTarget;
                    let parent = checkBox.parentNode.parentNode;
                    parent.toggleAttribute('checked')
                })
            }
        }
    },
    addNote: function(main, projectObject) {
        let newNoteForm = noteForm.cloneNode(true);
        noteForm.parentNode.replaceChild(newNoteForm,noteForm);
        noteForm = newNoteForm;
    

        noteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            const fd = new FormData(noteForm);

            let note = new Note(fd.get('task'), fd.get('description'), fd.get('duedate'), fd.get('priority'));
            
            this.pushToArray(projectObject.notes, note);
            this.renderNotes(projectObject);

            data.sendData(main);

            noteDialog.close();
            noteForm.reset();
        })
    },
    cacheDOMProject: function() {
        let projectContainer = document.querySelector('#projects > div:last-child');
        let projectTitle = document.querySelector('#projects > div:last-child p');
        let trashProject = document.querySelector('#projects > div:last-child #trash');

        return {projectContainer, projectTitle, trashProject}
    },
    cacheDOMNote: function() {
        let noteContainer = document.querySelector('.note:last-child');
        let title = document.querySelector('.note:last-child h2');
        let description = document.querySelector('.note:last-child #des');
        let duedate = document.querySelector('.note:last-child #date');
        let deleteButton = document.querySelector('.note:last-child #delete');
        let editButton = document.querySelector('.note:last-child #edit');
        let checkBox = document.querySelector('.note:last-child input');

        return {noteContainer, title, description, duedate, deleteButton, editButton, checkBox};
    },
    removeElement: function(array, e, elements) {
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
    },
    removePreviousContent: function() {
        let allElements = content.querySelectorAll('.note');
        allElements.forEach((node) => node.remove());
    },
    editNote: function(object) {
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
    },
    changeColor: function(e) {
        let allElements = document.querySelectorAll('#projects > div, #home');
        allElements.forEach((item)=> item.classList.remove('selected'));
        e.currentTarget.classList.add('selected');  
    }
}

function homeComponent() {
    let mainArray = data.retrieveData("projectArray")
    project.removePreviousContent();
    project.addNote(mainArray, mainArray[0])
    project.renderNotes(mainArray[0]);
}

projectForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    e.stopImmediatePropagation(); 
    const fd = new FormData(projectForm);

    project.addProject(fd.get('title'));
})

home.addEventListener('click', (e)=> {
    homeComponent();
    project.changeColor(e);
});

homeComponent();
project.renderProjects(data.retrieveData("projectArray"));
