$(function(){
  // ready function
  
  /*
  $('.bubble').each(function(ind, obj){
    $(obj)
      .css("top", Math.random() * 400 )
      .css("left", Math.random() * 350 );
  });
  */
  
  $('.bubble').each(function(ind, obj){
    $(obj)
      .css("top", (ind - ind % 3 )* 70 + 30 + Math.random() * 20 )
      .css("left", ind % 3 * 185 + 10 );
  });
  
  setInterval(function(){
    $('.bubble').each(function(ind, obj){
      if(Math.random() > .2){
        $(obj)
          .css("top", parseInt($(obj).css("top")) - Math.random() * 4 )
          .css("left", parseInt($(obj).css("left")) - Math.random() * 4 ); 
      } else if(Math.random() > .5) {
        $(obj)
          .css("top", parseInt($(obj).css("top")) + Math.random() * 4 )
          .css("left", parseInt($(obj).css("left")) + Math.random() * 4 ); 
      } 
    });
  }, 2000);
    
});