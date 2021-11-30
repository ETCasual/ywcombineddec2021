import { defineConfig } from 'vite-plugin-windicss';
import colors from 'windicss/colors';

export default defineConfig({
  important: true,
  theme: {
    fontFamily: { lato: ['Lato', 'sans-serif'], noto: ['"Noto Sans SC"', 'sans-serif'] },
    colors: {
      ...colors,
      grey: {
        DEFAULT: '#E4E4E4',
        deactivate: '#808191',
        shade0: '#2A2D36',
        shade1: '#2C2E38',
        shade2: '#F0F3F6',
        shade3: '#F7F7F7',
        border: '#353841',
        placeholder: '#585c69',
      },
    },
  },
  shortcuts: {
    text: 'font-lato',
    chibold: 'font-noto font-bold',
    chi: 'font-noto',
  },
});
