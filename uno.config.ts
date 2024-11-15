import { defineConfig, presetUno, transformerDirectives } from 'unocss';

export default defineConfig({
  transformers: [transformerDirectives({
    applyVariable: ['--at-apply', '--uno-apply', '--uno'],
  })],
  presets: [presetUno()],
  shortcuts: {
  },
  theme: {
    fontFamily: {
      Poppins: 'Poppins',
      Paprika: 'Paprika',
      Inria: 'Inria Serif',
    },
    container: {
      center: true,
      padding: '4rem',
    },
  },
});
