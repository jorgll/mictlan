import Matter from 'matter-js';

let engine = Matter.Engine.create({ enableSleeping: false });
let world = engine.world;

export const entities = {
  physics: {
    engine: engine,
    world: world,
  },
}