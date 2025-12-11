/**
 * Example: Lazy Loading Heavy Components
 * 
 * Use React.lazy() and Suspense to load components on-demand,
 * reducing initial bundle size and improving Time to Interactive (TTI).
 * 
 * BEFORE (eager loading):
 * import HeavyComponent from './components/HeavyComponent'
 * 
 * AFTER (lazy loading):
 * const HeavyComponent = React.lazy(() => import('./components/HeavyComponent'))
 */

import React, { Suspense, lazy } from 'react';

// ============================================================================
// LAZY-LOADED COMPONENTS
// ============================================================================

// Heavy analytics dashboard (only loaded when needed)
const AnalyticsDashboard = lazy(() => 
  import('./components/AnalyticsDashboard').catch(() => ({
    default: () => <div>Failed to load dashboard</div>
  }))
);

// Large project demo viewer (only loaded when user clicks "View Demo")
const ProjectDemoViewer = lazy(() =>
  import('./components/ProjectDemoViewer').catch(() => ({
    default: () => <div>Failed to load demo viewer</div>
  }))
);

// Heavy 3D visualization component
const ThreeDVisualization = lazy(() =>
  import('./components/ThreeDVisualization').catch(() => ({
    default: () => <div>Failed to load 3D viewer</div>
  }))
);

// ============================================================================
// LOADING FALLBACK COMPONENT
// ============================================================================

function LoadingFallback({ message = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">{message}</p>
      </div>
    </div>
  );
}

// ============================================================================
// USAGE EXAMPLE
// ============================================================================

export default function App() {
  const [showDashboard, setShowDashboard] = React.useState(false);
  const [showDemo, setShowDemo] = React.useState(false);
  
  return (
    <div className="app">
      <header>
        <h1>My Portfolio</h1>
      </header>
      
      <main>
        {/* Always-loaded content */}
        <section id="hero">
          <h2>Welcome</h2>
          <p>This content loads immediately</p>
        </section>
        
        {/* Lazy-loaded analytics dashboard */}
        <section id="analytics">
          <button onClick={() => setShowDashboard(!showDashboard)}>
            {showDashboard ? 'Hide' : 'Show'} Analytics
          </button>
          
          {showDashboard && (
            <Suspense fallback={<LoadingFallback message="Loading analytics..." />}>
              <AnalyticsDashboard />
            </Suspense>
          )}
        </section>
        
        {/* Lazy-loaded project demo */}
        <section id="projects">
          <button onClick={() => setShowDemo(true)}>
            View Project Demo
          </button>
          
          {showDemo && (
            <Suspense fallback={<LoadingFallback message="Loading demo..." />}>
              <ProjectDemoViewer 
                projectId="my-project"
                onClose={() => setShowDemo(false)}
              />
            </Suspense>
          )}
        </section>
      </main>
    </div>
  );
}

// ============================================================================
// BEST PRACTICES
// ============================================================================

/**
 * 1. WHEN TO USE LAZY LOADING:
 *    - Components that are conditionally rendered (modals, tabs, accordions)
 *    - Heavy third-party libraries (charts, maps, code editors)
 *    - Route-based code splitting (different pages)
 *    - Content below the fold that users may not scroll to
 * 
 * 2. WHEN NOT TO USE:
 *    - Above-the-fold content (hero section, navigation)
 *    - Small components (< 50KB)
 *    - Frequently accessed components
 *    - Critical user interactions
 * 
 * 3. OPTIMIZATION TIPS:
 *    - Combine with Intersection Observer to preload before visible
 *    - Use React.lazy() with dynamic import()
 *    - Provide meaningful loading fallbacks
 *    - Handle errors gracefully with error boundaries
 *    - Preload on hover for better UX: <Link onMouseEnter={() => import('./Component')}>
 * 
 * 4. MEASURING IMPACT:
 *    - Check Network tab: Lazy components load as separate chunks
 *    - Run Lighthouse: Should see improved TTI and TBT scores
 *    - Monitor bundle size: Main bundle should be smaller
 *    - Check Coverage tab: Less unused JavaScript
 */

// ============================================================================
// ROUTE-BASED CODE SPLITTING (React Router Example)
// ============================================================================

/**
 * import { lazy, Suspense } from 'react';
 * import { BrowserRouter, Routes, Route } from 'react-router-dom';
 * 
 * const Home = lazy(() => import('./pages/Home'));
 * const Projects = lazy(() => import('./pages/Projects'));
 * const Contact = lazy(() => import('./pages/Contact'));
 * 
 * function App() {
 *   return (
 *     <BrowserRouter>
 *       <Suspense fallback={<LoadingFallback />}>
 *         <Routes>
 *           <Route path="/" element={<Home />} />
 *           <Route path="/projects" element={<Projects />} />
 *           <Route path="/contact" element={<Contact />} />
 *         </Routes>
 *       </Suspense>
 *     </BrowserRouter>
 *   );
 * }
 */

// ============================================================================
// PRELOADING ON HOVER (Advanced)
// ============================================================================

/**
 * function PreloadLink({ to, children }) {
 *   const handleMouseEnter = () => {
 *     // Preload route component on hover
 *     import(`./pages/${to}`);
 *   };
 *   
 *   return (
 *     <a href={to} onMouseEnter={handleMouseEnter}>
 *       {children}
 *     </a>
 *   );
 * }
 */
