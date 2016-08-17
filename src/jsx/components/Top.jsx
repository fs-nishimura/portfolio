var React = require('react');
var trendsJA = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.google.com/trends/hottrends/atom/feed?pn=p4&num=10&jsonp=JSONPCallback";
var trendsUS = "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.google.com/trends/hottrends/atom/feed?pn=p1&num=10&jsonp=JSONPCallback";

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
            {loadJSONP(
				trendsJA,
				function(data) {
				var htmlStr="";
				  data.responseData.feed.entries.map((entry) => {
				  	return (<p>{entry.title}</p>);
				  	console.log(htmlStr,entry.title);
				  })
				  
				}
			)}
            </div>
                <canvas id="canvas"></canvas>
            </div>

        );
    }
}

module.exports = Top;
