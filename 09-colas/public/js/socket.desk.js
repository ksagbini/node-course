var socket = io();

var params = new URLSearchParams(window.location.search);

if(!params.has('escritorio')){
    window.location('index.html');
    throw new Error('Escritorio necesario');
}

var desk = params.get('escritorio');
console.log(desk);