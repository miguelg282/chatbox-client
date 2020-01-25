var MessagesView = {
  $chats: $('#chats'),
  initialize: function() {
  },

  renderMessage: function(message) {
    // consider edge case of no text or no username
    if (!message.username || !message.text || !message.roomname) {
      return;
    }

    ////Temporary fix for userName length;
    if (message.username.length > 15) {
      return;
    }

    // message.username = JSON.stringify(message.username);
    // for (var key in message) {
    //   message[key] = JSON.stringify(message[key]);
    // }

    // MessageView.render will return a function
    // run this function with the message
    // run the templateFunction to return a rendered result
    var renderedResult = MessageView.render(message);

    this.$chats.append(renderedResult);
  }

};