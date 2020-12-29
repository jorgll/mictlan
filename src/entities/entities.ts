import Matter from 'matter-js';
import Sprite from '../components/Sprite';

let engine = Matter.Engine.create({ enableSleeping: false });
let world = engine.world;

const GAME_WIDTH = 650;
const GAME_HEIGHT = 340;

const PLAYER_START_POINT_X = GAME_WIDTH / 2;
const PLAYER_START_POINT_Y = GAME_HEIGHT / 2;

const PLAYER_SPRITE_WIDTH = 16;
const PLAYER_SPRITE_HEIGHT = 28;
const PIXEL_MULTIPLIER = 6;

const playerSettings = {
  isStatic: true,
}

const bodies = {
  wizard: Matter.Bodies.rectangle(
    PLAYER_START_POINT_X,
    PLAYER_START_POINT_Y,
    PLAYER_SPRITE_WIDTH * PIXEL_MULTIPLIER,
    PLAYER_SPRITE_HEIGHT * PIXEL_MULTIPLIER,
    {
      ...playerSettings,
      label: 'wizard',
    }
  ),
}

export const entities: any = {
  physics: {
    engine: engine,
    world: world,
  },
  wizard: {
    body: bodies.wizard,
    width: PLAYER_SPRITE_WIDTH * PIXEL_MULTIPLIER,
    height: PLAYER_SPRITE_HEIGHT * PIXEL_MULTIPLIER,
    xAdjustment: 0,
    yAdjustment: 0,
    sprite: {
      imageResources: [
        require('../entities/sprites/wizzard_m_idle_anim_f0.png'),
        require('../entities/sprites/wizzard_m_idle_anim_f1.png'),
        require('../entities/sprites/wizzard_m_idle_anim_f2.png'),
        require('../entities/sprites/wizzard_m_idle_anim_f3.png'),
      ],
      currentImage: 1,
    },
    animation: {
      lastAnimationDelta: Date.now(),
      // lastAnimationDelta: 0,
      animationSpeedInMilliseconds: 400,
    },
    renderer: Sprite
  }
}