// this converts our messages we pull into html code
// part of View of (MVC)
// use <%= var %> for variables to fill out the code
// remember that _.template returns a function
// call that function passing in a message object pulled from the server
// as a context object

var MessageView = {

  // consider using {{}} moustache/handlebar notation
  render: _.template(`
      <div class="chat">
        <div class="username"><%=username%>: </div>
        <div class="text"><%=text%> </div>
        <div class="roomname"><%=roomname%></div>
      </div>
    `)
};