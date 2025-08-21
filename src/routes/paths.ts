export const rootPaths = {
  root: '/',
  pageRoot: 'pages',
  authRoot: 'auth',
  errorRoot: 'error',
};

export default {
  dashboard: `/`,
  products: `/${rootPaths.pageRoot}/products`,
  orders: `/${rootPaths.pageRoot}/orders`,
  customers: `/${rootPaths.pageRoot}/customers`,
  inventory: `/${rootPaths.pageRoot}/inventory`,
  loidAi: `/${rootPaths.pageRoot}/loid-ai`,
  analytics: `/${rootPaths.pageRoot}/analytics`,
  settings: `/${rootPaths.pageRoot}/settings`,

  signin: `/${rootPaths.authRoot}/signin`,
  signup: `/${rootPaths.authRoot}/signup`,
  resetPassword: `/${rootPaths.authRoot}/reset-password`,
  404: `/${rootPaths.errorRoot}/404`,
};
