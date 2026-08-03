'use client';

import { useEffect, useState } from 'react';

export default function SplineScene({ sceneUrl }: { sceneUrl: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load the spline viewer web component script
    const scriptId = 'spline-viewer-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js';
      script.type = 'module';
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="w-full h-full relative min-h-[400px] flex items-center justify-center">
      {isLoaded ? (
        // @ts-expect-error custom element
        <spline-viewer
          class="w-full h-full bg-transparent block min-h-[500px]"
          url={sceneUrl}
        />
      ) : (
        <div className="flex flex-col items-center justify-center space-y-md text-primary">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="tech-label text-xs">[LOADING_3D_VIEWER...]</span>
        </div>
      )}
      
      <div className="absolute bottom-4 right-6 bg-white/80 backdrop-blur-sm border hairline-border px-xs py-1 rounded flex items-center gap-xs z-20 pointer-events-none">
        <span className="material-symbols-outlined text-primary text-sm">3d_rotation</span>
        <span className="tech-label text-primary text-[9px]">Interactive 3D Node</span>
      </div>
    </div>
  );
}
