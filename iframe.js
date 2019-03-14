(function(){
  var theBody = document.getElementsByTagName('body')[0];
  var currentContentHeight = theBody.offsetHeight;
  function sendPostMessageUpdate(){
    parent.postMessage( JSON.stringify( { height: (theBody.offsetHeight + 1) } ), "*" );
    currentContentHeight = theBody.offsetHeight;
  }
  function update(){
    // If the content height has changed, send a postMessage
    if( currentContentHeight !== theBody.offsetHeight ){
      sendPostMessageUpdate();
    }
    requestAnimationFrame(update);
  }
  // Initial resize postMessage
  sendPostMessageUpdate();
  update();
})();
