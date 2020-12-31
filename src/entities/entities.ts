import Room from '../components/React/Room';
import Sprite from '../components/React/Sprite';

const PIXEL_MULTIPLIER = 6;

//
// Entity store
// Entities should consist only of simple metadata
// Each entity has a unique ID and enough information to recreate an object and persist its state
// To send data between systems you typically use Components
// More details at https://en.wikipedia.org/wiki/Entity_component_system
//
export const entities: any = {
  wizard: {
    renderer: Sprite,
    width: 8 * PIXEL_MULTIPLIER,
    height: 14 * PIXEL_MULTIPLIER,
    x: 0,
    y: 0,
    imageResources: [
      require('../entities/sprites/wizzard_m_idle_anim_f0.png'),
      require('../entities/sprites/wizzard_m_idle_anim_f1.png'),
      require('../entities/sprites/wizzard_m_idle_anim_f2.png'),
      require('../entities/sprites/wizzard_m_idle_anim_f3.png'),
    ],
    currentImage: 1,
    type: "animated",
    animation: {
      lastAnimationDelta: Date.now(),
      animationSpeedInMilliseconds: 400,
    },
  },
  room: {
    renderer: Room,
    floorTilesX: 13,
    floorTilesY: 6,
    floorTile: {
      width: 48,
      height: 48,
      x: 0,
      y: 0,
      imageResources: [
        require('../entities/sprites/floor_1.png'),
        require('../entities/sprites/floor_2.png'),
        require('../entities/sprites/floor_3.png'),
        require('../entities/sprites/floor_4.png'),
        require('../entities/sprites/floor_5.png'),
        require('../entities/sprites/floor_6.png'),
        require('../entities/sprites/floor_7.png'),
        require('../entities/sprites/floor_8.png'),
      ],
      currentImage: 1,
      type: "static",
    },
  }
}