/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Matter, { IEventCollision } from 'matter-js';
import { GameEngine } from 'react-native-game-engine';
import { entities } from '../entities/entities';
import { onTouch, onPhysics, onCollision } from '../systems/systems';

const styles = StyleSheet.create({
  container: {
    width: 650,
    height: 340,
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
});

export default class Game extends Component {
  
  constructor(props: any) {
    super(props);

    Matter.World.add(
     entities.physics.world, [ ]);
  }

  onCollision = (event: IEventCollision<Matter.Engine>) => {
    // Dispatch to collision handling system
    onCollision(event);
  }

  componentDidMount() {
    // TODO: Init entities with Mater.Sleeping / Matter.Body.setVelocity / etc
    Matter.Events.on(entities.physics.engine, 'collisionStart', event => this.onCollision(event))
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[onPhysics, onTouch]}
        entities={entities}>
      </GameEngine>
    );
  }
}
