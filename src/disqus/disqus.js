import {bindable, customElement} from 'aurelia-framework';

//@customElement('disqus')
export class Disqus {

    attached() {
        if (document.querySelector('script[data-timestamp]'))
            return this.onloaded();

        var s = document.createElement('script');
        s.src = '//spacesetup.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        s.onload = this.onloaded;
        document.getElementsByTagName('head')[0].appendChild(s);
   }

   onloaded() {
       let title = location.hash.substr(2) || 'home'
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = title;
          this.page.url = 'http://marta8dennis.com/spacesetup/' + title;
          this.page.title = document.title;
        }
      });
   }
   /*
  @bindable post;

  bind(bindingContext) {
    // Making sure the parent view-model exposes an object that contains the information
    // needed by Disqus.
    // This will trigger the function below.
    this.post = bindingContext.post;
  }

  // Conventional method that gets called when the bindable property post changes.
  postChanged(newPost, oldPost) { // oldPost is null in this case
    DISQUS.reset({
      reload: true,
      config: function() {
        this.page.identifier = newPost.identifier;
        // For some reason, urls with # don't work with Disqus.
        // Working url: http://example.com/blog/example-post
        // Non working url: http://example.com/#/blog/example-post
        this.page.url = 'http://marta8dennis.com/spacesetup/' + newPost.subdirectory;
        this.page.title = newPost.title;
      }
    });
  }*/
}