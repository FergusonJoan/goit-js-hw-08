import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'current time';

const onPlay = throttle(({ seconds }) => {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}, 1000);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);
player.on('timeupdate', onPlay);
