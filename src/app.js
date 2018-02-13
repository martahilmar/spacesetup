export class App {
  constructor() {
    this.name = 'SpaceSetup';
  }

  initScrollReveal() {
    window.sr = ScrollReveal({ reset: false, delay: 250, duration: 750 });
    // sr.reveal('.post');
    sr.reveal('.post.frame-text');
    sr.reveal('.post.quoted-text');
    sr.reveal('.post.left', { origin: 'left', distance: '300px' })
    sr.reveal('.post.right', { origin: 'right', distance: '300px' })
  }

  attached() {
    this.initScrollReveal();
    let pos = localStorage.getItem('scroll');

    // TODO: Figure out how to detect ALL loaded
    setTimeout(() => {
      $('html, body').animate({
        scrollTop: pos
      }, 500);
    }, 1000);

    // TODO: This isn't working :(
    $('body').on('unload', () => {
      console.log('Saving scroll position');
      localStorage.setItem('scroll', window.scrollY || document.body.scrollTop);
    });
  }
}
