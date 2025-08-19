import { useState, useEffect } from 'react';

interface ImageCacheEntry {
  url: string;
  blob: Blob;
  timestamp: number;
}

class ImageCache {
  private cache = new Map<string, ImageCacheEntry>();
  private maxSize = 50; // Maximum number of cached images
  private maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  async get(url: string): Promise<string | null> {
    const entry = this.cache.get(url);
    
    if (!entry) return null;
    
    // Check if entry is expired
    if (Date.now() - entry.timestamp > this.maxAge) {
      this.cache.delete(url);
      URL.revokeObjectURL(url);
      return null;
    }
    
    return URL.createObjectURL(entry.blob);
  }

  async set(url: string, blob: Blob): Promise<void> {
    // Remove oldest entries if cache is full
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      const oldEntry = this.cache.get(oldestKey);
      if (oldEntry) {
        URL.revokeObjectURL(url);
        this.cache.delete(oldestKey);
      }
    }

    this.cache.set(url, {
      url,
      blob,
      timestamp: Date.now()
    });
  }

  clear(): void {
    this.cache.forEach((entry) => {
      URL.revokeObjectURL(entry.url);
    });
    this.cache.clear();
  }
}

const imageCache = new ImageCache();

export const useImageCache = (imageUrl: string) => {
  const [cachedUrl, setCachedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadImage = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Try to get from cache first
        const cached = await imageCache.get(imageUrl);
        if (cached && mounted) {
          setCachedUrl(cached);
          setIsLoading(false);
          return;
        }

        // If not in cache, fetch the image
        const response = await fetch(imageUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${response.status}`);
        }

        const blob = await response.blob();
        
        if (mounted) {
          // Cache the blob
          await imageCache.set(imageUrl, blob);
          
          // Create object URL and set it
          const objectUrl = URL.createObjectURL(blob);
          setCachedUrl(objectUrl);
          setIsLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load image');
          setIsLoading(false);
          // Fallback to original URL
          setCachedUrl(imageUrl);
        }
      }
    };

    loadImage();

    return () => {
      mounted = false;
    };
  }, [imageUrl]);

  return { cachedUrl, isLoading, error };
};

export default useImageCache;