import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import CustomComponent from './customComponent';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.updateState = this
      .updateState
      .bind(this);
  }

  updateState(data) {
    this.setState((prevState) => ({
      // data: [
      //   'http://www.shanalogic.com/wordpress/wp-content/uploads2/2015/02/Mountain-Lion-Cub1-600x450.jpg',
      //   'https://images.pexels.com/photos/335910/pexels-photo-335910.jpeg',
      //   'https://images.pexels.com/photos/141496/pexels-photo-141496.jpeg',
      //   'https://images.pexels.com/photos/6468/animal-brown-horse.jpg',
      //   'https://images.pexels.com/photos/65006/pexels-photo-65006.jpeg',
      //   'https://images.pexels.com/photos/302304/pexels-photo-302304.jpeg'
      // ]
      data: data
    }));
  }

  componentDidMount() {
    // console.log("Component Mounted");
    let source = new EventSource('https://image-details.herokuapp.com/redirect');
    let that = this;
    let server_data = [];
    // console.log(source);
    source.onopen = function (e) {console.log(e)};
    source.onmessage = function (e) {
      // console.log(e);
    if(e.data != "" && server_data !== e.data){
      console.log(e.data);
      console.log("~~~~~~ New Data ~~~~~~~~");
      console.log(server_data);
      server_data = e.data; 
      that.updateState(JSON.parse(server_data));
    }
    console.log("Same data");
    console.log(server_data);
      // console.log(JSON.parse(e.data));
    }
    source.onerror = function (e) {
      console.log(e)
    }
  }

  render() {
    if (this.state.data.length == 0) {
      return (<Welcome/>);
    }
    return (<CustomComponent data={this.state.data}/>);
  }
}

ReactDOM.render(
  <MainApp/>, document.getElementById('app'));
