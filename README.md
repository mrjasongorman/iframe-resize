# iframe-resize
Automatically resize iframe height based on it's content


Include **iframe.js** to the iframes content

You can also add this code into the page within the iframe to detect whether it's inside and iframe and adjust it's <a> links to target="_top". This will allow the links within the iframe to navigate the parent / top page to another location rather than just within the iframe.

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
