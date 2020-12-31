/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

type SpriteProps = Readonly <{
  width: number;
  height: number;
  x: number;
  y: number;
  sprite: {
    imageResources: ImageRequireSource[],
    currentImage: number;
  }
}>;

const Sprite = ({ 
  width, 
  height, 
  x, 
  y, 
  sprite }: SpriteProps) => {

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