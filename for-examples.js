
const manga = ['Berserk', 'Chansawman', 'Kitaro', 'One Punch Man', 'Uzumaki'];

console.log('======================')
console.log('***For tradicional***');
for (let i = 0; i < manga.length; i++) {
    console.log(manga[i]);
}

console.log('======================')
console.warn('***For in***');
for (let i in manga) {
    console.log(manga[i]);
}

console.log('======================')
console.warn('***For of***');
for (let heroe of manga) {
    console.log(heroe);
}

console.log('======================')


