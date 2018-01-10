export class App {
  constructor() {
    this.name = 'SpaceSetup';
  }


  attached() {
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
