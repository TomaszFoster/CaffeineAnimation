
      var stage = new Kinetic.Stage({
        container: 'container',
        width: 200,
        height: 200
      });
      var layer = new Kinetic.Layer({
        y: -30 
      });
      
      var stick1 = new Kinetic.Spline({
        points: [50, 130, 50, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick2 = new Kinetic.Spline({
        points: [55, 130, 55, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
       var stick3 = new Kinetic.Spline({
        points: [60, 130, 60, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick4 = new Kinetic.Spline({
        points: [65, 130, 65, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
       var stick5 = new Kinetic.Spline({
        points: [70, 130, 70, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick6 = new Kinetic.Spline({
        points: [75, 130, 75, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick7 = new Kinetic.Spline({
        points: [80, 130, 80, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick8 = new Kinetic.Spline({
        points: [85, 130, 85, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick9 = new Kinetic.Spline({
        points: [90, 130, 90, 90],
        tension: 0.5,
        opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick10 = new Kinetic.Spline({
        points: [95, 130, 95, 90],
        tension: 0.5,opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick11 = new Kinetic.Spline({
        points: [100, 130, 100, 90],
        tension: 0.5,opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick12 = new Kinetic.Spline({
        points: [105, 130, 105, 90],
        tension: 0.5,opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick13 = new Kinetic.Spline({
        points: [110, 130, 110, 90],
        tension: 0.5,opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick14 = new Kinetic.Spline({
        points: [115, 130, 115, 90],
        tension: 0.5,opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });
      var stick15 = new Kinetic.Spline({
        points: [120, 130, 120, 90],
        tension: 0.5, opacity: 0.6,
        stroke: '#444',
        strokeWidth: 5,
        lineCap: 'round'
      });

      layer.add(stick1)
        .add(stick2)
        .add(stick3)
        .add(stick4)
        .add(stick5)
        .add(stick6)
        .add(stick7)
        .add(stick8)
        .add(stick9)
        .add(stick10)
        .add(stick11)
        .add(stick12)
        .add(stick13)
        .add(stick14)
        .add(stick15);

      stage.add(layer);
      
      // hexagon
      var h1 = 34.4;
      var h2 = 20;

      var stick1Tween = new Kinetic.Tween({
        node: stick1,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50, 260, 50, 220]
      });
      var stick2Tween = new Kinetic.Tween({
        node: stick2,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50, 220, 50+h1, 220-h2],
      });  
      var stick3Tween = new Kinetic.Tween({
        node: stick3,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50+h1, 220-h2, 50+(2*h1), 220]
      });
      var stick4Tween = new Kinetic.Tween({
        node: stick4,
        opacity: 1,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        points: [50+(2*h1), 220, 50+(2*h1), 260]
      }); 
       var stick5Tween = new Kinetic.Tween({
        node: stick5,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50+(2*h1), 260, 50+h1, 260+h2]
      });
      var stick6Tween = new Kinetic.Tween({
        node: stick6,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50+h1, 260+h2, 50, 260]
      });

      //hexagon bonds
      var stick7Tween = new Kinetic.Tween({
        node: stick7,opacity: 0.6,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        points: [50, 220, 50-h1, 220-h2]
      });
      var stick8Tween = new Kinetic.Tween({
        node: stick8,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50+h1, 220-h2, 50+h1, 180-h2]
      });
      var stick9Tween = new Kinetic.Tween({
        node: stick9,opacity: 1,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        points: [50, 260, 50-h1, 260+h2]
      });
      var stick10Tween = new Kinetic.Tween({
        node: stick10,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50+h1, 260+h2, 50+h1, 300+h2]
      });

      //pentagon
      var p1 = 12.3;
      var p2 = 38;
      var p3 = 23.5;
      var p4 = 32.4;
      var stick11Tween = new Kinetic.Tween({
        node: stick11,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50+(2*h1), 260, 50+(2*h1)+p2, 260+p1]
      });
      var stick12Tween = new Kinetic.Tween({
        node: stick12,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        opacity: 0.6,
        points: [50+(2*h1), 220, 50+(2*h1)+p2, 220-p1]
      });
      var stick13Tween = new Kinetic.Tween({
        node: stick13,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        opacity: 0.6,
        y: -100,
        points: [50+(2*h1)+p2, 220-p1, 50+(2*h1)+p2+p3, 240]
      });
      var stick14Tween = new Kinetic.Tween({
        node: stick14,opacity: 1,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        
        y: -100,
        points: [50+(2*h1)+p2+p3, 240, 50+(2*h1)+p2, 260+p1]
      });

      //pentagon bond
      var stick15Tween = new Kinetic.Tween({
        node: stick15,opacity: 1,
        duration: 1,
        easing: Kinetic.Easings.EaseOut,
        y: -100,
        points: [50+(2*h1)+p2, 220-p1, 50+(2*h1)+p2+p1, 220-p2-p1]
      });

      //change the color of the double bonds to be darker
      var stickArray = [
        stick1Tween,
        stick2Tween,
        stick3Tween,
        stick4Tween,
        stick5Tween,
        stick6Tween,
        stick7Tween,
        stick8Tween,
        stick9Tween,
        stick10Tween,
        stick11Tween,
        stick12Tween,
        stick13Tween,
        stick14Tween,
        stick15Tween
        ];
      
      //stickArray[0].play();

      stage.getContainer().addEventListener('mouseover', function() {
        
        for(i=0;i<15;i++){
          stickArray[i].play();
        }

      });
      
      stage.getContainer().addEventListener('mouseout', function() {
        
        for(i=0;i<15;i++){
          stickArray[i].reverse();
        }

      });