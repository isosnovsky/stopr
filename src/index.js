import printMe from './print';
import './style.css';
import ic from './icon.png';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Атятя';
    element.classList.add('hello');

    element.innerHTML = 'ОБАНА!!!!';
    element.onclick = printMe;

    return element;
}

document.body.appendChild(component());