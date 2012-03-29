$(function(){
  // ready function
  
  $('.bubble').each(function(ind, obj){
    $(obj)
      .css("top", Math.random() * 400 )
      .css("left", Math.random() * 350 );
  });
    
});