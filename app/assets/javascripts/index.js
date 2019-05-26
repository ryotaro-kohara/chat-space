$(function() {

  var search_list = $("#user-search-result")

  function buildHTML(user){
    var html =
    `<div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.name}</p>
      <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
    </div>`
    search_list.append(html);
  }

  function appendErrMsgToHTML(message){
    var html =
    `<div class="chat-group-user">${message}</div>`
    search_list.append(html);
  }
  
  function appendToGroup(name,id){
    var html =
    `<div class='chat-group-user clearfix js-chat-member' >
    <input name='group[user_ids][]' type='hidden' value='${id}'>
    <p class='chat-group-user__name'>${name}</p>
    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
    </div>`
    $("#chat-group-users").append(html);
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

  $(document).on("click", ".user-search-add", function(){
    var name = $(this).data('user-name');
    var userId = $(this).data('user-id');
    console.log(this);
    $(this).parent('.chat-group-user.clearfix').remove();
    appendToGroup(name,userId);
  });
  $(document).on("click", ".user-search-remove", function(){
    $(this).parent('.chat-group-user.clearfix.js-chat-member').remove();
  });  
});
