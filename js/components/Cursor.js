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
      <Animation begin="click" easing="ease-in" attribute="scale"
               fill="backwards" from="0.1 0.1 0.1" to="1 1 1"></Animation>
      <Animation begin="fusing" easing="ease-in" attribute="scale"
               fill="forwards" from="1 1 1" to="0.1 0.1 0.1"></Animation>
    </Entity>
  );
}
