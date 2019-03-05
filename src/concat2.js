var personObj = (function (p) {
    return {
        sayHello: function () {
            alert('Hello my name is ' + p.name);
            alert('I am ' + p.age);
            console.log('Hello my name is ' + p.name);
            console.log('I am ' + p.age);
        }
    };
})(person);