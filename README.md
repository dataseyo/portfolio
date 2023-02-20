# Portfolio

## Stack

- React with Typescript, using Vite. 
- Models built by me in blender, rendered with React Three Fiber/Drei and three.js. 
- Background shader made with GLSL. 

## GLSL Shaders with React Three Fiber

While the general flowing mountain range/wave effect is acheieved with Perlin noise, I used pointer events to track the mouse coordinates, and took the Euclidean distance between the mouse position and the position of the shader vertices in order to render both a color effect and a displacement effect around the mouse. 

The shaders are also taking in scroll events to make color and displacement changes, which are being listened to with a useContext hook paired with drei's useScroll hook. 

## Foreground Model and Interaction

The foreground model consumes a scroll event from the Drei useScroll helper, and updates its rotation based on the scroll offset. 