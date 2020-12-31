import React from 'react';
import { View, Image, ImageRequireSource } from 'react-native';

class SpriteProperties {
  public imageResources: ImageRequireSource[] = [];
  public currentImage: number = 0;
  public width: number = 0;
  public height: number = 0;
  public left: number = 0;
  public top: number = 0;
};

type RoomProps = Readonly <{
  floorTilesX: number;
  floorTilesY: number;
  floorTile: {
    sprite: SpriteProperties;
  }
}>;

const roomTiles: any = [];

// Set up room tiles based on room entity metadata counts
const setup = (floorTilesX: number, floorTile: any) => {
  if (roomTiles.length === 0) {
    let currentXposition = 0;
    for (let i = 0; i < floorTilesX; i++) {
      const tile = new SpriteProperties();
      tile.currentImage = floorTile.sprite.currentImage;
      tile.height = floorTile.sprite.height;
      tile.width = floorTile.sprite.width;
      tile.left = currentXposition + floorTile.sprite.width;
      currentXposition = tile.left;
      roomTiles.push(tile);
    }
  }
}

const Room = ({ 
  floorTilesX, 
  floorTilesY, 
  floorTile,
  }: RoomProps) => {

    setup(floorTilesX, floorTile);

    return (
      <View>
        {roomTiles && roomTiles.map(tile => {
          <Image
            source={floorTile.sprite.imageResources[tile.currentImage]}
            style={{
              position: 'absolute',
              left: tile.left,
              top: tile.top,
              width: tile.width,
              height: tile.height,
            }}
          />
        })}
        
    </View>
  );
};

export default Room;