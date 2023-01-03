const newsCardsWrapper = document.getElementById("news-cards-wrapper")
const filtersWrapper = document.getElementById("filters")

async function fetchNewsFeed(country = "in") {

  const API_KEY = "242d96e64f34477ca3077bed18b69ddd";
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data?.articles
  } catch (err) {
    console.log(err);
    return []
  }
}

function populateFilters() {
    const countries = [
      { name: "India", value: "in" },
      { name: "USA", value: "us" },
      { name: "Canada", value: "ca" },
      { name: "Zambia", value: "za" },

    ];


// { name: "India", value: "in" },
    countries.forEach(country => {
        const countryBtn = document.createElement("button")
        countryBtn.innerText = country.name
        countryBtn.addEventListener("click", async () => {
          const articles = await  fetchNewsFeed(country.value)
          newsCardsWrapper.innerHTML = null
          articles.forEach(createNewsCard)
        
        })
        filtersWrapper.appendChild(countryBtn)
    })
}


function createNewsCard(article) {
    const newsCard = document.createElement("article");
    newsCard.classList.add("card")
    const title = document.createElement("p")
    title.innerText = article.title;
    newsCard.appendChild(title)

    const thumbnail = document.createElement("img")
    thumbnail.src = article.urlToImage;
    thumbnail.classList.add("thumbnail")
    newsCard.appendChild(thumbnail)

    const description = document.createElement("p");
    description.innerText = article.description
    newsCard.appendChild(description)

    newsCardsWrapper.appendChild(newsCard)

}

async function populateUI() {
    populateFilters()
    const articles = await fetchNewsFeed()
    articles.forEach(createNewsCard)
}

populateUI();




// ASSIGNMENT TASKS
// TASK1 - Make styling better
// TASK2 - add category filter
// TASK3 - add more countries