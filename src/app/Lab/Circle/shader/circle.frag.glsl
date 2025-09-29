precision highp float;

uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;
 
 float Circle(vec2 uv, vec2 center, float radius) {
    float dist = distance(uv, center);
    float edge = 0.0001;
     return smoothstep(radius, radius - edge, dist);
 } 

 float Square(vec2 uv, vec2 center, float size) {
    vec2 dist = abs(uv - center);
    float edge = 0.001;
    float insideX = 1.0 - smoothstep(size, size + edge, dist.x);
    float insideY = 1.0 - smoothstep(size, size + edge, dist.y);
    return insideX * insideY;
 }


void main() {
vec2 uv = vUv;
uv = uv * 2.0 - 1.0; // Normalize -1 to 1
    
    float move = sin(uTime * 1.0) * 0.85;
    vec2 shift = vec2(move, 0.0);
    vec2 shifted = uv - shift;

   float a = uTime;
   mat2 rot = mat2( cos(a), -sin(a),
                    sin(a), cos(a));
   vec2 uvRotated = rot * shifted;

 //Circle .............
 float radius = 0.12;
 float circle = Circle(uvRotated, vec2(0.0, 0.0), radius);
 //Square...........
 float size = 0.05;
 float square = Square(uvRotated, vec2(0.0, 0.0), size);

 float shape = (circle - square);

 vec3 col = vec3(uv.x, uv.y, 1.0) * shape;

gl_FragColor = vec4(col, 1.0);
}