import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style, 
  placeholder,
  priority = false,
  onLoad,
  onError 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (priority) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      { 
        rootMargin: '100px', // Increased for earlier loading
        threshold: 0.05 // Reduced threshold for earlier trigger
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    // Retry loading up to 2 times for external images with shorter timeout for faster loading
    if (retryCount < 2 && (src.includes('subhanustaging.com') || src.includes('i0.wp.com'))) {
      setRetryCount(prev => prev + 1);
      // Shorter wait time before retrying for faster loading
      timeoutRef.current = setTimeout(() => {
        setHasError(false);
        setIsLoaded(false);
      }, 500 * (retryCount + 1)); // Faster retry delay
    } else {
      setHasError(true);
      onError?.();
    }
  };

  const defaultPlaceholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyN0MyMy4zMTM3IDI3IDI2IDI0LjMxMzcgMjYgMjFDMjYgMTcuNjg2MyAyMy4zMTM3IDE1IDIwIDE1QzE2LjY4NjMgMTUgMTQgMTcuNjg2MyAxNCAyMUMxNCAyNC4zMTM3IDE2LjY4NjMgMjcgMjAgMjdaIiBmaWxsPSIjOUI5QkE0Ii8+CjxwYXRoIGQ9Ik0zMiAxMkg4QzYuODk1NDMgMTIgNiAxMi44OTU0IDYgMTRWMzJDNiAzMy4xMDQ2IDYuODk1NDMgMzQgOCAzNEgzMkMzMy4xMDQ2IDM0IDM0IDMzLjEwNDYgMzQgMzJWMTRDMzQgMTIuODk1NCAzMy4xMDQ2IDEyIDMyIDEyWiIgc3Ryb2tlPSIjOUI5QkE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+";

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          {placeholder ? (
            <img 
              src={placeholder} 
              alt="" 
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <img 
              src={defaultPlaceholder}
              alt=""
              className="w-10 h-10 opacity-30"
            />
          )}
        </div>
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-muted-foreground text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}
      
      {/* Main image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          // Add timeout for faster fallback and crossorigin for external images
          style={{ maxWidth: '100%', height: 'auto' }}
          crossOrigin={src.includes('subhanustaging.com') || src.includes('i0.wp.com') ? 'anonymous' : undefined}
        />
      )}
    </div>
  );
};

export default OptimizedImage;