import './style.css';

function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Атятя';
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());