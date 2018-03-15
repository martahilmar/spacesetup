import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration, RouteConfig, NavModel } from 'aurelia-router';

@autoinject()
export class App {
  configureRouter(config, router) {
    config.title = 'SpaceSetup';
    config.map([
      {route: ['', 'home'], name: 'home', moduleId: 'posts/posts', nav: true, title: 'Home'},
      {route: 'about', name: 'about', moduleId: 'about/about', nav: true, title: 'You & Me'}
    ]);
    this.router = router;
  }
  
  constructor() {
    this.name = 'SpaceSetup';
  }

  toggleNav(e) {
    if (!this.left) {
      this.left = window.getComputedStyle(document.getElementById('navbar')).left;
      this.bgColor = window.getComputedStyle(document.querySelector('#navbar .content')).backgroundColor;
    }
    this.navClosed = !this.navClosed;
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
