let obj = {
    my_property: 0,

    get prop_name() {
        // getter, the code executed on getting obj.propName
        return this.my_property;
    },

    set prop_name(value: number) {
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

let user = {
    name: "John",
    surname: "smith",

    get full_name(){
        return `${this.name} ${this.surname}`;
    },

    set full_name(value: string) {
        [this.name, this.surname] = value.split(' ');
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

let user_2 = {
    get name() {
        return this._name;
    },

    set name(value: string) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }

        this._name = value;
    }
}

// Printed on console
// user_2.name = "Pete"
// 'Pete'
// user_2.name = ''
// Name is too short, need at least 4 characters
// ''

function User(name: string, birthday: Date) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let today_year = new Date().getFullYear();
            return today_year - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1982, 6, 1));

// Printed on console
// john.birthday
// Thu Jul 01 1982 00:00:00 GMT-0300 (Brasilia Standard Time)
// john.age
// 43
