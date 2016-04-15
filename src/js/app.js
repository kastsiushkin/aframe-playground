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
      color: 'red'
    }
  }

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  render () {
    return (
      <Scene>
        <Camera><Cursor/></Camera>

        <Sky/>

        <Entity light={{type: 'hemisphere', color: '#000',groundColor:'#fff', intensity: 1}}/>
        <Entity geometry={{primitive: 'box'}}
          material={{shader: 'flat', color: '#00ffff'}}
          onClick = {() => console.log("Click")}
          position="2 0 -5">

        </Entity>

        <Entity geometry="primitive: box" material={{color: this.state.color}}
                onClick={this.changeColor}
                position="0 0 -5">
          <Animation attribute="rotation" dur="5000" repeat="indefinite" to="360 360 360"/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
