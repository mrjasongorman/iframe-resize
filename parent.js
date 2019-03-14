(function(){
  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
  // Get a list of all iframes on the page
  var iframes = document.getElementsByTagName('iframe');
  
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
