<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Hercules App</title>
    <meta name="description" content="An app made by https://hercules.app" />
    <meta name="author" content="Hercules" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>"
    />

    <meta property="og:title" content="Hercules App" />
    <meta
      property="og:description"
      content="An app made by https://hercules.app"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://hercules.app/og/app/01K5TA83N9VEJMQVMP6J43XZYT.png"
    />
    <meta property="og:image:type" content="image/png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content="https://hercules.app/og/app/01K5TA83N9VEJMQVMP6J43XZYT.png"
    />
    <meta name="twitter:site" content="@UseHercules" />

    <!-- Detect dark mode preference and set the class before next-themes loads. This avoids a flash of unstyled content (FOUC) when the page loads. -->
    <script>
      (function () {
        try {
          var theme = localStorage.getItem("theme");
          if (theme === "system" || !theme) {
            var prefersDark = window.matchMedia(
              "(prefers-color-scheme: dark)",
            ).matches;
            theme = prefersDark ? "dark" : "light";
          }
          document.documentElement.classList.add(theme);
        } catch (e) {}
      })();
    </script>
    <script type="module" crossorigin src="/assets/index-aYTbOZLa.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-Oe8ULSZC.css">
  <script type="module" src="/__hercules_error_handler.js"></script>
</head>
  <body>
    <div id="root"></div>
  
        <script>
          (function() {
            // Wait for DOM to be ready
            function initHerculesBanner() {
              const banner = document.getElementById('omwr6tp1nx');
              if (!banner) return;
              
              // Get referral information
              const hostname = window.location.hostname || 'unknown';
              const pathname = window.location.pathname || '/';
              const protocol = window.location.protocol || 'https:';
              const fullUrl = encodeURIComponent(window.location.href);
              
              // Build tracking URL with UTM parameters
              const baseUrl = 'https://hercules.app';
              const params = new URLSearchParams({
                utm_source: hostname,
                utm_medium: 'watermark_banner',
                utm_campaign: 'powered_by_hercules',
                referrer: fullUrl
              });
              
              // Update the banner href with tracking parameters
              banner.href = baseUrl + '?' + params.toString();
            }
            
            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initHerculesBanner);
            } else {
              initHerculesBanner();
            }
          })();
        </script>
        <a href="https://hercules.app" target="_blank" rel="noopener noreferrer" id="omwr6tp1nx" style="
          position: fixed;
          top: 0px;
          left: 0;
          right: 0;
          width: 100%;
          height: 44px;
          padding: 0 16px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 13px;
          font-weight: 500;
          z-index: 9999;
          pointer-events: auto;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          cursor: pointer;
          background-color: #1a1a1a;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        ">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="flex-shrink: 0;">
            <path d="m7.99 0-7.01 9.38 6.02-.42-4.96 7.04 12.96-10-7.01.47 7.01-6.47z"></path>
          </svg>
          <span>Powered by Hercules</span>
        </a>
        <style>
          /* Prevent banner from covering content by adding padding to body */
          body {
            padding-top: 44px !important;
          }
          /* Light mode styles */
          @media (prefers-color-scheme: light) {
            #omwr6tp1nx {
              background-color: #ffffff !important;
              color: #1a1a1a !important;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(0, 0, 0, 0.08) !important;
            }
            
            #omwr6tp1nx:hover {
              background-color: #f8f9fa !important;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(0, 0, 0, 0.1) !important;
            }
          }
          
          /* Dark mode styles */
          @media (prefers-color-scheme: dark) {
            #omwr6tp1nx {
              background-color: #1a1a1a !important;
              color: #ffffff !important;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.1) !important;
            }
            
            #omwr6tp1nx:hover {
              background-color: #2a2a2a !important;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5), 0 1px 0 rgba(255, 255, 255, 0.15) !important;
            }
          }
          
          #omwr6tp1nx:hover {
            background-color: rgba(255, 255, 255, 0.05);
          }
          
          #omwr6tp1nx:active {
            background-color: rgba(255, 255, 255, 0.1);
          }
          
          @media (max-width: 640px) {
            #omwr6tp1nx {
              font-size: 12px;
              height: 36px;
              gap: 6px;
              padding: 0 12px;
            }
            
            #omwr6tp1nx svg {
              width: 14px;
              height: 14px;
            }
            
            /* Update body padding for mobile banner height */
            body {
              padding-top: 36px !important;
            }
          }
          
          @media print {
            #omwr6tp1nx {
              display: none !important;
            }
            
            /* Remove body padding when printing */
            body {
              padding-top: 0 !important;
            }
          }
        </style>
      
</body>
</html>
