import React, { Component } from 'react'
import Sketch from 'react-p5'
const canvasSize = require('../setup.json')
export default class Eye extends Component {
    render() {
        var leftCx,leftCy,rightCx,rightCy,Radius;
        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(canvasSize.canvasWidth, canvasSize.canvasHeight).parent(canvasParentRef);
            leftCx=canvasSize.canvasWidth/4;
            leftCy=canvasSize.canvasHeight/2;
            rightCx=(3*canvasSize.canvasWidth)/4;
            rightCy=leftCy;
            Radius=canvasSize.canvasWidth/2;

        }
        
        const draw = (p5) => {
            p5.background(p5.color(100, 100, 225));
            p5.stroke(0)
            p5.circle(leftCx, leftCy, Radius)
            p5.circle(rightCx, rightCy, Radius)
            var distance=p5.dist(p5.mouseX,p5.mouseY,leftCx,leftCy)
            var angle1 = Math.atan2(p5.mouseY, p5.mouseX);
            var x = Math.cos(angle1) * (Radius/2);
            var y = Math.sin(angle1) * (Radius/2);
            var Cx=p5.map(p5.mouseX,0,canvasSize.canvasWidth,x-(Radius/2),x+(Radius/2),true);
            //var Cy=p5.map(p5.mouseY,0,canvasSize.canvasHeight,y-Radius/2+50,y+Radius/2-50,true);
            p5.circle(Cx, leftCy, 40)
            // if(distance<(Radius/2)){
            //     p5.circle(p5.mouseX, p5.mouseY, 100)
            // }else{
            //    
            //     //console.log(angle1)
            //     var x = Math.cos(angle1) * (Radius/2);
            //     var y = Math.sin(angle1) * (Radius/2);
            //     var Cx,Cy;
            //     if(p5.mouseX>leftCx)
            //         Cx=leftCx+x
            //     else
            //         Cx=leftCx-x

            //     if(p5.mouseY>leftCx)
            //         Cy=leftCy-y
            //     else
            //         Cy=leftCy+y

            //     p5.circle(Cx, Cy, 100)
            // }
            
            //p5.circle(lx, y, 10)
            //p5.circle(rx, 200, 10)
        }
        return <Sketch setup={setup} draw={draw} />;
    }
}