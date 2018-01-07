import $ from 'jquery';
import anime from 'animejs';

export class Posts {
  constructor() {
    this.posts = [
      {
        id: 'Introduction',
        postType: 'frame-text',
        scene:
        '<p>Project House1.0 started with an idea to move into the outskirts of a busy and fast developing city. Peace and friendliness of people were main reasons, but possibility to have a big garden used for harvesting our own food and growing flowers was Marta\'s big dream.</p>' +
        '<br><p>House1.0, the two-story house is located in the outskirts of northern based city in Denmark, Aalborg. Our wishes were to develop a house that was comfortable, healthy and easy to maintain. In terms of design, we wanted it to be full of light, contemporary and fairly minimal. And in terms of its footprint on the environment, we wanted energy efficient and sustainable house.</p>' +
        '<br><p>By recommendation of our neighbors we talked with a small building company - Fjorbak Byg. Their focus was on passive housing and individual construction - the qualities we appreciated. We decided that they were our perfect constructor company. They had a contact with Hovaldt architects, who ended up making our architectural drawings.</p>' +
        '<br><p>We love our house and the whole process and therefore would like to share our project and some stories behind it through this website.</p>'
      },
      {
        id: 'OurHouse',
        postType: 'full-width',
        onLoad: scene => {
          $('<img>')
            .attr('src', 'images/House_1.png')
            .addClass('full-frame grayed')
            .appendTo(scene);
        }
      },
      {
        id: 'GroundAndLocation',
        postType: 'frame-text',
        scene:
        '<p>Love for the architecture was the reason we started sketching the ideas for our house down and designing a unique house model. "How to think like an architect?" was a great video which inspired us to think differently. We looked at the grounds position, orientation, and took out the points in design we cared most about.</p>' +
        '<br><p>The ground sits on a small sloping side overlooking the long fields, which turns out to spectacular panorama during the blooming season of rapeseed. Area around the ground is planted with 10-15 m of bushes and trees, which creates good privacy.</p>' +
        '<br><p>Sketching started by looking at the orientation of the ground. A beautiful view towards the freedom - long fields of rapeseed - is extending from the north to the east corner. This was the view we definitely wanted to bring inside and make it the center of the house.</p>' +
        '<br><p>It was easily decided that the house will be placed in the north side of the ground while the garden will be bathed with the sun on the south side of the ground.</p>'
      },
      {
        id: 'BubbleDiagramGroundFloor',
        header: 'Ground floor sketch',
        content: 'TODO: Write some text...',
        textPosition: 'bottom-right',
        onLoad: scene => {
          scene.css({
            width: 550,
            height: '85vh'
          });
          scene.img = $('<img>')
            .attr('src', 'images/scene2/bubble_diagram.svg')
            .addClass('full-frame')
            .css({
              width: 'auto',
              height: '100%',
              transition: '250ms'
            }).appendTo(scene);
        }/*,
        onScroll: (scene, percent, post) => {
          let X = -50 + percent;
          scene.img.css({
            transform: 'translateX(' + X + 'px)'
          });
        }*/
      },
      {
        id: 'BubbleDiagramFirstFloor',
        header: 'First floor sketch',
        content: 'TODO: Write some text...',
        textPosition: 'bottom-left',
        onLoad: scene => {
          scene.css({
            width: 550,
            height: '85vh'
          });
          scene.img = $('<img>')
            .attr('src', 'images/scene2/bubble_diagram_1.svg')
            .addClass('full-frame')
            .css({
              width: 'auto',
              height: '100%',
              transition: '250ms'
            }).appendTo(scene);
        }/*,
        onScroll: (scene, percent, post) => {
          let X = 50 - percent;
          scene.img.css({
            transform: 'translateX(' + X + 'px)'
          });
        }*/
      },
      {
        id: 'ContainerDesign',
        postType: 'frame-text',
        scene:
        '<p>Looking at the world recognized architecture we got our eyes on one specific design. It was a shipping container design. Long and simple shaped shipping containers were a reference to our desire for big-open areas, lots of light and minimal design.</p>' +
        '<br><p>We were looking into hosting an open-concept design, where kitchen, dinning and living room, plus small office will create one common area. As we are both software developers and food enthusiasts, often innovative minds we actually spend most of the time working together on our daily "projects". Therefore "open concept" complements our lifestyles perfectly.</p>' +
        '<br><p>The form of the house was just created. Long boxes extending from the view on one side all the way to the garden on the other side. The house splits in two distinct uses. The ground floor is maintaining the spaces visually open and hosting more public uses of the interior - the kitchen, living and dining room. First floor is a private area hosting the bedrooms.</p>'
      },
      {
        id: 'Sections',
        postType: 'full-width',
        onLoad: scene => {
          [ 'Model_1.png', 'Model_2.png', 'Model_3.png', 'Model_4.png',
            'Model_5.png', 'Model_6.png', 'Model_7.png', 'Model_8.png'
          ].forEach(model => {
            $('<img>')
              .attr('src', 'images/scene1/' + model)
              .css({
                position: 'absolute',
                top: 0,
                left: 0,
                transform: 'translateY(-500px)',
                width: '100%'
              }).appendTo(scene);
          });

          // Create the animation
          let anim = anime({
            targets: scene[0].querySelectorAll('img'),
            easing: 'easeInOutQuad',
            translateY: -50,
            delay: (el, i, l) => {
              return i * 500 - Math.pow(Math.min(i, 4), 2) * 50;
            },
            duration: (el, i, l) => {
              return 1500 - Math.min(i, 4) * 250;
            },
            autoplay: false,
            // loop: true
            update: self => {
              if (self.playTo) {
                if ((!self.reversed && self.progress > self.playTo)
                  || (self.reversed && self.progress < self.playTo)) {
                  self.pause();
                }
              }
            }
          });
          scene.on('click', this, (e) => {
            if (anim.completed || anim.progress > 85) {
              anim.playTo = 0;
              anim.restart();
            } else if (anim.paused) {
              anim.play();
            } else {
              anim.pause();
            }
          });
          this.anim = anim;
        },
        // TODO: Use this together with on('wheel')
        /*pauseScroller: {
          from: 45,
          to: 100,
          onlyDown: true
        },*/
        onScroll: (scene, percent, post) => {
          // this.anim.seek(this.anim.duration * percent / 100);
          let reversed = this.deltaY < 0;
          percent += reversed ? -25 : 25;
          this.anim.playTo = percent * 1.35;
          if (this.anim.paused) {
            this.anim.play();
            if (reversed !== this.anim.reversed) {
              this.anim.reverse();
            }
          }
        }
      },
      {
        id: 'Footer',
        postType: 'frame-text',
        scene: 'Created by Marta &amp; Dennis',
        onLoad: scene => {
          scene.css({ textAlign: 'center' });
          scene.parent().css({ minHeight: 0 });
        }
      }
    ];
  }

  attached() {
    let self = this;
    window.scenes = $('.post div:first-child');
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
    let top = scrollTop || document.body.scrollTop;
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
