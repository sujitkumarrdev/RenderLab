precision mediump float;

uniform float uTime;
uniform float uSize;
uniform float uSpeed;
uniform float uGlobalRotation;

attribute vec3 basePosition;
attribute vec3 colorAttr;
varying vec3 vColor;
varying float vAlpha;

void main() {
    float r = length(basePosition);

    float angle = atan(basePosition.z, basePosition.x);
    float twist = r * 0.5;
    float finalAngle = angle + twist * 0.2 + uGlobalRotation;

    vec3 pos = vec3(cos(finalAngle), basePosition.y, sin(finalAngle)) * r;
    pos += 0.02 * sin(uTime * uSpeed + r * 10.0) * normalize(basePosition);
    pos.z += 0.06 * sin(uTime * uSpeed * 0.7 + r * 7.0);

    vColor = colorAttr;
    vAlpha = mix(1.0, 0.3, smoothstep(0.0, 3.0, r)) * (0.6 + 0.4 * sin(uTime * (0.5 + r)));

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * (1.0 / -mvPosition.z);
}