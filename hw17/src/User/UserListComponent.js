class UserComponent {
  _user = [];

  constructor(listTemplate, itemTemplate, containerEl) {
    this.listTemplate = listTemplate;
    this.itemTemplate = itemTemplate;
    this.containerEl = containerEl;
  };

  init() {
    this.containerEl.innerHTML = this.listTemplate;
    this.loadData().then((response) => {
      this._user = [...this._user, ...response.data];

      const userEls = this._user.map((e) => this.makeUserCard(e));

      this.containerEl.querySelector("div-user").append(...userEls);
    });
  };
  
  makeUserCard(user) {
    const userEl = document.createElement("div");
    userEl.innerHTML = this.itemTemplate
      .replace('"{{avatar}}"', user.avatar)
      .replace("{{name}}", user.first_name)
      .replace("{{surname}}", user.last_name)
      .replace("{{email}}", user.email);
    return userEl;
  };
  loadData() {
    return fetch("https://reqres.in/api/users").then((e) => e.json());
  };
};
