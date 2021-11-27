/* Rest(residuo) y Spread(propagación) */

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

const [firstAnime, secondAnime, ...others] = anime;
console.log(`First Anime: ${firstAnime}, Second Anime: ${secondAnime}`);
console.log(`Others Animes: ${others}`)

const { firstName, nickName, ...attributes } = person;
console.log(`Person First Name: ${firstName}`);
console.log(`Person Nick Name: ${nickName}`);
console.log(`Person Attributes: ${JSON.stringify(attributes)}`);

const personCopy = { ...person };
console.log(`Person Copy: ${JSON.stringify(personCopy)}`);
console.log(`Person Objects: ${personCopy === person}`);
console.log(`Person Name: ${personCopy.firstName === person.firstName}`);
