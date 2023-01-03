const photosContainer = document.getElementById("photos-container")
const searchInput = document.querySelector("input")

const ACCESS_KEY = "";
const SECRET_KEY = "";
let PAGE_NUMBER=1
let SEARCH = ""
let BASE_API_URL =`https://api.unsplash.com`


searchInput.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
        SEARCH = searchInput.value
        fetchPhotosAndPopulateTheUI(PAGE_NUMBER)
    }
})


function generateAPIURL(options) {
    if(options.search){
        return `${BASE_API_URL}/search/photos?client_id=${ACCESS_KEY}&page=${options.pageNumber}&query=${options.search}`
    }

    return `${BASE_API_URL}/photos?client_id=${ACCESS_KEY}&page=${options.pageNumber}`
}


async function fetchPhotosAndPopulateTheUI(pageNumber=1, search=SEARCH) {
  try {
    const response = await fetch(generateAPIURL({pageNumber, search}));
    let data = await response.json();

    if(!Array.isArray(data)){
        data = data?.results
    }
    
    photosContainer.innerHTML=null;
    data.forEach(generateThumbnail)

    // return data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

function generateThumbnail(photo) {
    const thumbnail = document.createElement("img")
    thumbnail.src = photo?.urls?.small
    thumbnail.alt = photo?.alt_description
    thumbnail.classList.add("img-thumbnail")
    thumbnail.classList.add("thumbnail-custom")

    photosContainer.appendChild(thumbnail)
}

function prevPage() {
    if(PAGE_NUMBER <= 1) {
        return;
    }
    PAGE_NUMBER = PAGE_NUMBER - 1
    fetchPhotosAndPopulateTheUI(PAGE_NUMBER)
}

function nextPage() {
    PAGE_NUMBER = PAGE_NUMBER + 1
    console.log(PAGE_NUMBER);
    fetchPhotosAndPopulateTheUI(PAGE_NUMBER)
}

 function populateUI() {
    fetchPhotosAndPopulateTheUI()
}

populateUI();