uniform float uTime;
uniform vec2 uResolution;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;

    vec3 color = vec3(0.0);    

    float stars = fract(sin(dot(uv * 1500.0, vec2(12.9898, 78.233))) * 43758.5453);

    float twinkle = smoothstep(0.995, 1.0, stars);
    color += twinkle * 0.6 * (0.5 + 0.5 * sin(uTime * 1.5 + uv.x * 2.0));    

    gl_FragColor = vec4(color, 1.0);
}
