import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

const ImagePreloader = ({ images, priority = false }: ImagePreloaderProps) => {
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
          img.src = src;
          
          // Add crossorigin attribute for external images to enable caching
          if (src.includes('subhanustaging.com') || src.includes('i0.wp.com')) {
            img.crossOrigin = 'anonymous';
          }
        });
      });

      try {
        if (priority) {
          // For priority images, load them sequentially to avoid overwhelming the browser
          for (const promise of imagePromises) {
            await promise;
          }
        } else {
          // For non-priority images, load them in parallel
          await Promise.allSettled(imagePromises);
        }
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };

    preloadImages();
  }, [images, priority]);

  return null; // This component doesn't render anything
};

export default ImagePreloader;