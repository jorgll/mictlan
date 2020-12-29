import { entities } from "../entities/entities";

type AnimatableEntity = Readonly <{
  sprite: {
    currentImage: number;
    imageResources: [];
  },
  animation: {
    lastAnimationDelta: number;
    animationSpeedInMilliseconds: number;
  }
}>;

class Animation {
  static entitiesToAnimate: AnimatableEntity[] = [];

  public static track(entity: AnimatableEntity) {
    Animation.entitiesToAnimate.push(entity);
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