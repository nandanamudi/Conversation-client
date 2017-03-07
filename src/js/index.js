import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h2>Hello, world!</h2>,
  document.getElementById('app')
);

let source = new EventSource('http://localhost:8888/test.php');
    source.onmessage = function(e) {
      console.log(e.data);
      // document.body.innerHTML += e.data + '<br>';
    };