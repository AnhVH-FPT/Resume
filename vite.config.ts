import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // SỬA CHÍNH XÁC THÀNH DÒNG NÀY:
  base: '/Resume/', 

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});