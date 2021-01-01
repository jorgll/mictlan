import React from 'react';
import { View } from 'react-native';
import Sprite, { SpriteProps } from './Sprite';

type RoomProps = Readonly <{
  floorTilesX: number;
  floorTilesY: number;
  floorTile: SpriteProps;
}>;

interface Tile { 
  x: number,
  y: number,
  imageIndex: number
};

const floorTileLocations: Tile[] = [];

// Set up room tiles based on room entity metadata counts
const setup = (floorTilesX: number, floorTilesY: number, floorTile: SpriteProps) => {
  let currentXposition = 0;
  let currentYposition = 0;
  let tile: Tile = { x: 0, y: 0, imageIndex: 0 }
  console.log ("Setting up floor tiles");

  // TODO: Pick a random tile image on the floor
  for (let i = 0; i < floorTilesY; i++) {
    for (let j = 0; j < floorTilesX; j++) {
      tile = { 
        x: currentXposition + floorTile.width,
        y: currentYposition + floorTile.height,
        imageIndex: Math.floor(Math.random() * 8),
      };
      currentXposition += floorTile.width;
      floorTileLocations.push(tile);
    }
    currentXposition = 0;
    currentYposition += floorTile.height;
  }
  console.log("Floor tiles set up: ");
  console.log(floorTileLocations);
}

const Room = ({ 
  floorTilesX, 
  floorTilesY,
  floorTile,
  }: RoomProps) => {

    if (floorTileLocations.length === 0) {
      setup(floorTilesX, floorTilesY, floorTile);
    }
    const tileEntity = floorTile;

    const spriteMatrix = floorTileLocations.map(tile => (
      <View>
        <Sprite
          id = { tileEntity.id }
          key = { `id$(tile.id)x$(tile.x)y$(tile.y)i$(tile.imageIndex)` }
          width = { tileEntity.width }
          height = { tileEntity.height }
          x = { tile.x }
          y = { tile.y }
          zIndex = { tileEntity.zIndex }
          imageResources = { tileEntity.imageResources }
          currentImage = { tile.imageIndex }
        />
      </View>
    ));

    return (
      <>
        {spriteMatrix}
      </>
  );
};

export default Room;