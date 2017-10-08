export default class AbstractView {
  get template() {
    throw new Error(`Template not defined`);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      let template = document.createElement(`template`);
      template.innerHTML = this.template;
      this._element = template.content;
      this.bind();
    }
    return this._element;
  }

  templateToggle(selector = `.main`) {
    const output = document.querySelector(selector);
    if (!output) {
      return false;
    }
    output.innerHTML = ``;
    return output.appendChild(this.element);
  }
}
