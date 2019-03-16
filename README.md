# iframe-resize
Automatically add and resize iframe height based on it's content

If the content of an iframe has the same aspect ratio, then resizing can be handled purely with CSS on the host. However if the content within an iframe changes it's aspect ratio, then clipping will occur on the vertical axis. The horizontal axis is usually ok as the content with an iframe treats the iframe like a browser window. But on with embedded content we don't want it to scroll independantly of the host page.

1. Add an `<iframe>` to your website poiting to some content.

2. Add **iframe.js** code to the content within your iframe.

3. Add **parent.js** code to your host site.

### e.g parent page
```html
<iframe style="width:100%;height:100px;border:none;" frameborder="0" sandbox="allow-scripts" src="example.com"></iframe>
```



### bonus
You can also add the code below into the page within the iframe to detect whether it's inside an iframe and adjust it's <a> links to target="_top". This will allow the links within the iframe to navigate the parent / top page to another location rather than just within the iframe.

To enable this though you will need to add `allow-top-navigation` to your iframes sandbox attribute.

```javascript
( function(){
  if( window !== window.top ){
    links = document.querySelectorAll('a').forEach( function(item){
      item.setAttribute('target', '_top');
    });
  }
})();
```
