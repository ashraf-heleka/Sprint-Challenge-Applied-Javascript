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

const cardEntry = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    response.data.articles;
    console.log(response.data.articles);
    response.data.articles.javascript.forEach(item => {
      const newCard = cardCreator(item);
      cardEntry.appendChild(newCard);
    })
    response.data.articles.bootstrap.forEach(item => {
      const newCard = cardCreator(item);
      cardEntry.appendChild(newCard);
    })
    response.data.articles.technology.forEach(item => {
      const newCard = cardCreator(item);
      cardEntry.appendChild(newCard);
    })
    response.data.articles.jquery.forEach(item => {
      const newCard = cardCreator(item);
      cardEntry.appendChild(newCard);
    })
    response.data.articles.node.forEach(item => {
      const newCard = cardCreator(item);
      cardEntry.appendChild(newCard);
    })
  })
    
  .catch(error => {
    // handle error
    console.log(error);
  })
  


function cardCreator(data){
  // element  
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorName = document.createElement("span");
  

  // class
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  
  // append
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(authorImg);
  
// //   content

  headline.textContent = data.headline;
  authorName.textContent = data.authorName;
  authorImg.src = data.authorPhoto;
 
  

  // arrayArticles.forEach(item => {
  //   const myArticles = articlesCreator(response.data);
  //   entryPointArticle.prepend(myArticles);
  //   });

//   const dataInArray = Object.entries(data);
//   tab.textContent = dataInArray.topics;



// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>

  // card
  // headline
  // author
  // imgContainer
  // authorImg
  // authorName


  return card;
}


