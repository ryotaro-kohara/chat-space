$(function(){
  function buildHTML(message){
      var image = message.image ? `<img src=${message.image} ></asset_path>` : '';
      var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.date}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          ${image}
        </div>`
      return html;
  }
$('.js-form').on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.main-body').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast'); 
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    return false;
   });

   var buildMessageHTML = function(message) {
    var name_create_at = 
      '<div class="upper-message">' +
        '<div class="upper-message__user-name">' +
          message.user_name +
        '</div>' +
        '<div class="upper-message__date">' +
          message.created_at +
        '</div>' +
      '</div>'
    var content = 
      '<p class="lower-message__content">' +
        message.content +
      '</p>'
    var image = '<img src="' + message.image.url + '" class="lower-message__image" >'
    if (message.content && message.image.url) {
      var html = '<div class="message" data-id=' + message.id + '>' +
        name_create_at +
        '<div class="lower-message">' +
          content + image +
        '</div>' +
      '</div>'
    } else if (message.content) {
      var html = '<div class="message" data-id=' + message.id + '>' +
        name_create_at +
        '<div class="lower-message">' +
          content +
        '</div>' +
      '</div>'
    } else if (message.image.url) {
      var html = '<div class="message" data-id=' + message.id + '>' +
        name_create_at +
        '<div class="lower-message">' +
          image +
        '</div>' +
      '</div>'
    };
    return html;
  };
   
   var reloadMessages = function() {
    last_message_id = $('.messages:last').data('id');
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('success');
      var inserthtml = buildMessageHTML(messages);
      $('.messages').append(inserthtml);
      $('.main-body').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      console.log('error');
    });
  };
  setInterval(reloadMessages, 5000);
});