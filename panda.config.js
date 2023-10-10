import { defineConfig } from '@pandacss/dev';
import { pandaConfig } from '@atom/design-system/configs';

export default defineConfig({
    ...pandaConfig,
    include: [...pandaConfig.include, './src/lab/**/*.{ts,tsx}']
});
