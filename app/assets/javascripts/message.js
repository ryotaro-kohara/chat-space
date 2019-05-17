$(function(){
  $('#js-form').on("submit", function(){
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "post",
      data: formData, 
      dataType: 'json', 
      processData: false,
      contentType: false
    });
  });
});