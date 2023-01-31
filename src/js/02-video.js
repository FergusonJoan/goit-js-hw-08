import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = 'current time';

const onPlay = throttle(({ seconds }) => {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}, 1000);

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY));
player.on('timeupdate', onPlay);

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
//player.on('timeupdate', throttle(onPlay, 1000));
// function onPlay({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
