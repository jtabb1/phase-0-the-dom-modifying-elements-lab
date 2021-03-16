// Write your code here!

const IDMAIN = document.getElementById('main');
IDMAIN.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.appendChild(newHeader);
