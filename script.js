import './styles/style.css';
import * as THREE from 'three';
import Lenis from '@studio-freight/lenis';

// Lenis
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Sizes
const sizes = {
   width: window.innerWidth,
   height: window.innerHeight
};

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
});

const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

// Background Plane
const bgTexture = new THREE.TextureLoader().load("https://uploads-ssl.webflow.com/64d4fc73bb48a88a419a559f/64ecee6848fd4d51a3c85b00_texture.jpg", undefined, undefined, onError);

function onError(error) {
    console.error("Error loading texture:", error);
}
const bgGeometry = new THREE.PlaneGeometry(5, 5);
const bgMaterial = new THREE.MeshBasicMaterial({ map: bgTexture });
const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
bgMesh.position.set(0, 0, -1);
scene.add(bgMesh);

// Geometry
const geometry = new THREE.IcosahedronGeometry(1, 0); // IcosahedronGeometry with radius 1 and detail 0
const material = new THREE.MeshPhysicalMaterial({
  roughness: 0.15,
  transmission: 1, // Add transparency
  thickness: 0.5, // Add refraction!
  envMap: scene.background, // Use the background as the environment map
}); // MeshPhysicalMaterial with roughness 0, transparency, and thickness
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

mesh.rotation.y = lenis.progress * 20;

lenis.on('scroll', (e) => {
  mesh.rotation.y = lenis.progress * 20;
});

// Light
const light = new THREE.DirectionalLight(0xfff0dd, 1);
light.position.set(0, 5, 10);
scene.add(light);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    clearColor: new THREE.Color(0, 0, 0, 0) // Transparent clear color
});

renderer.setSize(sizes.width, sizes.height);

// Animate
function animate() {
    mesh.rotation.x += 0.01; // Rotate the object around the X-axis
    mesh.rotation.y += 0.01; // Rotate the object around the Y-axis

    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

animate();
