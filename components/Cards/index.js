// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    let articles = res.data.articles;
    console.log(articles);
    let cardContainer = document.querySelector('.cards-container');

    //using array method (forEach) to create article cards for each topic
    articles.javascript.forEach(i => {
        cardContainer.appendChild(cardCreator(i.headline, i.authorPhoto, i.authorName));
    });

    articles.bootstrap.forEach(i => {
        cardContainer.appendChild(cardCreator(i.headline, i.authorPhoto, i.authorName));
    });

    articles.technology.forEach(i => {
        cardContainer.appendChild(cardCreator(i.headline, i.authorPhoto, i.authorName));
    });

    articles.jquery.forEach(i => {
        cardContainer.appendChild(cardCreator(i.headline, i.authorPhoto, i.authorName));
    });

    articles.node.forEach(i => {
        cardContainer.appendChild(cardCreator(i.headline, i.authorPhoto, i.authorName));
    });

})
.catch(err => {
    console.error('Hey you guys...'); 
});

function cardCreator(headLine, Img, Name) {
    //creating elements for article cards
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let authorImg = document.createElement('img');
    let authorName = document.createElement('span');

    //adding classes to created elements
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //adding textContent to created elements
    headline.textContent = headLine;
    authorImg.src = Img;
    authorName.textContent = Name;

    //appending elements
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName);

    return card;
}
