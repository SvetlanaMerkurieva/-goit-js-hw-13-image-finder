import PixabayService from "./js/apiService";
import pictureTpl from "./templates/template.hbs";

const searchForm = document.querySelector(".js-form");
const picturesContainer = document.querySelector(".js-pictures-container");

const apiService = new PixabayService();

searchForm.addEventListener("submit", onSearch);

function onSearch(event) {
    event.preventDefault();
    clearPicturesContainer();
    apiService.query = event.currentTarget.elements.query.value;
    apiService.resetPage();
    apiService.fetchPictures().then(appendPicturesMarkup(hits));
}
/*fetch (`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=24078076-056bd2e530cc19b75a9dfc811
`)
.then(response => response.json())
.then(console.log);*/
function appendPicturesMarkup(hits) {
    picturesContainer.insertAdjacentHTML('beforeend', pictureTpl(hits));
}
function clearPicturesContainer() {
    picturesContainer.innerHTML = "";
}