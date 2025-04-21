
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Cafeteria-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Cafeteria-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4515, hash: '550245fd5aafc6a08267390d88fb4aeb46e7f49dad22cc8fff625a226091e433', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '6f3278a02e07513c8405da8ebdd9ef0815ddc45e09424393981727a4fadb9f77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29288, hash: 'ca35d01686638dd0536f2038d487980083781123c7b6b2a1a2463fdfb9d5c8dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NXKTA3P5.css': {size: 16091, hash: '3Pif5RR9krw', text: () => import('./assets-chunks/styles-NXKTA3P5_css.mjs').then(m => m.default)}
  },
};
