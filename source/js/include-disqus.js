console.log('JS loaded!')
var post_url = $('#post-url').text()
console.log(post_url)
var post_identifier = $('#post-identifier').text()
console.log(post_identifier);

var disqus_config = function () {
this.page.url = post_url;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = post_identifier; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://danbooru-labs-moe.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();