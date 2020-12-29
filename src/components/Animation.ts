import TimeUpdate from 'react-native-game-engine';

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
  public static update(entity: AnimatableEntity, currentTime: number) {
    // Animate if needed
    if (currentTime - entity.animation.lastAnimationDelta > entity.animation.animationSpeedInMilliseconds) {
      entity.sprite.currentImage = (entity.sprite.currentImage +1) % entity.sprite.imageResources.length;
      entity.animation.lastAnimationDelta = currentTime;
    }    
  }
};

export default Animation;