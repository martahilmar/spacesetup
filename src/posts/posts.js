import $ from 'jquery'
import anime from 'animejs'
import ScrollPage from 'page'

export class Posts extends ScrollPage {

  posts = [
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
      '<p>SpaceSetup is a platform dedicated to the creative process of designing our first house, building steps, as well as tips and tricks in the interior design, sustainable ideas and DIY projects.</p>'
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
      content: 'Sleeping areas are placed on the first floor.',
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
      '<br><p>The form of the house was just created. Long boxes extending from the view on one side all the way to the garden on the other side. The house splits in two distinct uses. The ground floor is maintaining the spaces visually open and hosting more public uses of the interior - the kitchen, living and dining room. First floor is dedicated to a private area hosting the bedrooms.</p>'
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
        percent += reversed ? -50 : 50;
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
      id: 'FloorPlanFirstFloor',
      postType: 'frame-text',
      scene:
      '<p>Open-concept is creating huge space where we, as a couple — "eclectics", food enthusiasts, and members of a large extended family—entertain as well as cook, dine together, work, and just hang out.</p>' +
      '<br><p>On the south side kitchen found a perfect spot. Big sliding door opens the kitchen to the outdoor dinning area, allowing quick access to the green house with herbs and veggies. Kitchen is designed with an island creating enough space for food adventures and coffee corner where coffee lovers can brew their perfect cup of home roasted brew. </p>' +
      '<br><p>On the opposite side kitchen continues with the dinning area - the most dramatic part of the house with its double high space (open ceiling). This is also a pivot of the house where people meet and dine by the beautiful custom made oak table, which is locally produced by "amazing" carpenters from ManiPine. Double room is enhanced with a floor-to-ceiling window, 2 m wide and 5,5 m high. On the opposite side of the window pine trees are strengthening and rising up bringing all-year-round natural - green colors into the inner space.</p>' +
      '<br><p>Living room extends from here towards the north in a physically lowered space, enhancing the privacy and coziness. The most significant feature of the room is panorama window which is leaving a speechless memories. The bench under the window creates a cozy corner for anyone in a seek for a spot to read, relax or just wonder the nature.</p>' +
      '<br><p>Ground floor hosts also a guest room, as well as toilet and scullery.</p>'
    },
    {
      id: 'FloorPlanFirstFloorDrawing',
      header: 'FLOOR PLAN - GROUND FLOOR',
      content: '',
      postType: 'right',
      textPosition: 'bottom-left',
      onLoad: scene => {
        scene.css({
          width: 550,
          height: '85vh'
        });
        scene.img = $('<img>')
          .attr('src', 'images/scene5/2D_Hus1.jpg')
          .addClass('full-height')
          .appendTo(scene);
      }
    },
    {
      id: 'FloorPlanSecondFloor',
      postType: 'frame-text',
      scene:
      '<p>Custom build staircase is places in the center of the house. First part is build up of two sides, one with single stiar and other with double high stair. The area is tought as of kids friendly space, for endless games or just as a sitting spot. Second part of the staircase is visually light, allowing the light to stream in from the big window by the staircase.</p>' +
      '<br><p>Staircase leads us to the second floor, which is the sleeping area, consisting of two kids rooms, master bedroom, and a bathroom. Last hours of the sun can be enjoyed on the terrace oriented towrds south-west.</p>'
    },
    {
      id: 'FloorPlanFirstFloorDrawing',
      header: 'FLOOR PLAN - GROUND FLOOR',
      content: '',
      postType: 'left',
      textPosition: 'bottom-right',
      onLoad: scene => {
        scene.css({
          width: 550,
          height: '85vh'
        });
        scene.img = $('<img>')
          .attr('src', 'images/scene5/2D_Hus2.jpg')
          .addClass('full-height')
          .appendTo(scene);
      }
    },
    {
      id: 'MaterialsText',
      postType: 'frame-text',
      scene:
      '<p>A natural palette and simple expressions of materials prevail. We wanted to achieve a raw look, easy maintenance and use environmentally friendly materials.</p>' +
      '<br><p>Therefore concrete elements makes up the walls of the ground floor. Concrete elements are constructed as sandwich structure consisting of back casting (backing plate), molding (front plate) and insulation.</p>' +
      '<br><p>First floor is constructed with the wood frame. To add a bit of complexity to the simple concrete look of the ground floor facade, first floor is cladded with stone wool facade panels called "Rock Panels" which is sustainable building material.  They are made from basalt, a raw material that is virtually unlimited in its availability and is renewable in the production cycle. First floor of the house facade is cladded with the anthracit gray panels, creating narrow, vertical lines.</p>' +
      '<br><p>The last touch to the facade is oak cladding of the carport to bring some warm color spectrum to the house. Oak will weather naturally and require little maintenance for the life of the building.</p>'
    },
    {
      id: 'OurHouse',
      postType: 'full-width',
      onLoad: scene => {
        $('<img>')
          .attr('src', 'images/scene6/Materials.jpg')
          .addClass('full-frame grayed')
          .appendTo(scene);
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
  ]
}
