class Accordion {
  constructor(container) {
    this.container = container;

    this.init();
  }
}
Accordion.prototype.init = function () {
  Array.prototype.forEach.call(this.container.children, (e) => {
    this.elements.push(e.firstElementChild);
  });
  this.elements.forEach((e) => {
    e.addEventListener("click", this.showContent.bind(e, this.elements));
  });
};

init() = function (event) {
  if (event.target.classList.contains("title")) {
    console.log(event.target.classList.contains("title"));
    container.addEventListener("click", this.showContent);
  }
};

Accordion.prototype.showContent = function (items) {
  const contentEl = this.nextElementSibling.classList;
  if (contentEl.contains("active")) {
    contentEl.remove("active");
  } else {
    add;
    items.forEach((e) => {
      e.nextElementSibling.classList.remove("active");
    });
    contentEl.add("active");
  }
};
