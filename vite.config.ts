import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Add Custom Paths for imports
import tsconfigPaths from 'vite-tsconfig-paths'

// Add PWA functionality
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // Add Custom Paths for imports
    VitePWA({ registerType: 'autoUpdate' }), // Add PWA functionality
  ],
})
