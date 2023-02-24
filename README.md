# Portfolio

*In progress.* Deployed at [portfolio link](https://main.d2gdwsemshwdm6.amplifyapp.com/).

## Stack

- React with Typescript, using Vite. 
- Models built by me in blender, rendered with React Three Fiber/Drei and three.js. 
- Background shader made with GLSL. 
- animation with Framer Motion

## Foreground Model and Interaction

The foreground model consumes a scroll event from the Drei useScroll helper, and updates its rotation based on the scroll offset. The content animates when in (scroll) view to appear on screen. 

## GLSL Shaders with React Three Fiber

While the general flowing mountain range/wave effect is acheieved with Perlin noise, I used pointer events to track the mouse coordinates, and took the Euclidean distance between the mouse position and the position of the shader vertices in order to render both a color effect and a displacement effect around the mouse. 

The shaders are also taking in scroll events to make color and displacement changes, which are being listened to with a useContext hook paired with drei's useScroll hook. 

Note: I gave up on this particular shader as it was too distracting, and configured a different particle shader that still listens to the scroll, but doesn't respond to user input. 

## To-Do

- interaction with models
- add models for the other sections
- model animations when in view
- settings