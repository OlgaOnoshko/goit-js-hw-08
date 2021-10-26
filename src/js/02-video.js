import Player from '@vimeo/player';



const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);
// const localStorage = 

var onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

player.on('timeupdate', function(data) {
    // data is an object containing properties specific to that event
});

console.log(player)

