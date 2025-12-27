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

    const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const anchor = target.closest('a');

        if (anchor) {
            const href = anchor.getAttribute('href');
            const targetAttr = anchor.getAttribute('target');

            // 1. Don't show for mailto, tel links.
            if (href && (href.startsWith('mailto:') || href.startsWith('tel:'))) {
                return;
            }
            
            // 2. Don't show for links opening in a new tab.
            if (targetAttr === '_blank' || event.ctrlKey || event.metaKey || event.button === 1) {
                return;
            }
            
            // 3. Don't show for same-page hash links.
            if (href && href.startsWith('#')) {
                return;
            }

            // 4. Don't show for links to the same page (even if href is full URL).
            try {
                const currentUrl = new URL(window.location.href);
                const targetUrl = new URL(anchor.href, window.location.href);

                if (currentUrl.origin === targetUrl.origin && currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search) {
                    // This handles same-page navigation, but allows hash links to scroll without progress bar
                    if (currentUrl.hash !== targetUrl.hash) {
                         return;
                    }
                }
            } catch (e) {
                // Invalid URL, let Next.js handle it, but don't start progress.
                // This can happen with malformed hrefs.
                return;
            }


            if (NProgress.isStarted() === false) {
                 NProgress.start();
            }
        }
    };

    document.addEventListener('click', handleClick);


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
      document.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, []);


  return <NProgressEvents />;
}
