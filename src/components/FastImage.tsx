import { useState, useRef, useEffect } from 'react';

interface FastImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  timeout?: number; // Custom timeout in ms
}

const FastImage = ({
  src,
  alt,
  className = '',
  style,
  placeholder,
  priority = false,
  onLoad,
  onError,
  timeout = 3000, // 3 second default timeout
}: FastImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
    };
  }, []);

  const handleLoad = () => {
    if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);

    if (
      retryCount < 1 &&
      !src.includes('subhanustaging.com') &&
      !src.includes('i0.wp.com')
    ) {
      setRetryCount((prev) => prev + 1);
      timeoutRef.current = setTimeout(() => {
        setHasError(false);
        setIsLoaded(false);
      }, 200);
    } else {
      setHasError(true);
      onError?.();
    }
  };

  const handleImageLoad = () => {
    if (loadTimeoutRef.current) clearTimeout(loadTimeoutRef.current);

    loadTimeoutRef.current = setTimeout(() => {
      if (!isLoaded) {
        setHasError(true);
        onError?.();
      }
    }, timeout);

    handleLoad();
  };

  const defaultPlaceholder =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyN0MyMy4zMTM3IDI3IDI2IDI0LjMxMzcgMjYgMjFDMjYgMTcuNjg2MyAyMy4zMTM3IDE1IDIwIDE1QzE2LjY4NjMgMTUgMTQgMTcuNjg2MyAxNCAyMUMxNCAyNC4zMTM3IDE2LjY4NjMgMjcgMjAgMjdaIiBmaWxsPSIjOUI5QkE0Ii8+CjxwYXRoIGQ9Ik0zMiAxMkg4QzYuODk1NDMgMTIgNiAxMi44OTU0IDYgMTRWMzJDNiAzMy4xMDQ2IDYuODk1NDMgMzQgOCAzNEgzMkMzMy4xMDQ2IDM0IDM0IDMzLjEwNDYgMzQgMzJWMTRDMzQgMTIuODk1NCAzMy4xMDQ2IDEyIDMyIDEyWiIgc3Ryb2tlPSIjOUI5QkE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+';

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={style}>
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
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          style={{ width: '100%', height: '100%' }} // ✅ Updated line
        />
      )}
    </div>
  );
};

export default FastImage;
