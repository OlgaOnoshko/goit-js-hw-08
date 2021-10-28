import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const LOCALSTARAGEKEY = "videoplayer-current-time"
const setTime = localStorage.getItem(LOCALSTARAGEKEY)

player.setCurrentTime(setTime)

const onPlay = function(data) {
    localStorage.setItem(LOCALSTARAGEKEY, data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));




