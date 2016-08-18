var React = require('react');
var trendsJA = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.google.com/trends/hottrends/atom/feed?pn=p4&num=10&jsonp=JSONPCallback";
var trendsUS = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.google.com/trends/hottrends/atom/feed?pn=p1&num=10&jsonp=JSONPCallback";
var trends=[];

var loadJSONP = (function(){
  var unique = 0;
  return function(url, callback, context) {
    // INIT
    var name = "_jsonp_" + unique++;
    if (url.match(/\?/)) url += "&callback="+name;
    else url += "?callback="+name;
    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // Setup handler
    window[name] = function(data){
      callback.call((context || window), data);
      document.getElementsByTagName('head')[0].removeChild(script);
      script = null;
      delete window[name];
    };
    // Load JSON
    document.getElementsByTagName('head')[0].appendChild(script);
  };
})();



class Top extends React.Component {
    render() {
        return (
            <div className="page-home page">
            <div id="targ">
            </div>
            <canvas id="canvas"></canvas>
            </div>
        );
    }
    componentDidMount() {
      drawCanvas();
    }
}


function drawCanvas(){
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 300,
    cards = [],
    numCards = 500,
    centerZ = 2000,
    radius = 5000,
    baseAngle = 0,
    current=0,
    rotationSpeed = 0.001;


  for(var i = 0; i < numCards; i += 1) {
    var card = {
      // angle: 0.1 * i,
      angle: Math.random() * i,
      radius : Math.random()*20,
      y: 2000 - 4000 / numCards * i,
      img: document.createElement("img")
    };
    card.x = Math.cos(card.angle + baseAngle) * radius;
    card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
    cards.push(card);
  }

  context.translate(width / 2, height / 2);

  // document.body.addEventListener("mousemove", function(event) {
  //  rotationSpeed = (event.clientX - width / 2) * 0.00005;
  //  ypos = (event.clientY - height / 2) * 2;
  // });
loadJSONP(
      trendsJA,
      function(data) {
                    var htmlStr="";
            data.responseData.feed.entries.map((entry) => {
              trends.push(entry.title);
            }) 
              update();
          }
    )



  function update() {
    baseAngle += rotationSpeed;
    cards.sort(zsort);
    context.clearRect(-width / 2, -height / 2, width, height);
    for(var i = 0; i < numCards; i += 1) {
      var card = cards[i],
      perspective = fl / (fl + card.z);

      context.save();
      context.scale(perspective, perspective);
      context.translate(card.x, card.y);

      context.fillStyle="rgba(0,0,0," + Math.abs(card.z) / 2000;
      context.beginPath();
      // context.arc(0, 0, card.radius, 0, Math.PI * 2, false);
      context.font = "italic bold 50px 'ＭＳ Ｐゴシック'";
      context.fillText(trends[current%trends.length], card.radius, 65);
      current++;
      context.fill();

      context.restore();

      card.x = Math.cos(card.angle + baseAngle) * radius;
      card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
    }
    requestAnimationFrame(update);
  }

  function zsort(cardA, cardB) {
    return cardB.z - cardA.z;
  }
}




module.exports = Top;
