varying vec3 vNormal;
varying vec3 vPosition;

void main() {
     vec3 normal = normalize(vNormal);

     vec3 lightDir = normalize(vec3(0.5, 1.0, 0.8));

     float lightIntensity = dot(normal, lightDir);
    lightIntensity = clamp(lightIntensity, 0.0, 1.0);

     vec3 baseColor = vec3(0.1, 0.3, 0.6);       
    vec3 highlightColor = vec3(0.8, 0.9, 1.0); 

     vec3 color = mix(baseColor, highlightColor, pow(lightIntensity, 1.5));

     float curvature = length(vPosition) * 0.2;
    color += vec3(0.05, 0.02, 0.1) * curvature;

    gl_FragColor = vec4(color, 1.0);
}