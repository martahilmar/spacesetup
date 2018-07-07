import $ from 'jquery';
import anime from 'animejs';

export default class ScrollPage {
  attached() {
    let self = this;
    window.scenes = $('.post div.au-target:first-child');
    // TODO: filter/map out onScroll posts (avoid below check)
    this.posts.forEach((post, i) => {
      post.div = window.scenes.eq(i);
      if (post.onScroll) {
        post.onScroll = post.onScroll.bind(self);
      }
      if (post.onLoad) {
        post.onLoad(post.div);
      }
    });

    // Attach scrolling events
    $('body, html').on('wheel', this, this.pauseScroller);
    $(document).scroll(this, this.handleScrollEvent);
  }

  pauseScroller(e) {
    let self = e.data;
    // self.deltaX = e.originalEvent.deltaX;
    self.deltaY = e.originalEvent.deltaY;
    if (this.scrollPause) {
      e.preventDefault();
      // e.stopPropagation();
      // e.returnValue = false;

      let direction = self.deltaY > 0 ? 1 : -1;
      posts.percent += direction;
      /*
      if ([0, 100].includes(post.percent) || post.percent < 45) {
        console.log('Continue scrolling', post.target, post.percent);
        $(window).off('wheel');
      }
      post.onScroll(post.div, post.percent, post);*/
      this.handleScrollEvent(e, post.percent);
    }
  }

  handleScrollEvent(e, scrollTop) {
    let self = e.data;
    let top = scrollTop || window.scrollY || document.body.scrollTop;
    // const st = window.pageYOffset || document.documentElement.scrollTop;
    let bottom = top + window.innerHeight;
    let winHeight = bottom - top;

    self.posts.forEach((post, i) => {
      if (post.onScroll === undefined) {
        return true;
      }
      let div = post.div;
      let offsetTop = div.offset().top;
      let elemHeight = div.parent().height();
      let offsetBottom = offsetTop + elemHeight;
      let percent = 100 * (bottom - offsetTop) / (winHeight + elemHeight);

      if ((offsetBottom > top && offsetTop < bottom)) {
        let pause = post.pauseScroller || {};
        if (!pause.on && percent > pause.from && percent < pause.to) {

          // TODO: DOn't repause if just finished


          pause.on = true;
          post.percent = parseInt(percent, 10);
          let scrollDown = post.lastPercent < percent;
          console.log('Paused Scrolling', scrollDown ? 'DOWN' : 'UP');
        } else if (pause.on) {
          e.preventDefault();
          let direction = e.originalEvent.deltaY > 0 ? 1 : -1;
          post.percent += direction;
          if (post.percent < pause.from || post.percent > pause.to) {
            pause.on = false;
          }
          percent = post.percent;
        }
        post.onScroll(div, percent, post);
      }
      post.lastPercent = percent;
    });
  }
}
