var getNotifications = (actions: string[]) => {
  var users: { [key: string]: string } = {};
  var sessions: { [key: string]: boolean } = {};

  var register = (username: string, password: string) => {
    if (users.hasOwnProperty(username)) {
      return "fail: user already exists";
    }
    users[username] = password;
    return "success: new user added";
  };

  var login = (username: string, password: string) => {
    if (!users.hasOwnProperty(username)) {
      return "fail: no such user";
    }

    if (sessions.hasOwnProperty(username)) {
      return "fail: already logged in";
    }

    if (users[username] === password) {
      sessions[username] = true;
      return "success: user logged in";
    }
    
    return "fail: incorrect password";
  };

  var logout = (username: string) => {
    if (!users.hasOwnProperty(username)) {
      return "fail: no such user";
    }

    if (sessions.hasOwnProperty(username)) {
      delete sessions[username];
      return "success: user logged out";
    }
    
    return "fail: already logged out";
  };

  return actions.map((action) => {
    var splitedAction = action.split(" ");
    switch(splitedAction[0]) {
      case "register": return register(splitedAction[1], splitedAction[2]);
      case "login": return login(splitedAction[1], splitedAction[2]);
      case "logout": return logout(splitedAction[1]);
    }
  });
};

var actions = ["register vasya 12345", "login vasya 1234", "login vasya 12345", "login anakin C-3PO", "logout vasya", "logout vasya"];

console.log(getNotifications(actions));
