import Matter, { IEventCollision } from 'matter-js';
import { Player } from './Player';

//
// World class
// Knows how to initialize and interface with the physics engine to create basic world support
// Singleton - there is only ever a single world at a time
//
class World {
  private _engine: Matter.Engine;
  private _world: Matter.World;
  private _player: Player;

  constructor() {

    // Initialize MatterJS engine and world
    console.log("World - Initialize");
    this._engine = Matter.Engine.create({ enableSleeping: false });
    this._engine.enabled = true;
    this._world = this._engine.world;

    // Set up collision detection system
    Matter.Events.on(this._engine, 'collisionStart', event => this.onCollision(event))

    // Set up Player entity
    this._player = new Player(this._world);

    // // Set up Room entity
    // Matter.World.add(this._world, [
    //   Matter.Bodies.rectangle(
    //     0, 0, 240, 24, {
    //       isStatic: true,
    //       isSensor: false,
    //     }
    //   )
    // ]);

    console.log("World - Initialize done");
  }

  // Dispatch collision events to collision handling system
  onCollision = (event: IEventCollision<Matter.Engine>) => {
    this.onCollision(event);
  }

  public getEngine(): Matter.Engine {
    return this._engine;
  }
}

const instance = new World();
export { instance as World };