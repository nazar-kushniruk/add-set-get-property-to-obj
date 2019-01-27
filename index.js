function User(fullName) {
    this.fullName = fullName;

        Object.defineProperty(this, 'firstName', {
            get: function () {
                return this.fullName.split(' ',1).toString();
            },
            set: function (value) {
                this.fullName = value + ' ' + this.fullName.split(' ')[1];
            }
        });

    Object.defineProperty(this, 'lastName', {
        get: function () {
            return this.fullName.split(' ')[1];
        },
        set: function (value) {
            this.fullName =this.fullName.split(' ',1) + ' ' + value ;
        }
    })
}


var vasya = new User("Василий Попкин");

console.log(vasya.firstName);
console.log(vasya.lastName);
vasya.firstName = 'Николай';
console.log('add vasya.firstName = \'Николай\'',vasya.fullName);
vasya.lastName = 'Левченко';

console.log('add vasya.lastName = \'Левченко\'',vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);


