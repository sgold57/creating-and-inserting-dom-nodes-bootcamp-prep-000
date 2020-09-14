//this file is optional
var element = document.createElement('div')

element.innerHTML = 'Hello, DOM!';
element.style.background = '#f9f9f9';
element.style.textAlign = 'center';

var ul = document.createElement('ul');

for (let i=0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}


document.body.appendChild(element);
element.appendChild(ul);
ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove();
