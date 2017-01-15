$(document).ready(function() {
  $('.entry-content').each(function(i){
    var _i = i;
    $(this).find('img.fancybox').each(function(){
      var img = $(this);
      var title = img.attr("title");
      img.removeClass("fancybox");
      img.wrap('<a href="'+this.src+'" class="fancybox" rel="gallery'+_i+'" />');
      if (title != "") {
	img.parent().attr("title", title);
      }
    });

    $(this).find('picture.fancybox').each(function(){
      var picture = $(this);
      var title = picture.attr("title");
      picture.removeClass("fancybox");
      var url = picture.children("source").eq(0).attr("srcset");
      picture.wrap('<a href="'+url+'" class="fancybox" rel="galleryp'+_i+'" />');
      if (title != "") {
	picture.parent().attr("title", title);
      }
    });
  });

  $(".fancybox").fancybox({
    prevEffect : 'none',
    nextEffect : 'none',
  });

  $('.fancybox-media')
  .attr('rel', 'media-gallery')
  .fancybox({
    openEffect : 'none',
    closeEffect : 'none',
    prevEffect : 'none',
    nextEffect : 'none',

    arrows : false,
    helpers : {
      media : {},
    buttons : {}
    }
  });

  $(".cliwide").fancybox();
});
