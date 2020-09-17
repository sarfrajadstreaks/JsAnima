import React from 'react';
import Sketch from 'react-p5'
class PI_Chart extends React.Component{
  render(){
    const setup = (p5, canvasParentRef) => {
        console.log(canvasParentRef)
        p5.createCanvas(200,200).parent(canvasParentRef);
    };
    const draw = (p5) => {
      p5.clear();
      p5.background('rgba(0,255,0, 0.05)');
        pieChart(p5,200,[30, 10, 45, 35, 60, 38, 75, 67])
    };
    const pieChart =(p5,diameter, data)=> {
      let lastAngle = 0;
      for (let i = 0; i < data.length; i++) {
        let gray = p5.map(i, 0, data.length, 0, 255);
        p5.fill(gray);
        p5.arc(
          p5.width / 2,
          p5.height / 2,
          diameter,
          diameter,
          lastAngle,
          lastAngle + p5.radians(data[i])
        );
        lastAngle += p5.radians(data[i]);
      }
    };
  
   return <Sketch setup={setup} draw={draw} />;
  }
}export default PI_Chart