uniform float u_time;

varying vec2 vUv;
varying float fragDist;

void main() {
  vec3 color = vec3(0.34, 0.53, 0.96);
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 2.0);

  color = mix(color, vec3(0.97, 0.7, 0.15), fragDist * 0.5 * sin(u_time));
  color = mix(vec3(0.0), color, strength);
  gl_FragColor = vec4(color, strength);
}