precision mediump float;
varying float vAlpha;
varying vec3 vColor;

void main() {
 vec2 coord = gl_PointCoord - vec2(0.5);
float dist = length(coord);
float mask = smoothstep(0.5, 0.0, dist);
 float core = pow(mask, 1.6);
vec3 col = vColor * (0.6 + 0.6 * core);

gl_FragColor = vec4(col, core * vAlpha);
}