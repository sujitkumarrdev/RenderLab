varying float vAlpha;
varying vec3 vColor;

void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    float fade = smoothstep(0.5, 0.0, dist);
    fade = pow(fade, 1.5);

    gl_FragColor = vec4(vColor, fade * vAlpha);
}
