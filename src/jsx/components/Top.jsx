var React = require('react');
//need http://babeljs.io/docs/setup/#webpack
var CanvasUtils = require("babel!../../js/classes/utils/canvasUtils.js").default;
var loadJSONP = require("babel!../../js/classes/utils/BaseUtils.js").loadJSONP;
var CanvasUtils_ = new CanvasUtils();



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
      x:CanvasUtils_.randomRange(-6000,6000),
      y:CanvasUtils_.randomRange(-6000,6000),
      z:CanvasUtils_.randomRange(0,6000)
    };
  }

const TRENDSJA = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.google.com/trends/hottrends/atom/feed?pn=p4&num=20&jsonp=JSONPCallback";
const TRENDSUS = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.google.com/trends/hottrends/atom/feed?pn=p1&num=20&jsonp=JSONPCallback";
var FONTFAMILYARR=["メイリオ",'ヒラギノ角ゴ ProN W3','游ゴシック','ヒラギノ明朝 Pro W3','游明朝体'];
var trends=[];
loadJSONP(
  TRENDSJA,
  function(data) {
    var htmlStr="";
    data.responseData.feed.entries.map((entry) => {
    trends.push(entry.title);
    }) 
    
    for(var i = 0; i < numShapes; i += 1) {
      shapes[i] = {
      x:CanvasUtils_.randomRange(-6000,6000),
      y:CanvasUtils_.randomRange(-6000,6000),
      z:CanvasUtils_.randomRange(0,6000),
      Pradius : Math.random()*20,
      txt:trends[current%trends.length],
      fontfamily:FONTFAMILYARR[current%FONTFAMILYARR.length],
      size:Math.random() * 150
      };
      current++;
    }
      context.translate(width / 2, height / 2);
      update();
  }
)

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
      context.fillText(shape.txt, -100, -100)
      context.restore();
      // move away:
      // shape.z += 5;
      // if(shape.z > 10000) {
      //  shape.z = 0;
      // }
      // move toward:
      shape.z -= 10;
      if(shape.z < 0) {
        shape.z = CanvasUtils_.randomRange(5000,10000);
      }
    }
    requestAnimationFrame(update); 
  }
}
   

module.exports = Top;
