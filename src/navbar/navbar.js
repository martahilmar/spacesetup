export class Navbar {
  constructor() {
  }
  /*
    this.options = [
      { href: 'home', link: 'Home'},
      { href: 'blog', link: 'Blog'},
      { href: 'about/about.html', link: 'About'}
    ];
  }
*/
  toggle(e) {
    if (!this.left) {
      this.left = window.getComputedStyle(document.getElementById('navbar')).left;
      this.bgColor = window.getComputedStyle(document.querySelector('#navbar .content')).backgroundColor;
    }
    this.closed = !this.closed;
  }
}
