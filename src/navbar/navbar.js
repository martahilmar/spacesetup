
import { bindable } from 'aurelia-framework';

function hasParent(elem, parent, max) {
  max = max || 0
  for (var i=0; elem && max == 0 || i < max; ++i) {
    if (elem == parent)
      return true
    elem = elem.parentNode
  }
  return false
}

export class Navbar {
  @bindable router;

  attached() {
    this.navbar = document.getElementById('navbar')
    this.content = this.navbar.querySelector('.content')
  }

  toggle(e) {
    let self = this
    this.open = !this.open;
    if (this.open) {
      // Setup a one-shot close navbar
      document.onclick = (e) => {
        if (!self.open)
          return document.onclick = null
        if (hasParent(e.target, self.navbar) && e.target.tagName != 'A')
          return
        self.open = document.onclick = false
      }
    }
  }
}
