console.log("Hello Me");
import './style.css';
import { createNote } from './createDOM';

const home = document.getElementById('home');
const content = document.getElementById('content');
const note = document.querySelector('.note');

home.addEventListener('click', () => {
    content.appendChild(createNote());
})



class Note {
    constructor(title, description, duedate, priority) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
    }
}