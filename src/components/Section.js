export default class Section {
  constructor({ renderer }, selector){
    this._container = document.querySelector(selector);
    this._renderer = renderer;
    
  }

  renderItems(items) {
    items.forEach((element) => {
      this._renderer(element)
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}