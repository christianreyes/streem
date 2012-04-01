var cols = [new Array(), new Array(), new Array()];

var posts;

$(function(){
  // ready function
  
  posts = $('#posts li');
  
  $('.bubble').each(function(ind, bubble){
    $(bubble)
      .css("top", (ind - ind % 3 )* 70 + 15 + Math.random() * 20 )
      .css("left", ind % 3 * 185 + 10 );
    bubble.col = ind%3;
    bubble.row = Math.floor(ind/3);
    cols[ind%3].push(bubble);
    
    bubble.post = posts[ind];
    posts[ind].bubble = bubble;
  });
  
  /*
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
  }, 5000);
  */
    
    
  $('#food').click(function(){
    $(this).find("ul").toggle("fast");
    $(this).addClass("selected");
    
    bubble_up("food");
  });
  
  $('#cooking').click(function(e){
    e.stopPropagation()
    $(this).addClass("selected");
    $('#food').removeClass("selected")
    $('#food span').addClass("sub_selected");
    bubble_up("cooking");
  });
  
  $('.bubble').hover(function(){
    $(this.post).toggleClass("bubble_hover");
  });
  
  $('#posts li').hover(function(){
    $(this.bubble).toggleClass("post_hover");
  });
  
  function bubble_up(filter){
    $('.bubble:not(.' + filter + ')').each(function(ind, obj){
      $(obj.post).slideUp(function(){
        $(this).remove();
      });
      $(obj).fadeOut(function(){
        $(obj).remove();
      });
      cols[this.col].splice(cols[this.col].indexOf(this),1);
    });
    
    var animation_queue = [];
    
    for(var c=0;c<3;c++){
      for(var r=0;r<cols[c].length;r++){
        var obj = cols[c][r];
        
        var end_top = parseInt($(obj).css("top"));
        while(obj.row > r){
          end_top -= 215;
          obj.row--;
        }
        if(end_top !== parseInt($(obj).css("top"))){
          animation_queue.push({
            obj: obj,
            end_top: end_top
          });
        }
      }
    }
    
    while(animation_queue.length > 0){
      var animation = animation_queue[0];
      $(animation.obj).css("top", animation.end_top);
      animation_queue.shift();
    }
  }
});