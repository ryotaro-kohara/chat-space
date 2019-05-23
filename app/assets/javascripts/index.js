$(function() {

  var search_list = $("#user-search-result")

  function buildHTML(user){
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}}">追加</div>
    </div>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(message){
    var html =
    `<div class="chat-group-user">${message}</div>`
    search_list.append(html);
  }
  $("#user-search-field").on("input", function(e) {
    e.preventDefault();
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      $("#user-search-result").empty();
     if (users.length !== 0) {
       users.forEach(function(user){
         console.log(user)
       buildHTML(user);
       });
     }
     else {
       appendErrMsgToHTML("一致するユーザーが見つかりません");
     }
    })
    .fail(function(){
      alert('error');
    })
  });
});
