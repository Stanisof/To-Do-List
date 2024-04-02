/* import editSVG from './svg/pencil-circle.svg' */

function createSvgX() {
    const svgX = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgX.setAttribute('viewBox', '0 0 24 24');
    const pathX = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathX.setAttribute("d","M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z");
    svgX.appendChild(pathX);

    return svgX
}

function createSvgPencil() {
    const svgPencil = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgPencil.setAttribute('viewBox', '0 0 24 24');
    const pathPencil = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathPencil.setAttribute("d","M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M15.1,7.07C15.24,7.07 15.38,7.12 15.5,7.23L16.77,8.5C17,8.72 17,9.07 16.77,9.28L15.77,10.28L13.72,8.23L14.72,7.23C14.82,7.12 14.96,7.07 15.1,7.07M13.13,8.81L15.19,10.87L9.13,16.93H7.07V14.87L13.13,8.81Z");
    svgPencil.appendChild(pathPencil);

    return svgPencil
}

function createSvgPlus() {
    const svgPlus = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgPlus.setAttribute('viewBox', '0 0 24 24');
    const pathPlus = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathPlus.setAttribute("d","M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M13 16H11V13H8V11H11V8H13V11H16V13H13V16M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z");
    svgPlus.appendChild(pathPlus);

    return svgPlus
}

function createSvgCheck() {
    const svgCheck = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCheck.setAttribute('viewBox', '0 0 24 24');
    const pathCheck = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathCheck.setAttribute("d","M17,14H19V17H22V19H19V22H17V19H14V17H17V14M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V13.53C20.94,12.58 19.54,12 18,12A6,6 0 0,0 12,18C12,19.09 12.29,20.12 12.8,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z");
    svgCheck.appendChild(pathCheck);

    return svgCheck
}

function createSvgTrash() {
    const svgTrash = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgTrash.setAttribute('viewBox', '0 0 24 24');
    const pathTrash = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathTrash.setAttribute("d","M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
    svgTrash.appendChild(pathTrash);

    return svgTrash
}

//maybe not best practice bc it creates + adds listener + caches for dialog
/* function createNoteButton() {
    const noteButton = document.createElement('button');
    noteButton.setAttribute('id','add');
    noteButton.appendChild(createSvgPlus());

    const noteDialog = document.getElementById('noteDialog');

    return {noteButton, noteDialog}
} */

function createNote() {
    let noteContainer = document.createElement('div');
    noteContainer.className = 'note';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','delete');
    deleteButton.appendChild(createSvgX());
    //deleteButton.addEventListener('click', () => noteContainer.remove())

    let headArea = document.createElement('div');
    let title = document.createElement('h2');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'status');
    headArea.appendChild(title);
    headArea.appendChild(checkbox);

    let description = document.createElement('p');
    description.setAttribute('id','des');
    let duedate = document.createElement('p');
    duedate.setAttribute('id','date')

    const editButton = document.createElement('button');
    editButton.setAttribute('id', 'edit');
    editButton.appendChild(createSvgPencil());



    noteContainer.appendChild(deleteButton);
    noteContainer.appendChild(headArea);
    noteContainer.appendChild(description);
    noteContainer.appendChild(duedate);
    noteContainer.appendChild(editButton);

    return noteContainer
}

function createProject() {
    let container = document.createElement('div');
    let title = document.createElement('p');
    const trashButton = document.createElement('button');
    trashButton.appendChild(createSvgTrash());
    trashButton.setAttribute('id', 'trash');
    container.appendChild(title);
    container.appendChild(trashButton);
}


export {createNote}