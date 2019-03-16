(function(){
var root = document.getElementById("consistant-widget-id");
if(!root) {
  console.warn('Please add a widget to your webpage: <div id="consistant-widget-id" data-widget-id="1234"></div>');
  return;
}
var widgetID = root.getAttribute('data-widget-id');
var i = document.createElement('iframe');
i.setAttribute('style', 'display:block;width:100%;height:100px;border:0;');
i.setAttribute('frameborder', '0');
i.setAttribute('sandbox', 'allow-scripts');
i.src = "/"+ widgetID + "/widget/";
root.appendChild(i);

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
  // Get a list of all iframes on the page
  var iframes = Array.from(document.getElementsByTagName('iframe'));
  // Listen for postMessage events
  eventer(messageEvent, resizeIframe, false);
  
  // Loop through list and match the postMessage source object to the iframe object,
  // if so parse data, check for int of new height and adjust the target iframes height accordingly.
  function resizeIframe(e){
    iframes.forEach(item => {
      if( item.contentWindow === e.source ){
        incomingData = JSON.parse(e.data);
        if( !isNaN(incomingData.height) ){
          item.style.height = (incomingData.height + 'px');
        }
      }
    });
  }
})();