var personal = {
    name: 'hyrma',
    age: 25
};

var app = (function (p) {
    return {
        sayHello: function () {
            alert('Hello,' + p.name + '!');
            alert('You are ' + p.age);
        }
    }
})(personal)