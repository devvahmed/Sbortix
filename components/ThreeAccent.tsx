'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeAccent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    
    // Clear existing children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const indigoColor = 0x3730a3;
    const nodeGeom = new THREE.SphereGeometry(0.08, 12, 12);
    const nodeMat = new THREE.MeshPhongMaterial({ color: indigoColor, emissive: 0x111111 });
    const lineMat = new THREE.LineBasicMaterial({ color: indigoColor, transparent: true, opacity: 0.3 });

    const nodes: (THREE.Mesh & { velocity: THREE.Vector3 })[] = [];
    const nodeCount = 14;
    for (let i = 0; i < nodeCount; i++) {
      const node = (new THREE.Mesh(nodeGeom, nodeMat) as unknown) as THREE.Mesh & { velocity: THREE.Vector3 };
      node.position.set(
        (Math.random() - 0.5) * 2.5,
        (Math.random() - 0.5) * 2.5,
        (Math.random() - 0.5) * 2.5
      );
      node.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005
      );
      group.add(node);
      nodes.push(node);
    }

    const linesGeom = new THREE.BufferGeometry();
    const line = new THREE.LineSegments(linesGeom, lineMat);
    group.add(line);

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) / 500;
      mouseY = (e.clientY - window.innerHeight / 2) / 500;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      nodes.forEach((node) => {
        node.position.add(node.velocity);
        if (Math.abs(node.position.x) > 1.5) node.velocity.x *= -1;
        if (Math.abs(node.position.y) > 1.5) node.velocity.y *= -1;
        if (Math.abs(node.position.z) > 1.5) node.velocity.z *= -1;
      });

      const positions: number[] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = nodes[i].position.distanceTo(nodes[j].position);
          if (dist < 1.8) {
            positions.push(nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
            positions.push(nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
          }
        }
      }
      linesGeom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      linesGeom.attributes.position.needsUpdate = true;

      group.rotation.y += 0.002;
      group.rotation.x += (mouseY - group.rotation.x) * 0.05;
      group.rotation.y += (mouseX - group.rotation.y) * 0.05;

      renderer.render(scene, camera);
    }

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 300;
      const h = container.clientHeight || 300;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[250px]" />;
}
