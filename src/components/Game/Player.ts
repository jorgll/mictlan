import { entities } from '../../entities/entities';
import Animation from '../../systems/Animation';
import Matter from 'matter-js';

//
// Player class
// Knows how to render and update state for primary Player object
//

export class Player {
  private _body: Matter.Body;

  constructor(world: Matter.World) {

    console.log("Player Initialize");
    // Initialize MatterJS body
    this._body = Matter.Bodies.rectangle(
      entities.wizard.x,
      entities.wizard.y,
      entities.wizard.width,
      entities.wizard.height,
      {
        isStatic: true,
        label: 'wizard',
      }
    )

    // Initialize animated sprite
    Animation.track(entities.wizard);

    // Add entity to World
    Matter.World.add( world, [ this._body ]);
    
    console.log("Player Initialize - done");
  }

}
