import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sky: '#puydesancy'
    }
  }

  changeSky = (sky) => {
    this.setState({
      sky: sky,
    });
  };

  render () {
    return (
      <Scene>
        <a-assets>
          <a-mixin id="red" material="color: red"></a-mixin>
          <a-mixin id="blue" material="color: blue"></a-mixin>
          <a-mixin id="cube" geometry="primitive: box"></a-mixin>
          <img id="man" src="man.jpg" />
          <img id="lake" src="lake.jpg" />
          <img id="puydesancy" src="puydesancy.jpg" />
        </a-assets>

        {/*<Sky/>*/}
        {/*<a-sky src={this.state.sky} rotation="0 12 0"></a-sky>*/}
        <Camera><Cursor maxDistance={31} fuse={true} /></Camera>

        {/*<Entity light={{type: 'hemisphere', color: '#000',groundColor:'#fff', intensity: 1}}/>*/}
        <a-curvedimage src="#puydesancy"
                       position="0 0 0"
                       height="120"
                       radius="50"
                       theta-length="360"  />
        <a-image  src="#lake"
                  position="5 0 -20"
                  look-at="[camera]"
                  onClick={this.changeSky.bind(this, '#lake')}  />

        <a-image  src="#puydesancy"
                  position="-5 0 -20"
                  look-at="[camera]"
                  onClick={this.changeSky.bind(this, '#puydesancy')}  />

        {/*<Entity mixin="cube"
          material="src: #lake; shader: flat"
          position="-5 0 -20"
          onClick={this.changeSky.bind(this, '#lake')}>
        </Entity>

        <Entity mixin="cube"
          material="src: #puydesancy; shader: flat"
          position="5 0 -20"
          onClick={this.changeSky.bind(this, "#puydesancy")}>
        </Entity>*/}
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
