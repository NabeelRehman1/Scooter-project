const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe ("ScooterApp",()=>{
    let reg = {name : ""}
    let test1 = new ScooterApp (reg) 
    test("Expect the user to be registered", ()=>{
        expect (test1.registerUser("name", "password", 14 )).toBe("already registered")
    })
})

const assert = require('assert');

describe('ScooterApp', function () {
  let scooterApp;
  let registeredUsers;

  beforeEach(function () {
    registeredUsers = {
      "nab": "password7387",
      "reh": "password837",
    };
    scooterApp = new ScooterApp(registeredUsers);
  });

  it('should return "user has been logged in" when correct username and password is provided', function () {
    scooterApp.loginUser("nab", "password7387");
    assert.strictEqual(scooterApp.loginUser("nab", "password7387"), "user has been logged in");
  });

  it('should return "incorrect username or password" when incorrect username or password is provided', function () {
    assert.strictEqual(scooterApp.loginUser("nab", "incorrectPassword"), "incorrect username or password");
  });
});


// register user

// log in

// log out

// rent scooter

// dock scooter
