var Rooms = {
  // templates the roomnames so that they can be added
  // to the <select> dropdown for rooms
  render: _.template(`
    <option value="<%=roomname%>"><%=roomname%></option>
  `)

};