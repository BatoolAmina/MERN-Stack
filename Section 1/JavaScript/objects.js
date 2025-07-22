const user = {
    name: 'Mansi',
    email: 'mansi123@gmail.com',
    password: 'mansi123',
    age: 21
};
console.log(user.name);
console.log(user['name']);
// console.log(user['user name'])

user.name = "Batool";
console.log(user);

user.course = "MERN Stack";
console.log(user);


delete user.password;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let SmartPhone = {
    brand : 'Samsung',
    model : 'Galaxy M31',
    price: 16000,
    colors: ['Violet', 'Black', 'White',[1,2,3,4]]
}

console.log(SmartPhone);
console.log(SmartPhone.colors[1]);
console.log(SmartPhone.colors[3][0]);
console.log();