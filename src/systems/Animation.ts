//
// Animation class
// Encapsulates logic needed to manipulate on-screen Sprites using metadata in entities.ts
// Called by onTimer() as it dispatches each frame
// Set up by GameScreen.tsx during screen initialization
//

type AnimatableEntity = {
  id: string;
  currentImage: number;
  imageResources: [];
  type: "animated" | "static";
  animation: {
    lastAnimationDelta: number;
    animationSpeedInMilliseconds: number;
  }
};

class Animation {
  static entitiesToAnimate: AnimatableEntity[] = [];

  public static track(entity: AnimatableEntity) {
    if (entity.type === "animated") {
      Animation.entitiesToAnimate.push(entity);
    }
  }

  public static update(currentTime: number) {

    // Iterate through each tracked entity to animate and calculate its new sprite image based on time
    this.entitiesToAnimate.map(e => {
      if (currentTime - e.animation.lastAnimationDelta > e.animation.animationSpeedInMilliseconds) {
        e.currentImage = (e.currentImage +1) % e.imageResources.length;
        e.animation.lastAnimationDelta = currentTime;
      }    
    })

  }
};

export default Animation;