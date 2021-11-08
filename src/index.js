import PixabayService from "./js/apiService";
import pictureTpl from "./templates/template.hbs";
import LoadMoreBtn from "./js/load-more-btn";

const searchForm = document.querySelector(".js-form");
const picturesContainer = document.querySelector(".js-pictures-container");

const apiService = new PixabayService();
const loadMoreBtn = new LoadMoreBtn(
    {selector: '[data-action="load-more"]',
    hidden: true,}
);

searchForm.addEventListener("submit", onSearch);
loadMoreBtn.refs.button.addEventListener("click", fetchPictures);

function onSearch(event) {
    event.preventDefault();
    clearPicturesContainer();
    apiService.query = event.currentTarget.elements.query.value;
    apiService.resetPage();
    loadMoreBtn.show();
    fetchPictures();
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
function fetchPictures() {
    loadMoreBtn.disable();
    apiService.fetchPictures().then(hits => {
        appendPicturesMarkup(hits);
        loadMoreBtn.enable();
    });
}