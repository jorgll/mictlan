/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

export type SpriteProps = Readonly <{
  id: string;
  width: number;
  height: number;
  x: number;
  y: number;
  zIndex: number;
  imageResources: ImageRequireSource[];
  currentImage: number;
}>;

const Sprite = ({ 
  id,
  width, 
  height, 
  x, 
  y, 
  zIndex,
  imageResources,
  currentImage }: SpriteProps) => {

    if (!imageResources || imageResources.length == 0) {
      return null;
    }

    return (
      <Image
        source={imageResources[currentImage]}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          height: height,
          zIndex: zIndex,
          borderWidth: 1,
          // borderColor: 'red',
        }}
      />
    );
};

export default Sprite;