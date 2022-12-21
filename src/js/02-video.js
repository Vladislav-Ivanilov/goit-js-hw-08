import Player from '@vimeo/player';
import { throttle } from 'lodash';

const STORAGE_TIME = 'videoplayer-current-time';

const saveTime = JSON.parse(localStorage.getItem(STORAGE_TIME)) || 0;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_TIME, seconds);
}

player.setCurrentTime(saveTime);
