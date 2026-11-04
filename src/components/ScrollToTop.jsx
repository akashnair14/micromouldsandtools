import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scroll position across client-side route changes (/works, /careers)
 * without resetting on browser page reload/refresh.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // If it's the initial page load or a page refresh, do NOT scroll upward.
    // Respect browser's native scroll restoration position on reload.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
      return;
    }

    // Only scroll when user actually transitions between different routes
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } else {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
        }
      }
    } else if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [pathname, hash]);

  return null;
}
