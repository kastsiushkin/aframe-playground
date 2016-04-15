import {Animation, Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const geometry = {
    primitive: 'ring',
    radiusInner: 0.001,
    radiusOuter: 0.01
  };
  const material = {
    color: props.color,
    shader: 'flat',
    opacity: props.opacity || 0.9,
    transparent: true
  };
  return (
    <Entity cursor={props} geometry={geometry} material={material} position="0 0 -1">
      <Animation attribute="scale" begin="click" dur="600" fill="backwards" to="0 0 0"/>
    </Entity>
  );
}