uniform float uTime;
uniform float uNoiseStrength;
uniform float uSpeed;

varying vec3 vNormal;
varying vec3 vPosition;

#pragma glslify: snoise3 = require('glsl-noise/simplex/3d')

void main() {
    vNormal = normal;
    vPosition = position;

    float displacement = uNoiseStrength * snoise3(position + vec3(uTime * uSpeed));
    vec3 newPosition = position + normal * displacement;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}