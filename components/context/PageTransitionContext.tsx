'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimateOverlay from '@/components/AnimateOverlay';
import { usePathname } from 'next/navigation';

type PageTransitionContextType = {
  startTransition: (href: string) => void;
  showOverlay: boolean;
  nexthref : string;
  isPopState : boolean;
};

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);


export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isPopState, setIsPopState] = useState(false);
  const [nexthref, setNextHref] = useState('');

  const router = useRouter();
  const pathname = usePathname();


  const startTransition = (href: string) => {
    if(pathname === href) return;
    setNextHref(href)

    setIsPopState(false);
    setShowOverlay(true);

    setTimeout(() => {
      router.push(href);
    }, 800);
  };


  useEffect(() => {
    const handlePopState = () => {
      const currentHref = window.location.pathname; 

      setIsPopState(true)
      setNextHref(currentHref);
      setShowOverlay(true);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

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
        setShowOverlay={setShowOverlay}
        pathname={nexthref}
      />
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) throw new Error('usePageTransition must be used inside PageTransitionProvider');
  return context;
};
