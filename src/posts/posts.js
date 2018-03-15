import $ from 'jquery';
import anime from 'animejs';

export class Posts {
  constructor() {
    this.posts = [
      {
        id: 'About',
        postType: 'about-text',
        scene:
        '<p>ABOUT</p>'
      },
      {
        id: 'Intro',
        postType: 'intro-text',
        scene:
        '<p>SpaceSetup is a platform dedicated to the creative process of designing our first house, building steps, as well as tips and tricks in the interior design and DIY projects.</p>'
      },
      {
        id: 'OurHouse',
        postType: 'full-width',
        onLoad: scene => {
          $('<img>')
            .attr('src', 'images/House_E.png')
            .addClass('full-frame grayed')
            .appendTo(scene);
        }
      },
      {
        id: 'ProjectHouse1.0',
        postType: 'frame-text',
        scene:
        '<p>Project House1.0 started with an idea to move into the outskirts of a busy and fast developing city. Peace and friendliness of people were the main reasons, but possibility to have a big garden used for harvesting our own food and creating flowerfull garden was the big dream.</p>' +
        '<br><p>House1.0, the two-story house is located in the outskirts of northern based city in Denmark, Aalborg. Our wish was to develop a house that was comfortable, healthy and easy to maintain. In terms of design, we wanted it to be full of light, contemporary and fairly minimal. And in terms of its footprint on the environment, we wanted energy efficient and sustainable house.</p>'
      },
      {
        id: 'OurHouse1',
        postType: 'full-width',
        onLoad: scene => {
          $('<img>')
            .attr('src', 'images/House_W.png')
            .addClass('full-frame grayed')
            .appendTo(scene);
        }
      },      
      {
        id: 'GroundAndLocationQuot',
        postType: 'quoted-text',
        scene:
        '<p class="center"><quot>&ldquo;</quot><br><i>&ldquo;</i> <span>How to think like  an architect?</span> <i>&bdquo;</i></p>'
      },
      {
        id: 'GroundAndLocation',
        postType: 'frame-text',
        scene:
        '<p>Interest in the architecture made us start sketching down the ideas for our house and designing a unique house model. "How to think like an architect?" was a great video which inspired us to think differently. We started looking more detialed into the grounds\'s position, orientation and weather conditions.</p>' +
        '<br><p>The ground sits on a small sloping side overlooking the long fields, which turns out to spectacular panorama during the blooming season of rapeseed. This was the view we definitely wanted to bring inside and make it the center of the house. Area around the ground is planted with 10-15 m of bushes and trees, which creates good privacy. South side of the ground would be a perfect location for the terrace and garden. These small decisions were enough to establish the basis of the first draft.</p>'
      },
      {
        id: 'BubbleDiagramGroundFloor',
        header: 'SKETCH OF THE GROUND FLOOR',
        content: 'Rooms with the day time activity and easy access to the garden are placed on the ground floor.',
        postType: 'left',
        textPosition: 'bottom-right',
        onLoad: scene => {
          scene.css({
            width: 550,
            height: '85vh'
          });
          scene.img = $('<img>')
            .attr('src', 'images/scene2/bubble_diagram.svg')
            .addClass('full-height')
            .appendTo(scene);
        }
      },
      {
        id: 'BubbleDiagramFirstFloor',
        header: 'SKETCH OF THE FIRST FLOOR',
        content: 'Sleeping areas will be placed on the first floor.',
        postType: 'right',
        textPosition: 'bottom-left',
        onLoad: scene => {
          scene.css({
            width: 550,
            height: '85vh'
          });
          scene.img = $('<img>')
            .attr('src', 'images/scene2/bubble_diagram_1.svg')
            .addClass('full-height')
            .appendTo(scene);
        }
      },
      {
        id: 'ContainerDesignQuot',
        postType: 'quoted-text',
        scene:
        '<p class="center"><quot>&ldquo;</quot><br><i>&ldquo;</i> <span>Long and simple shaped containers were a reference to our desire for big-open areas, lots of light and minimal design.</span> <i>&bdquo;</i></p>'
      },
      {
        id: 'ContainerDesign',
        postType: 'frame-text',
        scene:
        '<p>Looking at the world recognized architecture we got an eye on one specific design. It was a shipping container design. Long and simple shaped containers were a reference to our desire for big-open areas, lots of light and minimal design.</p>' +
        '<br><p>We were looking into hosting an open-concept design, where kitchen, dinning and living room, plus small office will create one common area. As we are both software developers and food enthusiasts, often innovative minds we actually spend most of the time working together on our daily "projects". Therefore "open concept" complements our lifestyles perfectly.</p>' +
        '<br><p>The form of the house was just created. Long boxes extending from the view on one side all the way to the garden on the other side. The house splits in two distinct uses. The ground floor is maintaining the spaces visually open and hosting more public uses of the interior - the kitchen, living and dining room. First floor is a private area hosting the bedrooms.</p>'
      },
      {
        id: 'Sections',
        postType: 'full-width',
        onLoad: scene => {
          let models = [ 'Model_0.png', 'Model_1.png', 'Model_2.png', 'Model_3.png', 'Model_4.png',
            'Model_5.png', 'Model_6.png', 'Model_7.png', 'Model_8.png'
          ];
          models.forEach(model => {
            $('<img>')
              .attr('src', 'images/scene1/' + model)
              .css({ transform: 'translateY(-625px)' })
              .appendTo(scene);
          });

          // Create the animation
          let anim = anime({
            targets: scene[0].querySelectorAll('img'),
            easing: 'easeInOutQuad',
            translateY: -75,
            delay: (el, i, l) => {
              return 250 * i - 150 * i;
            },
            duration: (el, i, l) => {
              let duration = 800 - Math.min(i, 4) * 50;
              console.log('Duration', i, duration);
              return duration;
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
          scene.anim = anim;
        },
        // TODO: Use this together with on('wheel')
        /*pauseScroller: {
          from: 45,
          to: 100,
          onlyDown: true
        },*/
        onScroll: (scene, percent, post) => {
          // scene.anim.seek(scene.anim.duration * percent / 100);
          if (percent < 15) anime.paused;
          if (percent > 50) percent = 100;
          let reversed = this.deltaY < 0;
          // percent += reversed ? -10 : 10;
          console.log("Percent: " + percent);
          scene.anim.playTo = percent;
          if (scene.anim.paused) {
            scene.anim.play();
            if (reversed !== scene.anim.reversed) {
              scene.anim.reverse();
            }
          }
        }
      },
      {
        id: 'SunPathQuot',
        postType: 'quoted-text',
        scene:
        '<p class="center"><i>&ldquo;</i> <span>House was placed in the north side of the ground while the garden is bathed in the southern sun.</span> <i>&bdquo;</i></p>'
      },
      {
        id: 'SunPathText',
        postType: 'frame-text',
        scene:
        '<p>Position of the ground dedicated the orientation of the house and distribution of the rooms. House was placed in the north side of the ground while the garden is bathed in the southern sun. Due to our location, in the far north, path of the sun shortens significantly during the winter. South-facing walls and windows receive more solar radiation in winter than in summer. Due to the cold winters the house will this way benefit by letting low angle winter sun in, which will help accumulate heat in the thermal mass inside the house. High angle summer sun will be excluded with horizonal shadings on some parts of the south facing facade.</p>'
      },
      {
        id: 'SunPath',
        postType: 'full-width',
        onLoad: scene => {
          [ 'Model_sun_window.png', 'Sun_0.png',
            'Sun_1_1.png', 'Sun_1_2.png', 'Sun_1_3.png', 'Sun_1_4.png',
            'Sun_1_5.png', 'Sun_1_6.png', 'Sun_1_7.png', 'Sun_1_8.png',
            'Sun_2_1.png', 'Sun_2_2.png', 'Sun_2_3.png', 'Sun_2_4.png',
            'Sun_2_5.png', 'Sun_2_6.png'
          ].forEach(model => {
            let sun = Boolean(model.indexOf('Sun') == 0);
            let opacity = sun ? 0 : 1;
            let path = sun ? 'scene3' : 'scene1';
            let classname = sun ? 'anim' : 'static';
            $('<img>')
              .attr('src', 'images/scene3/' + model)
              .addClass(classname)
              .css({
                opacity: opacity,
                transform: 'translateY(-50px)'
              })
              .appendTo(scene);
          });

          // Create the animation
          let anim = anime({
            targets: scene[0].querySelectorAll('img.anim'),
            easing: 'easeInOutQuad',
            opacity: 1,
            delay: (el, i, l) => {
              let d = (i > 7) ? 500 : 350;
              if (i > 7) i -= 7; 
              return i * d - Math.pow(Math.min(i, 4), 2) * 50;
            },
            duration: (el, i, l) => {
              return 1500 - Math.min(i, 4) * 250;
            },
            autoplay: false,
            // loop: true
            update: function(self) {
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
          scene.anim = anim;
        },
        onScroll: (scene, percent, post) => {
          // scene.anim.seek(scene.anim.duration * percent / 100);
          let reversed = this.deltaY < 0;
          percent += reversed ? -25 : 25;
          scene.anim.playTo = percent * 1.35;
          if (scene.anim.paused) {
            scene.anim.play();
            if (reversed !== scene.anim.reversed) {
              scene.anim.reverse();
            }
          }
        }
      },
      {
        id: 'WindowPlacementText',
        postType: 'frame-text',
        scene:
        '<p>Due to the ground\'s location it was a challenge to place big openings only towards the south side. Long living space got most of the window area towards south/west accumulate the heat during the day, but also some towards north-east to allow indirect light to steady stream in together with picturless landscape. A very important point in our design was a skylight located in the center of the house to allow heat to escape in the warmer summer days and to naturaly ventilate the areas.</p>'
      },
      {
        id: 'WindowPlacement',
        postType: 'full-width',
        onLoad: scene => {
          [ 'Model_window_1.png', 'Model_bw.png', 'Model_window.png',
          ].forEach(model => {
            $('<img>')
              .attr('src', 'images/scene4/' + model)
              .css({ transform: 'translateY(-500px)' })
              .appendTo(scene);
          });

          // Create the animation
          let anim = anime({
            targets: scene[0].querySelectorAll('img'),
            easing: 'easeInOutQuad',
            translateY: -50,
            delay: (el, i, l) => {
              return i * 500 - Math.pow(Math.min(i, 4), 2) * 20;
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
          scene.anim = anim;
        },
        // TODO: Use this together with on('wheel')
        /*pauseScroller: {
          from: 45,
          to: 100,
          onlyDown: true
        },*/
        onScroll: (scene, percent, post) => {
          // scene.anim.seek(scene.anim.duration * percent / 100);
          let reversed = this.deltaY < 0;
          percent += reversed ? -20 : 20;
          scene.anim.playTo = percent * 1.35;
          if (scene.anim.paused) {
            scene.anim.play();
            if (reversed !== scene.anim.reversed) {
              scene.anim.reverse();
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
