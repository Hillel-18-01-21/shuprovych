class MainComponent {
  _userData = null;

  constructor(template, containerEl) {
    this.template = template;
    this.containerEl = containerEl;
  }

  init() {
    this.containerEl.innerHTML = this.template;
  }
  getUser() {
    return fetch("https://reqres.in/api/users?page=2", {
        method: 'Get',
        
        headers: {
            'content-type': 'application/json'
        }
    });
  }
}
