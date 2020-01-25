var FormView = {

  $form: $('form'),

  initialize: function() {
    // handles changes on the 'submit' button
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // pulls text from message input box
    var messageText = $('#message').val();

    //find index of = within username and cut out everything before
    //and including the '=' sign.
    // '=' is always going to be at index 9, substring from 10 beyond
    var userName = window.location.search;
    userName = App.username;

    // somehow pull the room name
    var roomName = 'lobby';

    // build the message body to send to Parse.create
    var messageObj = {
      username: userName,
      text: messageText,
      roomname: roomName
    };
    Parse.create(messageObj, () => {
      alert('message submitted');

      // on success, the page will refresh and that will cause the
      // avalible messages to refresh
      window.location.reload();

    });

    // console.log(window.location.search);
    // console.log(messageText);
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};