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

function createSvgTrash() {
    const svgTrash = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgTrash.setAttribute('viewBox', '0 0 24 24');
    const pathTrash = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    pathTrash.setAttribute("d","M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
    svgTrash.appendChild(pathTrash);

    return svgTrash
}

function createNote() {
    let noteContainer = document.createElement('div');
    noteContainer.className = 'note';

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','delete');
    deleteButton.appendChild(createSvgX());

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
    let projectContainer = document.createElement('div');
    let projectTitle = document.createElement('p');
    const trashButton = document.createElement('button');
    trashButton.appendChild(createSvgTrash());
    trashButton.setAttribute('id', 'trash');
    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(trashButton);

    return projectContainer
}


export {createNote, createProject}