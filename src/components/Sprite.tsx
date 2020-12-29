/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

type SpriteProps = Readonly <{
  body: Matter.Body;
  width: number;
  height: number;
  xAdjustment: number;
  yAdjustment: number;
  sprite: {
    imageResources: ImageRequireSource[],
    currentImage: number;
  }
}>;

const Sprite = ({ 
  body, 
  width, 
  height, 
  xAdjustment, 
  yAdjustment, 
  sprite }: SpriteProps) => {

    const xAdjust = xAdjustment ? xAdjustment : 0;
    const yAdjust = yAdjustment ? yAdjustment : 0;
    const x = body.position.x - width / 2 + xAdjust;
    const y = body.position.y - height / 2 - yAdjust;

    return (
      <Image
        source={sprite.imageResources[sprite.currentImage]}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
          borderWidth: 1,
          // borderColor: 'red',
        }}
      />
    );
};

export default Sprite;