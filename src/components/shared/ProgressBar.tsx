'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

// A component that subscribes to route changes and triggers NProgress.
// This is a bit of a hack, but it's a common way to implement this
// with the Next.js App Router, as of Next.js 13.
//
// See: https://github.com/vercel/next.js/discussions/41934
function NProgressEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
    return () => {
      // NProgress.start();
    };
  }, [pathname, searchParams]);

  return null;
}


export function ProgressBar() {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const originalFetch = window.fetch;
    window.fetch = async function (...args) {
      // Don't show the progress bar for Genkit flow requests.
      if (typeof args[0] === 'string' && args[0].includes('/flows/')) {
        return originalFetch(...args);
      }
      if (NProgress.isStarted() === false) {
        NProgress.start();
      }
      try {
        return await originalFetch(...args);
      } catch (error) {
        NProgress.done();
        throw error;
      }
    };

    // This is a workaround for a bug in Next.js where the progress bar
    // doesn't finish when the user navigates to a page with a full
    // page loading component.
    const MutationObserver = window.MutationObserver;
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          // Check if the added node is the loading-indicator
          if (
            node instanceof HTMLElement &&
            node.getAttribute('data-next-router-loading') === ''
          ) {
            NProgress.done();
            return;
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.fetch = originalFetch;
      observer.disconnect();
    };
  }, []);


  return <NProgressEvents />;
}
