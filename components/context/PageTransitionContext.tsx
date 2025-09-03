'use client';

import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimateOverlay from '@/components/AnimateOverlay';
import { usePathname } from 'next/navigation';

type PageTransitionContextType = {
  startTransition: (href: string) => void;
  showOverlay: boolean;
  nexthref: string;
  isPopState: boolean;
};

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [isPopState, setIsPopState] = useState(false);
  const [nexthref, setNextHref] = useState("");
  const [showOverlay, setShowOverlay] = useState(false); 

  const isExiting = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startTransition = (href: string) => {
    if (pathname === href || isExiting.current) return;

    isExiting.current = true;
    setIsPopState(false);
    setNextHref(href);
    setShowOverlay(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      router.push(href);
      setShowOverlay(false);
      timeoutRef.current = null;
    }, 1000);
  };

  useEffect(() => {
    const handlePopState = () => {
      if(isExiting.current) return;
      const newPath = window.location.pathname;

      isExiting.current = false; 

      setShowOverlay(true);
      setNextHref(newPath);
      setIsPopState(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setShowOverlay(false);
        timeoutRef.current = null;
        isExiting.current = true;
      }, 1000);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <PageTransitionContext.Provider
      value={{
        startTransition,
        showOverlay,
        nexthref,
        isPopState,
      }}
    >
      {children}
      <AnimateOverlay
        showOverlay={showOverlay}
        pathname={nexthref}
        onExitComplete={() => {
          isExiting.current = false;
        }}
      />
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) throw new Error('usePageTransition must be used inside PageTransitionProvider');
  return context;
};