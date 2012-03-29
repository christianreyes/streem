$(function(){
  // ready function
  
  /*
  $('.bubble').each(function(ind, obj){
    $(obj)
      .css("top", Math.random() * 400 )
      .css("left", Math.random() * 350 );
  });
  */
  
  setTimeout(function(){
    $('.bubble')
      .css("transition", "top left 1.9s")
      .css("-webkit-transition", "top left 1.9s")
      .css("transition-timing-function", "ease-in-out")
      .css("-webkit-transition-timing-function", "ease-in-out"); 
  }, 1);
  
  $('.bubble').each(function(ind, obj){
    $(obj)
      .css("top", (ind - ind % 3 )* 70 + 15 + Math.random() * 20 )
      .css("left", ind % 3 * 185 + 10 );
  });
  
  setInterval(function(){
    $('.bubble').each(function(ind, obj){
      if(Math.random() > .5){
        $(obj)
          .css("top", parseInt($(obj).css("top")) - Math.random() * 4 )
          .css("left", parseInt($(obj).css("left")) - Math.random() * 4 ); 
      } else  {
        $(obj)
          .css("top", parseInt($(obj).css("top")) + Math.random() * 4 )
          .css("left", parseInt($(obj).css("left")) + Math.random() * 4 ); 
      } 
    });
  }, 20000);
    
    
  $('#food').click(function(){
    $(this).find("ul").toggle("fast");
    $(this).toggleClass("selected");
  });
  
  $('.bubble').hover(function(){
    $($('#posts li')[$(this).index()]).toggleClass("bubble_hover");
  });
  
  $('#posts li').hover(function(){
    $($('.bubble')[$(this).index()]).toggleClass("post_hover");
  });
});