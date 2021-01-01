/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { entities } from '../entities/entities';
import { onTouch, onTimer } from '../systems/systems';

const styles = StyleSheet.create({
  container: {
    width: 700,
    height: 340,
    backgroundColor: '#EEEEEE',
    alignSelf: 'center',
  },
});

export default class GameScreen extends Component {
  
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[onTimer, onTouch]}
        entities={entities}>
      </GameEngine>
    );
  }
}
