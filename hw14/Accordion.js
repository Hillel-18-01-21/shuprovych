class Accordion {
  constructor(container) {
    this.container = container;
    this.elements = [];

    this.init();
  };
};
Accordion.prototype.init = function () {
  Array.prototype.forEach.call(this.container.children, (e) => {
    this.elements.push(e.firstElementChild);
  });
  this.elements.forEach((e) => {
    e.addEventListener("click", this.showContent.bind(e, this.elements));
  });
};
Accordion.prototype.showContent = function (items) {
  const contentEl = this.nextElementSibling.classList;
  if (contentEl.contains("active")) {
    contentEl.remove("active");
  } else {
    items.forEach((e) => {
      e.nextElementSibling.classList.remove("active");
    });
    contentEl.add("active");
  };
    
};