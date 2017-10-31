(function(){
  var theBody = document.getElementsByTagName('body')[0];
  var currentHeight = theBody.offsetHeight;
  setInterval(function(){
    if( currentHeight === theBody.offsetHeight ){
      return;
    }else{
      parent.postMessage( theBody.offsetHeight + 1, "*" );
      currentHeight = theBody.offsetHeight;
    }
  }, 100);
})();
