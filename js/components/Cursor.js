import {Animation, Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const geometry = {
    primitive: 'ring',
    radiusInner: 0.004,
    radiusOuter: 0.015
  };
  const material = {
    color: props.color || "red",
    shader: 'flat',
    opacity: props.opacity || 0.3,
    transparent: true
  };
  return (
    <Entity cursor={props} geometry={geometry} material={material} position="0 0 -1">
      <Animation begin="500" easing="ease-in" attribute="scale"
               fill="both" from="0 0 0" to="1 1 1"></Animation>
      <Animation begin="click" easing="ease-in" attribute="scale"
               fill="backwards" from="0.1 0.1 0.1" to="1 1 1"></Animation>
      <Animation begin="fusing" easing="ease-in" attribute="scale"
               fill="backwards" from="1 1 1" to="0.1 0.1 0.1"></Animation>
    </Entity>
  );
}
