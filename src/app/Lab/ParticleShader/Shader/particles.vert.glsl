uniform float uTime;
uniform float uSize;
uniform float uSpeed;
uniform float uMorphFactor;

attribute vec3 basePosition;
varying float vAlpha;
varying vec3 vColor;

void main() {
    vec3 sphere = normalize(basePosition);

    float spike = 1.0 + sin(basePosition.x * 10.0 + uTime * uSpeed) * 0.3;
    spike += cos(basePosition.y * 12.0 + uTime * uSpeed * 1.3) * 0.2;

    vec3 star = normalize(basePosition) * spike;
    vec3 animated = mix(sphere, star, uMorphFactor);

    animated.y += sin(uTime * uSpeed + basePosition.x * 5.0) * 0.2;
    animated.x += cos(uTime * uSpeed + basePosition.y * 5.0) * 0.2;
    animated.z += sin(uTime * uSpeed * 0.7 + basePosition.z * 5.0) * 0.2;

    vColor = vec3(0.9, 0.8, 0.2) + 0.2 * sphere;
    vAlpha = 0.4 + 0.6 * sin(uTime + length(basePosition) * 10.0);

    vec4 mvPosition = modelViewMatrix * vec4(animated, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * (1.0 / -mvPosition.z);
}
