var RoomsView = {
  // used for handling clicking of the rooms button
  $button: $('#rooms button'),

  // this targets the rooms dropdown
  // use it to handle changes within the rooms select dropdown
  $select: $('#rooms select'),

  initialize: function() {
    // // handles changes on the 'submit' button
    // FormView.$form.on('submit', FormView.handleSubmit);

    RoomsView.$button.on('click', RoomsView.handleAddRoom);
    RoomsView.$select.on('change', () => console.log('room dropdown selected'));
  },

  // whenever rooms are changed
  // re filter the messages to show only rooms that have the matching
  // roomname
  handleRoomSelect: function(event) {

  },

  // whenever the add room button is clicked
  // ...
  handleAddRoom: function (event) {
    Parse.create(message, () => {
      alert('it works');
    });
  },

  //
  renderRoom: function (roomToAdd) {
    // Rooms.render({roomname: aRoomName})

    // take the roomToAdd and render it into html
    // take the rendered roomToAdd and append it to the dropdown

    var renderedResult = Rooms.render(roomToAdd);
    this.$select.append(renderedResult);

  }

};
