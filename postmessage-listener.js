(function(){
  var frameOrigin = "ADD_IFRAMES_SRC_ORIGIN"; // iframes src origin e.g http://localhost:8080
  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

  var iframe = document.getElementById('IFRAME_ID'); // Add ID of the iframe to listen on

  eventer(messageEvent, resizeIframe, false); // Listen for a postmessage

  function resizeIframe(e){
    if( e.origin === frameOrigin ){ // check the postmessage origin matches the iframe
      if( isNaN(e.data) ){ // check the value is a Number
        return;
      }else{
        iframe.style.height = e.data + 'px'; // Set the iframes new height
      }
    }
  }
})();
