/*This JavaScript is an animation that, upon mouseover, will reveal
a caffeine molecule, complete with darker bonds that signify the
double bonds.

One improvement I'd like to make later would be to assign the ending locations
geometrically, versus using key-value pairs for the ending locations.
This would also allow me to dynamically name and create tweens based 
upon the number of keys. Another day... */

//first, let's set the stage
var stage = new Kinetic.Stage({
  container: 'container',
  width: 200,
  height: 200
});
//create a layer in this stage
var layer = new Kinetic.Layer({
  y: -30,
  x: 10
});

//hexagon numbers
var h1 = 34.4;
var h2 = 20;
//pentagon numbers
var p1 = 12.3;
var p2 = 38;
var p3 = 23.5;
var p4 = 32.4;
  /* here are the key-value pairs for the ending coordinates.*/
var points = {1:[50, 260, 50, 220],
              2:[50, 220, 50+h1, 220-h2],
              3:[50+h1, 220-h2, 50+(2*h1), 220],
              4:[50+(2*h1), 220, 50+(2*h1), 260],
              5:[50+(2*h1), 260, 50+h1, 260+h2],
              6:[50+h1, 260+h2, 50, 260],
              7:[50, 220, 50-h1, 220-h2],
              8:[50+h1, 220-h2, 50+h1, 180-h2],
              9:[50, 260, 50-h1, 260+h2],
              10:[50+h1, 260+h2, 50+h1, 300+h2],
              11:[50+(2*h1), 260, 50+(2*h1)+p2, 260+p1],
              12:[50+(2*h1), 220, 50+(2*h1)+p2, 220-p1],
              13:[50+(2*h1)+p2, 220-p1, 50+(2*h1)+p2+p3, 240],
              14:[50+(2*h1)+p2+p3, 240, 50+(2*h1)+p2, 260+p1],
              15:[50+(2*h1)+p2, 220-p1, 50+(2*h1)+p2+p1, 220-p2-p1]
             };

//create key-value pairs for the tweens
var tweens = {};

/*now, let's make each 'stick' and assign it (almost) the same
properties, only variation is in the starting points, where I shift
them each by 5 pixels, since they each have a strokeWidth of 5 */
var list = {};
for(i=0;i<15;i++){
  var temp = 'stick'+(i+1);
  list[temp] = new Kinetic.Spline({
    points: [50+(i*5), 130, 50+(i*5), 90],
    tension: 0.5,
    opacity: 0.6,
    stroke: '#444',
    strokeWidth: 5,
    lineCap: 'round'
  });
  //add each new layer
  layer.add(list[temp]);
  
  var temp = 'stick'+i+'Tween';
  //the tweens with single bonds depicted with opacity = 0.6
  if (i!=3 && i!=7 && i!=8 && i!=13){
    tweens[temp] = new Kinetic.Tween({
        node: list['stick'+(i+1)],
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: points[i+1]
      });
  }else{
    //the tweens with double bonds depicted with opacity = 1.0
    tweens[temp] = new Kinetic.Tween({
        node: list['stick'+(i+1)],
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 1,
        points: points[i+1]
      });
  }
}
//now add all the layers to the stage
stage.add(layer);

var keys = Object.keys(tweens);

//on mouseover, play all the tweens
stage.getContainer().addEventListener('mouseover', function() {
  for(i=0;i<15;i++){
    tweens[keys[i]].play();
  }
});

//on mouseout, reverse the tweens
stage.getContainer().addEventListener('mouseout', function() {
  for(i=0;i<16;i++){
    tweens[keys[i]].reverse();
  }
});