const hbs = require('hbs');

//Helpers
hbs.registerHelper('getYear', () => new Date().getFullYear());

hbs.registerHelper('capitalize', (txt) => {
    let arr = txt.split(' ');
    arr.forEach((word,idx) => {
        arr[idx] = word[0].toUpperCase() + word.slice(1);
    });
    return arr.join(' ');
});