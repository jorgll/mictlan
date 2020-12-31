import Matter, { IEventCollision } from 'matter-js';
import { GameEngineUpdateEventOptionType } from 'react-native-game-engine';
import Animation from './Animation';
import { World } from '../components/Game/World'

// Timer system
// Each tick, process and update sub-systems, dispatching callbacks for all entities
export const onTimer = (entities: any, { time }: GameEngineUpdateEventOptionType ) => {

  // Update animated sprite images
  Animation.update(time.current)

  // Update physics
  let engine = World.getEngine();
  engine.world.gravity.y = 0;
  Matter.Engine.update(engine, time.delta);
  return entities;
};

// Touch system
// Placeholder - currently only looks for inputs but doesn't do anything with them
export const onTouch = (entities: any, { touches }: GameEngineUpdateEventOptionType ) => {
  let move = touches.find((x: { type: string }) => x.type === 'move');
  if (move && move.delta) {
    console.log ('Move event registered', move);
  }

  return entities;
};

// Collision system
// Placeholder - currently only looks for collisions but doesn't do anything with them
export const onCollision = (event: IEventCollision<Matter.Engine>) => {
  var pairs = event.pairs;

  var objectA = pairs[0].bodyA.label;
  var objectB = pairs[0].bodyB.label;

  console.log ('Collision registered', objectA, objectB);
};
