# iframe-resize
Automatically resize iframe height based on it's content

This project came about due to many clients having CMSs in strict environments and many different software stacks. It gives the ability to create marketing pages and widgets that feel completely seamless to the main site, but in reality is a dynamically adjusting iframe to a completely different and (most of the time) simpler stack.

A big concern was SEO as the iframe content is (most likely) on a different origin, but as far as i understand so long as the iframe content has a canonical tag pointing to the page it's embedded within, then search engines understand the context. A similar situation to AMP cached pages.

The ability to create widgets and landing pages without concern as to what software a companies main site is on, or having to worry about someone elses JS or CSS coming along and clobbering your thing weeks or months after deployment is really nice. And the little autodetect feature **below** which detects the context and adjust it's href links is also a nice added touch. Saves the need to add target="_top" tags into links manually.

The additional load step of the iframe is also a concern, but chances are, so long as the iframe content is on a static CDN, it will load faster than the initial time for the main site to load, so the added iframe load time isn't such a burden.


To get started include **iframe.js** to the iframes content.

You can also add the code below into the page within the iframe to detect whether it's inside an iframe and adjust it's <a> links to target="_top". This will allow the links within the iframe to navigate the parent / top page to another location rather than just within the iframe.

```javascript
( function(){
  if( window !== window.top ){
    links = document.querySelectorAll('a').forEach( function(item){
      item.setAttribute('target', '_top');
    });
  }
})();
```


Include **iframe-embed.js** to the parent page using the iframe.

This iframe embed code gets a list of all iframes on a page, and listens for postMessage events.

It will then take a postMessage event and match it to the specific iframe that sent the message. This doesn't use origin but the source object itself so you could in theory have two iframes embedding the same content, and them both adjust independently of each other.

Only if it finds a matching iframe does it parse the JSON object, checking the value of height is of type Number and then finlally adjusts the iframes height. I felt this was a good way of ensuring nothing malicous gets passed through the postMessage up to the parent page.

You could in theory adjust this embed code, send and apply more CSS properties like width but height is the main problem with iframed content.

This code also works with sandbox applied to the iframe so long as allow-scripts is passed in. I've also added allow-top-navigation so links within the iframe can switch the entire page rather than just within the iframe, making the content feel seamless.

### e.g
```html
<iframe sandbox="allow-scripts allow-top-navigation" src="example.com"></iframe>
```
