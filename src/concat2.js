(function (p) {
    return {
        sayHello: function () {
            console.log('Hello my name is ' + p.name)
            console.log('I am '+p.age);
        }
    }
})(person)