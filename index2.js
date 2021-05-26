$(".parent").on("click", function(){
  $(".parent").not(this).removeClass("open");
  $(".parent").not(this).next().slideUp(200);
  $(this).toggleClass('open', 200);
  $(this).next().slideToggle(200);
});
