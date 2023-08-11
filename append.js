// // CSS design
// const sections = document.querySelectorAll('section');
// for(const section of sections){
//     section.style.border = '2px solid steelblue';
//     section.style.marginBottom = '5px';
//     section.style.borderRadius = '12px';
//     section.style.paddingLeft = '7px';
//     section.style.backgroundColor = 'lightgray';
// }

// append a child which is li.
const placesList = document.getElementById("places-list")
const li = document.createElement('li');
li.innerText = "Rangamati";
placesList.appendChild(li);

// append a child which is a section.
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'borhani';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'pinni';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText = 'salad';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);


// event handler
document.getElementById('bg-red').addEventListener('click',()=>{
    document.body.style.backgroundColor = 'red';
})

document.getElementById('bg-red').style.margin = '15px'
document.getElementById('bg-red').style.padding = '15px'
document.getElementById('bg-red').style.background = 'yellow'

// CSS design
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '12px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}