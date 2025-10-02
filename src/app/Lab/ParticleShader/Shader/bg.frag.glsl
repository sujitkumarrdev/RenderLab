uniform float uTime;
uniform vec2 uResolution;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;

     vec3 color = mix(vec3(0.03, 0.03, 0.05), vec3(0.08, 0.05, 0.1), uv.y + 0.5);

     float stars = fract(sin(dot(uv * 1000.0, vec2(12.9898,78.233))) * 43758.5453);
    float twinkle = smoothstep(0.98, 1.0, stars);
    color += twinkle * 0.2 * sin(uTime * 0.5);

    gl_FragColor = vec4(color, 1.0);
}
