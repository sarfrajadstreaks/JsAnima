import React, { Component } from 'react'
import Sketch from 'react-p5'
const canvasSize = require('../setup.json')
export default class Terrain extends Component {
    render() {
        var w = canvasSize.canvasWidth+1200;
        var h = canvasSize.canvasHeight+800;
        w+=100;
        h+=100;
        var cols, rows
        var scl = 20;
        cols = h / scl;
        rows = w / scl;
        console.log(rows);
        var terrain = new Array(rows);

        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(canvasSize.canvasWidth, canvasSize.canvasHeight, p5.WEBGL).parent(canvasParentRef);
            

        }
        var flying=0;
        const draw = (p5) => {
            flying-=0.01;
            var yoff=flying;
            for (var y = 0; y < rows; y++) {
                var tempArry = new Array(cols)
                var xoff=0;
                for (var x = 0; x < cols; x++) {
                    tempArry[x] = p5.map(p5.noise(xoff,yoff),0,1,-150,100)
                    xoff+=0.1;
                }
                yoff+=0.1;
                terrain[y] = tempArry;
            }
            p5.background(p5.color(100, 100, 225));
            p5.stroke(100, 100, 200);
            p5.noFill(255);
            p5.translate(p5.width / 3, p5.height / 3);
            p5.rotateX(p5.PI / 2);
            //p5.frameRate(2);
            p5.translate(-w/2, -h/1.2 );
            for (var y = 0; y < rows; y++) {
                p5.beginShape(p5.TRIANGLE_STRIP);
                for (var x = 0; x < cols-1; x++) {
                    p5.vertex(y * scl, x * scl, terrain[x][y])
                    //console.log(terrain[x][y])\, 225)
                    p5.fill(p5.color(200-Math.abs(Math.abs(terrain[x][y])-1), 255,200-Math.abs(Math.abs(terrain[x][y])-1)));
                    p5.vertex((y+1) * scl, x * scl, terrain[x][y + 1])
                }
                p5.endShape();

            }
        }
        return <Sketch setup={setup} draw={draw} />;
    }
}
