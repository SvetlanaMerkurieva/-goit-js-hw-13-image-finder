export default class PixabayService {
    constructor() {
        this.searchQuery = "";
        this.page = 1;

    }
    fetchPictures() {
        const KEY = "24078076-056bd2e530cc19b75a9dfc811";
        const url = `https://pixabay.com/api/?key=${KEY}&q=${this.searchQuery}&per_page=10&page=${this.page}`;

         return fetch(url)
            .then(response => response.json())
            .then(data => {
                this.page += 1;
                return data.hits;
            });
    }
    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}