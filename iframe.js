(function(){
  var theBody = document.getElementsByTagName('body')[0]; // save body object in variable
  var currentHeight = theBody.offsetHeight; // get the current height of the content
  setInterval(function(){
    if( currentHeight === theBody.offsetHeight ){ // check the content height hasn't changed, if not return immediately
      return;
    }else{
      parent.postMessage( theBody.offsetHeight + 1, "*" ); // if content height has changed send postmessage up to parent
      currentHeight = theBody.offsetHeight; // save new content height to check again on the next loop
    }
  }, 100); // iterate every 100ms giving an almost instant adjustment and avoiding secondary scroll bar flashing up
})();
