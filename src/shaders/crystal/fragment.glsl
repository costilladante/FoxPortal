#include ../perlin_shader.glsl;

varying vec2 vUv;
uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;
uniform float uOpacity;

void main(){
	float speedFactor = 0.1;
	float sizeFactor = 5.0;
	float strengthFactor = 5.0;

	// Displace the UV
	vec2 displacedUv = vUv + cnoise(vec3(vUv * sizeFactor, uTime * speedFactor));

	// Perlin noise
	float strength = cnoise(vec3(displacedUv * strengthFactor, uTime * 0.2));

	// Outer Glow
	float outerGlow = distance(vUv, vec2(0.5)) * 5.0 - 1.4;
	strength += outerGlow;

	// Add Step
	strength += step(-0.2, strength) * 0.5;

	// Clamp value from 0 to 1
	strength = clamp(strength, 0.0, 1.0);

	// Final color
	vec3 color = mix(uColorStart, uColorEnd, strength);

	gl_FragColor = vec4(color, uOpacity);	
	
	#include <colorspace_fragment>
}