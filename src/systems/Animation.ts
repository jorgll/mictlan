//
// Animation class
// Encapsulates logic needed to manipulate on-screen Sprites using metadata in entities.ts
// Called by onTimer() as it dispatches each frame
// Set up by GameScreen.tsx during screen initialization
//

type AnimatableEntity = Readonly <{
  sprite: {
    currentImage: number;
    imageResources: [];
    type: "animated" | "static";
  },
  animation: {
    lastAnimationDelta: number;
    animationSpeedInMilliseconds: number;
  }
}>;

class Animation {
  static entitiesToAnimate: AnimatableEntity[] = [];

  public static track(entity: AnimatableEntity) {
    if (entity.sprite.type === "animated") {
      Animation.entitiesToAnimate.push(entity);
    }
  }

  public static update(currentTime: number) {

    // Iterate through each tracked entity to animate and calculate its new sprite image based on time
    this.entitiesToAnimate.map(entity => {
      if (currentTime - entity.animation.lastAnimationDelta > entity.animation.animationSpeedInMilliseconds) {
        entity.sprite.currentImage = (entity.sprite.currentImage +1) % entity.sprite.imageResources.length;
        entity.animation.lastAnimationDelta = currentTime;
      }    
    })

  }
};

export default Animation;