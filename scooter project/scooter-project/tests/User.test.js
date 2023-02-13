const User = require("../src/User");


describe("User tests", () => {
    test("User correctly rendered", () =>{
        let test = new User("nabeel", "letsgo", 7);
        expect(typeof test).toBe("object")
        expect(test.username).toBe("nabeel")
        expect(test.password).toBe("letsgo")
        expect(test.age).toBe(7)
    })
    test("login function", () =>{
        let test = new User("nabeel", "letsgo", 7);
        test.login("cheese");
        expect(test.loggedIn).toBe(true)
    })
    test("logout function", () =>{
        let test = new User("nabeel", "lestgo", 7);
        test.logOut();
        expect(test.loggedIn).toBe(false)
    })
})
