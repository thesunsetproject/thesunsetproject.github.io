// casey conchinha - @kcconch ( https://github.com/kcconch )
// louise lessel - @louiselessel ( https://github.com/louiselessel )
// more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/
// this is a modification of a shader by adam ferriss
// https://github.com/aferriss/p5jsShaderExamples/tree/gh-pages/2_texture-coordinates/2-1_basic

precision mediump float;

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;

uniform vec3 color1;

uniform vec3 color2;

void main() {
  

  vec2 coord = vTexCoord;
  
  
  float blueMix = (coord.x + coord.y) /2.0;
  gl_FragColor = vec4(mix(color1.r, color2.r, coord.y), mix(color1.g, color2.g, coord.y), mix(color1.b, color2.b, coord.y), 1.0 );
}