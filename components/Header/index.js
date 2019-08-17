// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

function Header() {
    //created elements
    let header = document.createElement('div');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let temp = document.createElement('span');

    //added classes to elements
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //add textContent to elements
    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98' + '\xB0F';

    //apending created elements
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);
    return header;
};
