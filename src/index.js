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

openProjectForm.addEventListener('click', () => projectDialog.showModal())
openNoteForm.addEventListener('click', () => noteDialog.showModal());

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

let project = {
    mainArray: [],
    addProject: function(title) {
        let newProject = []
        let projectTitle = `${title}`;
        newProject.push(projectTitle);

        this.pushToArray(this.mainArray, newProject);// fügt das neue Projekt in das mainArray hinzu
        this.renderProjects(this.mainArray); // zeigt die Projekte in der sidebar an
        this.addAndRenderNotes(newProject); //ist der Listener für Submit form
        this.removePreviousContent(); // entfernt erst die Notizen von anderem Projekt
        this.renderNotes(newProject); // zeigt die Notizen im content Bereich an

    console.log(this.mainArray)

        projectDialog.close();
        projectForm.reset();
    },
    pushToArray: function(array, item) {
        if(!array.includes(item))
        array.push(item)
    },
    renderProjects: function(array) {
        let allProjects = document.querySelectorAll('#projects p');

        for (let i = 0; i < array.length; i++) {
            let isCreated = Array.from(allProjects).some((instance) => instance.textContent == array[i][0]);

            if(!isCreated) {
                projectBar.appendChild(createProject());
                this.cacheDOMProject().projectTitle.textContent = array[i][0];

                let subArray = array[i]
// hier wird gerändert und events gebindet - vllt iwie trennen
                this.cacheDOMProject().projectContainer.addEventListener('click', (e) => {
                    this.removePreviousContent();
                    this.addAndRenderNotes(subArray);
                    this.renderNotes(subArray);
                    
                    let allElements = document.querySelectorAll('#projects > div');
                    allElements.forEach((item)=> item.classList.remove('selected'));
                    e.currentTarget.classList.add('selected');
                })

                this.cacheDOMProject().trashProject.addEventListener('click',(e)=> {
                    this.removeFromArray(this.mainArray, subArray);
                    this.removeFromDOM(e);
                })
            }
        }
    },
    renderNotes: function(array) {
        let allNotes = document.querySelectorAll('.note h2');
    
        for (let i = 1; i < array.length; i++) {
    
            let isCreated = Array.from(allNotes).some((instance) => instance.textContent == array[i].title)
        
            if(!isCreated) {
            
                array[i].index = i; // könnte auch beim pushen hinzugefügt werden

                content.appendChild(createNote());
                this.cacheDOMNote().title.textContent = array[i].title;
                this.cacheDOMNote().description.textContent = array[i].description;
                this.cacheDOMNote().duedate.textContent = array[i].formattedDate;
                this.cacheDOMNote().noteContainer.setAttribute('data-priority', array[i].priority) 
                

                let passArray = array;
                let passObject = array[i]

                this.cacheDOMNote().deleteButton.addEventListener('click', (e) => {
                    removeFromArray(passArray, passObject);
                    removeFromDOM(e);
                })

                this.cacheDOMNote().editButton.addEventListener('click', (e) => {
                    this.editNote(passObject);
                    this.removeFromArray(passArray, passObject);
                    this.removeFromDOM(e);
                })

                this.cacheDOMNote().checkBox.addEventListener('change', (e) => {
                    let checkBox = e.currentTarget;
                    let parent = checkBox.parentNode.parentNode;
                    parent.toggleAttribute('checked')
                })
            }
        }
    },
    addAndRenderNotes: function(array) {
        let newNoteForm = noteForm.cloneNode(true);
        noteForm.parentNode.replaceChild(newNoteForm,noteForm);
        noteForm = newNoteForm;
    

        noteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            const fd = new FormData(noteForm);

            let note = new Note(fd.get('task'), fd.get('description'), fd.get('duedate'), fd.get('priority'));
    console.log(fd.get('duedate'))
            this.pushToArray(array, note); // wäre gut wenn man diese zwei raus bekommen könnte 
            this.renderNotes(array);
            noteDialog.close();
            noteForm.reset();
    console.log(array)
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
    removeFromArray: function(array) {
        array.splice(object.index,1);
  
        array.forEach((item)=> {
            if(item.index > object.index) 
            item.index -= 1;
        })
    console.log(array);
    },
    removeFromDOM: function() {
        let button = e.currentTarget;
        let parent = button.parentNode;
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
    }

}

let homeArray = [];
let homeTitle = "Home";
project.pushToArray(homeArray, homeTitle);

let noteIns = new Note("Task", "Long description of words", "2024-03-21", "middle");
let newTask = new Note("Cleaning", "I have to clean the whole godamn house", "2024-04-10", "low")
let task = new Note("coding", "i have to code a lot and it huerts", "2024-03-30", "high");

project.pushToArray(homeArray, noteIns);
project.pushToArray(homeArray, newTask);
project.pushToArray(homeArray, task);

function homeComponent() {
    project.removePreviousContent();
    project.addAndRenderNotes(homeArray)
    project.renderNotes(homeArray);
console.log(homeArray);
console.log(project.mainArray);
}

//das kann glaube ich Global bleuben
projectForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    e.stopImmediatePropagation(); 
    const fd = new FormData(projectForm);

    project.addProject(fd.get('title'));
})

home.addEventListener('click', ()=> homeComponent());
homeComponent();

/* function pushToArray(array, object) {
    if(!array.includes(object))
    array.push(object)
} */

/* function addProject(title) {
    let newProject = []
    let projectTitle = `${title}`;
    newProject.push(projectTitle);

    pushToArray(mainArray, newProject);// fügt das neue Projekt in das mainArray hinzu
    displayProjectDOM(mainArray); // zeigt die Projekte in der sidebar an
    addNote(newProject); //ist der Listener für Submit form
    removeAllContent(); // entfernt erst die Notizen von anderem Projekt
    displayNote(newProject); // zeigt die Notizen im content Bereich an

console.log(mainArray)

    projectDialog.close();
    projectForm.reset();
} */

/* function addNote(array) {

let newNoteForm = noteForm.cloneNode(true);
noteForm.parentNode.replaceChild(newNoteForm,noteForm);
noteForm = newNoteForm;
    

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const fd = new FormData(noteForm);

        let note = new Note(fd.get('task'), fd.get('description'), fd.get('duedate'), fd.get('priority'));
    console.log(fd.get('duedate'))
        pushToArray(array, note);
        displayNote(array);
        noteDialog.close();
        noteForm.reset();
    console.log(array)
    })
} */


/* function cacheProjectElement() {
    let projectContainer = document.querySelector('#projects > div:last-child');
    let projectTitle = document.querySelector('#projects > div:last-child p');
    let trashProject = document.querySelector('#projects > div:last-child #trash');

    return {projectContainer, projectTitle, trashProject}
} */

/* function displayProjectDOM(array) {
    let allProjects = document.querySelectorAll('#projects p');

    for (let i = 0; i < array.length; i++) {
        let isCreated = Array.from(allProjects).some((instance) => instance.textContent == array[i][0]);

        if(!isCreated) {
            projectBar.appendChild(createProject());
            cacheProjectElement().projectTitle.textContent = array[i][0];

            let subArray = array[i]

            cacheProjectElement().projectContainer.addEventListener('click', (e) => {
                removeAllContent();
                addNote(subArray);
                displayNote(subArray);
                
                let allElements = document.querySelectorAll('#projects > div');
                allElements.forEach((item)=> item.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
            })

            cacheProjectElement().trashProject.addEventListener('click',(e)=> {
                removeFromArray(mainArray, subArray);
                removeFromDOM(e);
            })
        }
    }
} */


/* function cacheNoteElements() {
    let noteContainer = document.querySelector('.note:last-child');
    let title = document.querySelector('.note:last-child h2');
    let description = document.querySelector('.note:last-child #des');
    let duedate = document.querySelector('.note:last-child #date');
    let deleteButton = document.querySelector('.note:last-child #delete');
    let editButton = document.querySelector('.note:last-child #edit');
    let checkBox = document.querySelector('.note:last-child input')

    return {noteContainer, title, description, duedate, deleteButton, editButton, checkBox};
} */

/* function displayNote(array) {
    let allNotes = document.querySelectorAll('.note h2');
    
    for (let i = 1; i < array.length; i++) {
    
        let isCreated = Array.from(allNotes).some((instance) => instance.textContent == array[i].title)
        
        if(!isCreated) {
            
            array[i].index = i; // könnte auch beim pushen hinzugefügt werden

            content.appendChild(createNote());
            cacheNoteElements().title.textContent = array[i].title;
            cacheNoteElements().description.textContent = array[i].description;
            cacheNoteElements().duedate.textContent = array[i].formattedDate;
            cacheNoteElements().noteContainer.setAttribute('data-priority', array[i].priority) 
            

           let passArray = array;
           let passObject = array[i]

            cacheNoteElements().deleteButton.addEventListener('click', (e) => {
                removeFromArray(passArray, passObject);
                removeFromDOM(e);
                
            })

            cacheNoteElements().editButton.addEventListener('click', (e) => {
                editNote(passObject);
                removeFromArray(passArray, passObject);
                removeFromDOM(e);
            })

            cacheNoteElements().checkBox.addEventListener('change', (e) => {
                let checkBox = e.currentTarget;
                let parent = checkBox.parentNode.parentNode;
                parent.toggleAttribute('checked')
            })
        }
    }
} */


/* function removeFromArray(array, object) {

      array.splice(object.index,1);
  
      array.forEach((item)=> {
        if(item.index > object.index) 
        item.index -= 1;
      })
console.log(array);
} */

/* function removeFromDOM(e) {
    let button = e.currentTarget;
    let parent = button.parentNode;
    parent.remove();
} */

/* function removeAllContent() {
    let allElements = content.querySelectorAll('.note');
    allElements.forEach((node) => node.remove());
} */


/* function editNote(object) {

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
} */

