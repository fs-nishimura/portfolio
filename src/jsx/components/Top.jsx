var utils = {
  norm: function(value, min, max) {
    return (value - min) / (max - min);
  },

  lerp: function(norm, min, max) {
    return (max - min) * norm + min;
  },

  map: function(value, sourceMin, sourceMax, destMin, destMax) {
    return utils.lerp(utils.norm(value, sourceMin, sourceMax), destMin, destMax);
  },

  clamp: function(value, min, max) {
    return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
  },

  distance: function(p0, p1) {
    var dx = p1.x - p0.x,
      dy = p1.y - p0.y;
    return Math.sqrt(dx * dx + dy * dy);
  },

  distanceXY: function(x0, y0, x1, y1) {
    var dx = x1 - x0,
      dy = y1 - y0;
    return Math.sqrt(dx * dx + dy * dy);
  },

  circleCollision: function(c0, c1) {
    return utils.distance(c0, c1) <= c0.radius + c1.radius;
  },

  circlePointCollision: function(x, y, circle) {
    return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
  },

  pointInRect: function(x, y, rect) {
    return utils.inRange(x, rect.x, rect.x + rect.width) &&
           utils.inRange(y, rect.y, rect.y + rect.height);
  },

  inRange: function(value, min, max) {
    return value >= Math.min(min, max) && value <= Math.max(min, max);
  },

  rangeIntersect: function(min0, max0, min1, max1) {
    return Math.max(min0, max0) >= Math.min(min1, max1) && 
         Math.min(min0, max0) <= Math.max(min1, max1);
  },

  rectIntersect: function(r0, r1) {
    return utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
         utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
  },

  degreesToRads: function(degrees) {
    return degrees / 180 * Math.PI;
  },

  radsToDegrees: function(radians) {
    return radians * 180 / Math.PI;
  },

  randomRange: function(min, max) {
    return min + Math.random() * (max - min);
  },

  randomInt: function(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  },

  roundToPlaces: function(value, places) {
    var mult = Math.pow(10, places);
    return Math.round(value * mult) / mult;
  },

  roundNearest: function(value, nearest) {
    return Math.round(value / nearest) * nearest;
  },

  quadraticBezier: function(p0, p1, p2, t, pFinal) {
    pFinal = pFinal || {};
    pFinal.x = Math.pow(1 - t, 2) * p0.x + 
           (1 - t) * 2 * t * p1.x + 
           t * t * p2.x;
    pFinal.y = Math.pow(1 - t, 2) * p0.y + 
           (1 - t) * 2 * t * p1.y + 
           t * t * p2.y;
    return pFinal;
  },

  cubicBezier: function(p0, p1, p2, p3, t, pFinal) {
    pFinal = pFinal || {};
    pFinal.x = Math.pow(1 - t, 3) * p0.x + 
           Math.pow(1 - t, 2) * 3 * t * p1.x + 
           (1 - t) * 3 * t * t * p2.x + 
           t * t * t * p3.x;
    pFinal.y = Math.pow(1 - t, 3) * p0.y + 
           Math.pow(1 - t, 2) * 3 * t * p1.y + 
           (1 - t) * 3 * t * t * p2.y + 
           t * t * t * p3.y;
    return pFinal;
  },

  multicurve: function(points, context) {
    var p0, p1, midx, midy;

    context.moveTo(points[0].x, points[0].y);

    for(var i = 1; i < points.length - 2; i += 1) {
      p0 = points[i];
      p1 = points[i + 1];
      midx = (p0.x + p1.x) / 2;
      midy = (p0.y + p1.y) / 2;
      context.quadraticCurveTo(p0.x, p0.y, midx, midy);
    }
    p0 = points[points.length - 2];
    p1 = points[points.length - 1];
    context.quadraticCurveTo(p0.x, p0.y, p1.x, p1.y);
  }

}
var React = require('react');
var trendsJA = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.google.com/trends/hottrends/atom/feed?pn=p4&num=10&jsonp=JSONPCallback";
var trendsUS = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.google.com/trends/hottrends/atom/feed?pn=p1&num=10&jsonp=JSONPCallback";
var trends=[];
var fontFamilyArr=["メイリオ",'ヒラギノ角ゴ ProN W3','游ゴシック','ヒラギノ明朝 Pro W3','游明朝体'];

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
    current=0,
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl=300,
    shapes=[],
    numShapes=300;

  for (var i = 0; i < numShapes; i++) {
    shapes[i] = {
      x:utils.randomRange(-6000,6000),
      y:utils.randomRange(-6000,6000),
      z:utils.randomRange(0,6000)
    };
  }

loadJSONP(
      trendsJA,
      function(data) {
            var htmlStr="";
            data.responseData.feed.entries.map((entry) => {
            trends.push(entry.title);
            }) 
            for(var i = 0; i < numShapes; i += 1) {
              shapes[i] = {
      x:utils.randomRange(-6000,6000),
      y:utils.randomRange(-6000,6000),
      z:utils.randomRange(0,6000),
                      radius : Math.random()*20,

      txt:trends[current%trends.length],
      fontfamily:fontFamilyArr[current%fontFamilyArr.length],
      size:Math.random() * 150
              };
              current++;
            }
              context.translate(width / 2, height / 2);
              update();
          }
    )



  // document.body.addEventListener("mousemove", function(event) {
  //  rotationSpeed = (event.clientX - width / 2) * 0.00005;
  //  ypos = (event.clientY - height / 2) * 2;
  // });




  function update() {
             context.clearRect(-width / 2, -height / 2, width, height);
    for(var i = 0; i < numShapes; i += 1) {
      var shape = shapes[i],
        perspective = fl / (fl + shape.z);

      context.save();
      context.translate(shape.x * perspective, shape.y * perspective);
      context.scale(perspective, perspective);
      // square:
      context.fillStyle="rgba(0,0,0," + (1-Math.abs(shape.z) / 2000)+")";
      // context.arc(0, 0, shape.radius, 0, Math.PI * 2, false);
      context.font = "italic bold " + shape.size + "px " + shape.fontfamily;
      context.fillText(shape.txt, shape.radius, 65);
      // circle:
      // context.beginPath();
      // context.arc(0, 0, 100, 0, Math.PI * 2, false);
      // context.fill();

      // letter:
      // context.fillText(shape.char, -100, -100)

      context.restore();

      // move away:
      // shape.z += 5;
      // if(shape.z > 10000) {
      //  shape.z = 0;
      // }

      // move toward:
      shape.z -= 10;
      if(shape.z < 0) {
        shape.z = utils.randomRange(5000,10000);
      }
    }
    requestAnimationFrame(update); 
   
}
}
   




module.exports = Top;
