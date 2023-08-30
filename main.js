'use strict';

import { ItemBuilder } from './src/item.js';
import { GameBuilder } from './src/game.js';

window.addEventListener('load', () => {
  
  function setVh() {
    const game = document.querySelector('.game');
    game.style.setProperty('--vh', `${window.innerHeight + 1}px`);
  }

  window.addEventListener('resize', setVh);
  setVh();

  let item;
  let bomb;

  if (/Android|iPhone/i.test(navigator.userAgent)) {
    // mobile
    item = new ItemBuilder()
      .count(5)
      .className('carrot')
      .imgPath('./images/carrot.png')
      .imgWidth(30)
      .imgHeight(134)
      .build();
  
    bomb = new ItemBuilder()
      .count(5)
      .className('tokki')
      .imgPath('./images/tokki.png')
      .imgWidth(90)
      .imgHeight(127)
      .build();
  } else {
    // pc
    item = new ItemBuilder()
      .count(5)
      .className('carrot')
      .imgPath('./images/carrot.png')
      .imgWidth(30)
      .imgHeight(134)
      .build();
  
    bomb = new ItemBuilder()
      .count(7)
      .className('tokki')
      .imgPath('./images/tokki.png')
      .imgWidth(120)
      .imgHeight(170)
      .build();
  }

  const carrotGame = new GameBuilder()
    .duration(10)
    .numOfLife(3)
    .maxLevel(2)
    .itemObj(item)
    .bombObj(bomb)
    .build();
})


/**
 * popup.js - show method에서 score 필요없으면 삭제
 * animation.js - 쉽게 다시 정리
 * sound.js - load 이슈 해결해보기
 */