# iframe-resize
Automatically resize iframe height based on it's content

Include **iframe.js** to the iframes content

You can also add this code for the iframed page to detect whether it's inside and iframe and adjust it's <a> links to target="_top". This will allow the links within the iframe to navigate the whole page to another location rather than just within the iframe.

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

It will then take a postMessage event and match it to the specific iframe that sent the message. This doesn't use origin but the source object itself so you could in theory have two iframes embedding the same content, and them both adjust independantly of each other.

Once it has the iframe it parses the JSON object, checks the value of height is of type Number and only then adjusts it's height.

You could in theory adjust this embed code, send and apply more CSS properties like width but height is the main problem with iframed content.

This code also works with sandbox applied to the iframe so long as allow-scripts is passed in. I've also added allow-top-navigation so links within the iframe can switch the entire page rather than just within the iframe, making the content feel seamless.

### e.g
```html
<iframe sandbox="allow-scripts allow-top-navigation" src="example.com"></iframe>
```
