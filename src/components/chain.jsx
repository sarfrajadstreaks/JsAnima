import React, { Component } from 'react'
import Sketch from 'react-p5'
const canvasSize=require('../setup.json')
export default class Chain extends Component {
    render() {

        let s1, s2;
        let gravity = 9.0;
        let mass = 2.0;
        
        const setup = (p5, canvasParentRef) => {
            p5.createCanvas(canvasSize.canvasWidth, canvasSize.canvasHeight).parent(canvasParentRef);
            p5.fill(255, 126);
          // Inputs: x, y, mass, gravity
          s1 = new Spring2D(0.0, p5.width / 2, mass, gravity);
          s2 = new Spring2D(0.0, p5.width / 2, mass, gravity);
        }
        
        const draw=(p5)=> {
            p5.background(0);
          s1.update(p5.mouseX, p5.mouseY);
          s1.display(p5,p5.mouseX, p5.mouseY);
          s2.update(s1.x, s1.y);
          s2.display(p5,s1.x, s1.y);
        }
        
        function Spring2D(xpos, ypos, m, g) {
          this.x = xpos;// The x- and y-coordinates
          this.y = ypos;
          this.vx = 0; // The x- and y-axis velocities
          this.vy = 0;
          this.mass = m;
          this.gravity = g;
          this.radius = 30;
          this.stiffness = 0.2;
          this.damping = 0.7;
        
          this.update = function(targetX, targetY) {
            let forceX = (targetX - this.x) * this.stiffness;
            let ax = forceX / this.mass;
            this.vx = this.damping * (this.vx + ax);
            this.x += this.vx;
            let forceY = (targetY - this.y) * this.stiffness;
            forceY += this.gravity;
            let ay = forceY / this.mass;
            this.vy = this.damping * (this.vy + ay);
            this.y += this.vy;
          }
        
          this.display = function(p5,nx, ny) {
            //p5.noStroke();
            p5.ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
            p5.stroke(255);
            p5.line(this.x, this.y, nx, ny);
          }
        }
        return <Sketch setup={setup} draw={draw} />;
     }
}