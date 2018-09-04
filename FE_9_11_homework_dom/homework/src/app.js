const MAX_ACTIONS = 10;

let addActionButton = document.getElementById('add-action-button');
let actionTextInput = document.getElementById('action-input');

addActionButton.onclick = function() {
    let listNode = document.getElementById('action-list');

    if(listNode.children.length < MAX_ACTIONS) {
        let actionText = actionTextInput.value;
        let listElement = document.createElement('li');
        listElement.setAttribute('draggable', 'true');
        let textNode = document.createTextNode(actionText);

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
    
        let removeButton = document.createElement('i');
        removeButton.appendChild(document.createTextNode('delete'));
        removeButton.classList.add('material-icons');
        removeButton.classList.add('remove-btn');
        
        removeButton.onclick = function() {
            let parentNode = removeButton.parentNode;
            parentNode.parentNode.removeChild(parentNode);
        };

    
        listElement.appendChild(checkbox);
        listElement.appendChild(textNode);
        listElement.appendChild(removeButton);
    
        listNode.appendChild(listElement);
    }
};

let dragging = null;

document.addEventListener('dragstart', function(event) {
    if(event.target.nodeName === 'LI') {
        dragging = event.target;
        event.dataTransfer.setData('text/html', dragging);
    }
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.addEventListener('dragenter', function(event) {
    if(event.target.parentNode.nodeName === 'UL') {
        event.target.style['border-bottom'] = 'solid 1px black';
    }
});

document.addEventListener('dragleave', function(event) {
    event.target.style['border-bottom'] = '';
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    if(event.target.parentNode.nodeName === 'UL') {
        event.target.style['border-bottom'] = '';
        event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
    }
});

actionTextInput.onchange = function() {
    if(this.value === undefined || this.value === null || this.value === '') {
        addActionButton.disabled = true;
    } else {
        addActionButton.disabled = false;
    }
};