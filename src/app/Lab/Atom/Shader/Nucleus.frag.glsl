uniform float uTime;
    uniform vec3 uColor;
    uniform float uPulse;
    varying vec3 vNormal;
    varying vec3 vPos;

    float hash(vec2 p) {
      return fract(sin(dot(p ,vec2(127.1,311.7))) * 43758.5453123);
    }

    float noise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) +
             (c - a)* u.y * (1.0 - u.x) +
             (d - b) * u.x * u.y;
    }

    void main() {
      float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 3.0);
      float dist = length(vPos) * 0.9;
      float core = smoothstep(0.8, 0.0, dist);

      float n = noise(vPos.xy * 3.0 + uTime * 0.6);
      vec3 base = uColor * (0.6 + 0.6 * core * uPulse);
      vec3 glow = vec3(0.9, 0.4, 1.0) * fresnel * 1.6;

      vec3 color = base + glow * (0.5 + 0.5 * n);
      gl_FragColor = vec4(color, 1.0);
    }