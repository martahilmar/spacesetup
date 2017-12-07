export class Navbar {
  constructor() {
    this.options = [
      { href: 'home', link: 'Home'},
      { href: 'about', link: 'About'}
    ];
  }

  toggle(e) {
    if (!this.left) {
      this.left = window.getComputedStyle(document.getElementById('navbar')).left;
      this.bgColor = window.getComputedStyle(document.querySelector('#navbar .content')).backgroundColor;
    }
    this.closed = !this.closed;
  }
}
