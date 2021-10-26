import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log("localStorage")



const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);

localStorage.setItem("currentTime", 68890)
// console.log(localStorage.getItem("videoplayer-current-time"))
// const localStorage = ("videoplayer-current-time")


// player.on('timeupdate', function(currentTime) {
    // тут десь має бути тротл data is an object containing properties specific to that event
// });

// var onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// player.on('timeupdate', function(data) {
//     // data is an object containing properties specific to that event
// });

console.log(throttle)
console.log(localStorage)



