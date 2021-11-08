export default class LoadMoreBtn {
    constructor ( {selector, hidden=false}) {
        this.refs = this.getRefs(selector);

        if (hidden=true) {this.hide()};
    }
    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.label = refs.button.querySelector(".label");
        refs.spinner = refs.button.querySelector(".spinner");

        return refs;
    }
    enable() {
        this.refs.button.disable = false;
        this.refs.label.textContent = "Загрузить ещё";
        this.refs.spinner.classlist.add("is-hidden");
    }
    disable() {
        this.refs.button.disable = true;
        this.refs.label.textContent = "Загружаем...";
        this.refs.spinner.classlist.remove("is-hidden");
    }
    show() {
        this.refs.button.classlist.remove("is-hidden");
    }
    hide() {
        this.refs.button.classlist.add("is-hidden");
    }
}