const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  //constructor(stations, retisteredUsers) <--- correct params 
  constructor( registeredUsers) {
    //this.stations = stations
    this.registeredUsers = registeredUsers
  }

  registerUser(username, password, age) {
    for (let i = 0; i < Object.keys(this.registeredUsers).length; i++) {
      if (Object.keys(this.registeredUsers)[i] == username) {
        return ("already registered");
      }
    }
    if (age < 18) {
      return ("too young to register");
    }
    this.registeredUsers[username] = "";
    ("user has been added")
  }
  loginUser(username, password) {
    let bool = false;
    for (let i = 0; i < Object.keys(this.registeredUsers).length; i++) {
      if (username == (Object.keys(this.registeredUsers)[i]) && password == (Object.values(this.registeredUsers)[i])) {
      return ("user has been logged in")
      bool = true
      break;
    } 
    }
    if (!bool) {
    return ("incorrect username or password")
    }
  }
  
  logOutUser (username) {
    let bool = false
    for (let i = 0; i < Object.keys(this.registeredUsers).length; i++) {
      if (username == (Object.keys(this.registeredUsers)[i])) {
        return ("user has been logged out");
        bool = true
        break;
      } 
      
    }
    if (!bool) {
      ("no such user was logged in")
    }
  }

}

module.exports = ScooterApp
