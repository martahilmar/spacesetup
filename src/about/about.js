export class About {
    constructor() {
        console.log("Loading Instagram...");
        this.posts = [
            {
              id: 'About Us',
              postType: 'about-text',
              scene:
              '<p>HE & SHE</p>'
            },
            {
              id: 'Intro',
              postType: 'intro-text',
              scene:
              '<p>He is Dennis and she is Marta. We are a couple that loves small adventures and little innovation. Our latest project is our house. We designed it from bottom to top and would love to share our process with you. Apart from that we are both software engineers, food enthusiasts and we LOVE traveling. Hope you will enjoy reading the story about our house project.</p>'
            }
        ]
    }

    removeUnwanted() {
        // let popup = document.querySelector('.eapps-instagram-feed-popup');
        let link = document.querySelector('a[href="https://elfsight.com/instagram-feed-instashow/"]');
        if (link)
            link.parentNode.removeChild(link);
    }

    attached() {
        this.removeUnwanted();
    }

    detached() {
        this.removeUnwanted();
    }
}
