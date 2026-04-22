import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** إعدادات Vite — مشروع NextGen Softweare House */
export default defineConfig({
  plugins: [tailwindcss(), react()],
})
