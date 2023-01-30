localStorage.getItem('queue-films');
localStorage.getItem('watched-films');

JSON.parse(localStorage.getItem('queue-films'));
JSON.parse(localStorage.getItem('watched-films'));

const q = JSON.parse(localStorage.getItem('queue-films'));
const watch = JSON.parse(localStorage.getItem('watched-films'));

export {q, watch}