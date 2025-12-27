'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

export function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    handleStop(); // Stop progress on initial load

    return () => {
      handleStop();
    };
  }, []);

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  // This is a component that will be used to wrap around links
  // to trigger the progress bar.
  // We are monkey patching the Next.js Link component to trigger nprogress.
  // This is a bit of a hack, but it's the best way to do it for now.
  useEffect(() => {
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      NProgress.start();
      return originalPushState.apply(history, args);
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
      NProgress.start();
      return originalReplaceState.apply(history, args);
    };

    const handlePopState = () => {
      NProgress.start();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}
