import anime from 'animejs'
import ScrollPage from 'page'

export class Blog extends ScrollPage {

  posts = [
    {
      id: 'Blog',
      postType: 'about-text',
      scene:
      '<p>BLOG</p>'
    },
    {
      id: 'Intro',
      postType: 'intro-text',
      scene:
      '<p>Sporadic posts from our house. You will be able to read about a variety of topics, such as interior design, DIY projects, house automation, gardening, every day life in a house, etc.</p>'
    },
    {
      id: 'ManiPine',
      postType: 'blog-full-width',
      scene:
      '<div><a href="#/mani_pine"><img src="images/blog_mani_pine/ManiPine1.jpg">' +
      '<h2>MANI PINE:' +
      '<br>Unique pieces of furniture' +
      '</h2>' +
      '</a></div>'
    },
    {
      id: 'Kitchen',
      postType: 'blog-full-width',
      scene:
      '<div><a href="#/blog_kitchen"><img src="images/blog_kitchen/Reform_Basic_2.jpg" style="width: 100%">' +
      '<h2>KITCHEN DESIGN:' +
      '<br>Our Ikea hacked kitchen' +
      '<br>with beautiful design by Reform</h2>' +
      '</a></div>'
    },
    {
      id: 'Footer',
      postType: 'frame-text',
      scene:
      'Thank You for following us!!!',
      onLoad: scene => {
        scene.css({ textAlign: 'center' });
        scene.parent().css({ minHeight: 0 });
      }
    }
  ]
}
