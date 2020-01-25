var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function (callback = () => { }) {
    // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);

      // data is an object with one property
      // results: array of size 100

      // each value of that array is another object
      // with all the message details

      // message details = data.results[i].text

      // will print out all the usernames of all the messages
      // console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        console.log('inloop');
        // console.log(data.results[i]);
        // data.results[i] will return the message object
        // put that object through the renderer to add it to the page

        // preventing XSS attack by checking for '<' html tag openers
        if (_.indexOf(data.results[i].text, '<') !== -1) {
          continue;
        }
        MessagesView.renderMessage(data.results[i]);
        // console.log(data.results[i]);

      }
      //for loop to collect roomnames list and add them to an array.
      var roomnameArray = [];
      for (var i = 0; i < data.results.length; i++) {
        //data.results[i].roomname push to array
        //unique roomnames to be pushed into array.
        //if value does not exist in roomnameArray, then push
        //otherwise if roomname exists, ignore.

        //indexof method to find whether value exists, or not.
        // if the indexOf the current message's room === -1
        // that means the room doesn't exist within our array
        // go ahead and add it to our array
        // if the indexOf the roomname is anything else
        // ignore it
        if (_.indexOf(roomnameArray, data.results[i].roomname) === -1) {
          roomnameArray.push(data.results[i].roomname);
        }
      }
      //loop iterating through rooms to send each room to the renderRoom method.
      for (var key of roomnameArray) {
        RoomsView.renderRoom({roomname: key});
      }
      // RoomsView.renderRooms();
      callback();
    });
  },
  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },
  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
