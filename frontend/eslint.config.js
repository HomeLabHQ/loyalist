import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

export default tseslint.config(...mantine, {
  ignores: [
    '**/node_modules/**',
    '**/redux/api.ts',
    '**/*.{mjs,cjs,js,d.ts,d.mts}',
    './.storybook/main.ts',
  ],
});
