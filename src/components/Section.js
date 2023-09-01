export default class Section {
  constructor({ items, renderer }, selector){
    this._renderedItems = items;
    this._container = document.querySelector(selector);
    this._renderer = renderer;
    
  }

  renderItems() {
    this._renderedItems.forEach((element) => {
      this._renderer(element)
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}