import React from 'react';

export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = React.useState<string>();
  const observer = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    const elements = selectors.map((selector) =>
      document.getElementById(selector)
    );
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
}
