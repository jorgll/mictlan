/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

export type SpriteProps = Readonly <{
  width: number;
  height: number;
  x: number;
  y: number;
  imageResources: ImageRequireSource[];
  currentImage: number;
}>;

const Sprite = ({ 
  width, 
  height, 
  x, 
  y, 
  imageResources,
  currentImage }: SpriteProps) => {

    if (!imageResources || imageResources.length == 0) {
      return null;
    }

    if (imageResources.length > 4) {
      console.log("Rendering room tile");
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
          borderWidth: 1,
          // borderColor: 'red',
        }}
      />
    );
};

export default Sprite;