//Data structuring:

const user = {
    firstName: 'Tanjiro',
    lastName: 'Kamado',
    email: 'tanjiro@mail.com',
    password: '123456',
    createdAt: 1543945177623
};

const anime = ['ChainSaw Man', 'Kimetsu no Yaiba', 'Naruto', 'Death Note', 'One Punch Man'];

const person = {
    firstName: 'Saitama',
    nickName: 'One Punch Man',
    email: 'saitama@one.com',
    password: '12345seis',
    addresses: [
        {
            address: 'Avenida Tres Poniente 678',
            city: 'Santiago',
            zipcode: '20500',
        },
        {
            address: 'Calle Local 1246',
            city: 'Santiago',
            zipcode: '45678',
        }
    ],
    createdAt: 1543945177623
};
/*==========================================================================================================================*/

//Before ES6
var email = user.email;
var currentAnime = anime[0];

console.log(`Before ES6 -> User Email: ${email}, Current Anime: ${currentAnime}`);

//Destructuring
var { email, firstName, lastName: apellido } = user;
var [currentAnime] = anime;
var [firstAnime] = anime;
var [, secondAnime] = anime;
var [, , thirdAnime] = anime;
const { nickName: hero } = person;
const { addresses: [{ address: house }, { address: department }] } = person;

console.log(`Destructuring ES6 -> User Email: ${email}, User Name: ${firstName}, User Last Name: ${apellido}`);

console.log(`Destructuring ES6 -> Current Anime: ${currentAnime}`);
console.log(`Destructuring ES6 -> First Anime: ${firstAnime}`);
console.log(`Destructuring ES6 -> Second Anime: ${secondAnime}`);
console.log(`Destructuring ES6 -> Third Anime: ${thirdAnime}`);

console.log(`Destructuring ES6 -> First Addess of ${hero}: ${house}, type: House`);
console.log(`Destructuring ES6 -> Second Addess of ${hero}: ${department}, type: Department`);

