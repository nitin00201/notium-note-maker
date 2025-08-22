/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}', 
    './components/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',   // Indigo
        secondary: '#F97316', // Orange
        background: '#0F172A', 
        surface: '#1E293B',
        accent: "#10B981", // emerald-500        
        dark: "#111827", // gray-900
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        },
        success: '#22C55E',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
};
