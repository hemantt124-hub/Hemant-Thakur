import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface Hero3DCanvasProps {
  className?: string;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Detect Software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // 2. Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070709, 0.05);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 3. Studio Environment Map via RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();

    // 4. Lighting Rig (Key Light + Cool Hemisphere Fill + Violet Rim Light)
    const ambientLight = new THREE.AmbientLight(0x1e1b4b, 0.8);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x8b5cf6, 0x070709, 1.2);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xa78bfa, 2.5);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x06b6d4, 3.0, 15);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // 5. Construct 3D Geometric Glass Prism & Structure
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Part A: Main Faceted Glass Prism (Icosahedron)
    const prismGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      emissive: 0x1e1b4b,
      roughness: 0.15,
      metalness: 0.2,
      transmission: isSoftwareGl ? 0 : 0.85,
      transparent: true,
      opacity: isSoftwareGl ? 0.65 : 0.95,
      ior: 1.52,
      thickness: 1.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const prismMesh = new THREE.Mesh(prismGeo, glassMat);
    rootGroup.add(prismMesh);

    // Part B: Inner Wireframe Core with Indigo glow
    const innerWireGeo = new THREE.OctahedronGeometry(1.0, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc4b5fd,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(innerWireGeo, wireMat);
    rootGroup.add(wireMesh);

    // Part C: Outer Orbital Luminous Rings
    const ringGeo = new THREE.TorusGeometry(2.35, 0.018, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.6,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat1);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeo, ringMat2);
    ring2.rotation.x = -Math.PI / 2.8;
    ring2.rotation.z = Math.PI / 4;
    ring2.scale.set(1.15, 1.15, 1.15);
    rootGroup.add(ring2);

    // Part D: Orbiting Data Nodes
    const nodeCount = 14;
    const nodeGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xe0e7ff,
      emissive: 0x8b5cf6,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.5,
    });

    const nodesData: { mesh: THREE.Mesh; angle: number; speed: number; radius: number; yOffset: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.1 + (i % 3) * 0.35;
      const yOffset = ((i % 5) - 2) * 0.4;
      mesh.position.set(Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius);
      nodeGroup.add(mesh);
      nodesData.push({
        mesh,
        angle,
        speed: 0.35 + (i % 4) * 0.15,
        radius,
        yOffset,
      });
    }
    rootGroup.add(nodeGroup);

    // Part E: Grounding Soft Radial Shadow
    const shadowGeo = new THREE.PlaneGeometry(5, 5);
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 60);
      grad.addColorStop(0, 'rgba(139, 92, 246, 0.45)');
      grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.15)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(canvas);
    shadowTex.colorSpace = THREE.SRGBColorSpace;
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -2.3;
    rootGroup.add(shadowMesh);

    // 6. Interaction & Mouse Cursor Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.75;
      mouse.targetY = y * 0.55;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        mouse.targetX = x * 0.5;
        mouse.targetY = y * 0.35;
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 7. Responsive Resizing
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 8. Animation & Damping Loop with Visibility Caching
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(container);

    let animationFrameId = 0;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Smooth cursor damping
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate prism
      prismMesh.rotation.y = elapsedTime * 0.35 + mouse.x * 0.8;
      prismMesh.rotation.x = elapsedTime * 0.15 + mouse.y * 0.6;

      // Counter-rotate inner wire core
      wireMesh.rotation.y = -elapsedTime * 0.5;
      wireMesh.rotation.z = elapsedTime * 0.25;

      // Animate orbital rings
      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.y = -elapsedTime * 0.25;

      // Animate orbiting data nodes
      for (let i = 0; i < nodesData.length; i++) {
        const node = nodesData[i];
        const currentAngle = node.angle + elapsedTime * node.speed;
        node.mesh.position.x = Math.cos(currentAngle) * node.radius;
        node.mesh.position.z = Math.sin(currentAngle) * node.radius;
        node.mesh.position.y = node.yOffset + Math.sin(elapsedTime * 2 + i) * 0.15;
      }

      // Root group gentle floating bob and orientation
      rootGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;
      rootGroup.rotation.y = mouse.x * 0.35;
      rootGroup.rotation.x = -mouse.y * 0.25;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js objects
      prismGeo.dispose();
      glassMat.dispose();
      innerWireGeo.dispose();
      wireMat.dispose();
      ringGeo.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      shadowGeo.dispose();
      shadowTex.dispose();
      shadowMat.dispose();
      envTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[380px] sm:h-[450px] lg:h-[520px] pointer-events-auto touch-none select-none ${className}`}
      aria-label="Interactive 3D Geometric Prism representing digital technology and modern web engineering"
    />
  );
};
