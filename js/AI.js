$(".dropdown-menu li a").click( function() {
  $(this).parents(".input-group-btn").find('.btn').text($(this).text());
  $(this).parents(".input-group-btn").find('.btn').val($(this).text());
  $(this).parents(".input-group-btn").find('.btn').append(" <span class=\"caret\"></span>");
});

$("#lookup").blur( function () {
  if( $("#tableCollapse").hasClass("in")) {
    $("#tableCollapse").collapse("hide");
  }
});