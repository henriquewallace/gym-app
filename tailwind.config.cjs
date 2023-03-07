/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'primary': '#F15152',
      'primary-90': '#F26263',
      'primary-80': '#F47475',
      'black': '#464646',
      'black-50': '#A2A2A2',
      'black-30': '#C7C7C7',
      'black-10': '#ECECEC',
      'black-5': '#F6F6F6',
      'white': '#FFFFFF',
    },
    extend: {
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
        '72': '72px',
      },
    },
    plugins: [],
  }
}