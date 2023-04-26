import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/share', component: '@/pages/share' },
    { path: '/to-be-partner', component: '@/pages/to-be-partner' },
  ],
  fastRefresh: {},
  antd: {
    mobile: false,
  },
  proxy: {
    '/wx': {
      target: 'https://api.weixin.qq.com',
      changeOrigin: true,
      pathRewrite: { '^/wx': '' },
    },
  },
});
