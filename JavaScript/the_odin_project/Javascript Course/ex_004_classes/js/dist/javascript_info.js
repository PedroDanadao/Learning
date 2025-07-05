var obj = {
    my_property: 0,
    get prop_name() {
        // getter, the code executed on getting obj.propName
        return this.my_property;
    },
    set prop_name(value) {
        // setter, the code executed on setting obj.propName = value
        this.my_property = value;
    }
};
// Printed on console
// obj.prop_name
// 0
// obj.prop_name = 5;
// 5
// obj.my_property
// 5
var user = {
    name: "John",
    surname: "smith",
    get full_name() {
        return this.name + " " + this.surname;
    },
    set full_name(value) {
        var _a;
        _a = value.split(' '), this.name = _a[0], this.surname = _a[1];
    }
};
// Printed on console
// user.name = "Pedro"
// 'Pedro'
// user.surname = "Augusto"
// 'Augusto'
// user.full_name
// 'Pedro Augusto'
// user.full_name = "João Carlos"
// 'João Carlos'
// user.name
// 'João'
// user.full_name
// 'João Carlos'
var user_2 = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};
// Printed on console
// user_2.name = "Pete"
// 'Pete'
// user_2.name = ''
// Name is too short, need at least 4 characters
// ''
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get: function () {
            var today_year = new Date().getFullYear();
            return today_year - this.birthday.getFullYear();
        }
    });
}
var john = new User("John", new Date(1982, 6, 1));
// Printed on console
// john.birthday
// Thu Jul 01 1982 00:00:00 GMT-0300 (Brasilia Standard Time)
// john.age
// 43
