( function(){
  var theBody = document.getElementsByTagName('body')[0];
  var currentHeight = theBody.offsetHeight;
  var sendPostMessageUpdate = function(){
    parent.postMessage( JSON.stringify( { height: (theBody.offsetHeight + 1) } ), "*" );
    currentHeight = theBody.offsetHeight;
  }
  setInterval( function(){
    // If the content height has changed, send a postMessage
    if( currentHeight !== theBody.offsetHeight ){
      sendPostMessageUpdate();
    }
  }, 100);
  // Initial resize postMessage
  sendPostMessageUpdate();
})();
