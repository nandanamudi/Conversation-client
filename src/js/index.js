import $ from 'jquery';

var source = new EventSource('http://localhost:8888/test.php');
    source.onmessage = function(e) {
      console.log(e.data);
      // document.body.innerHTML += e.data + '<br>';
    };