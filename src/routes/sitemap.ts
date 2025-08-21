import paths from 'routes/paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
  messages?: number;
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'solar:widget-bold',
    active: true,
  },
  {
    id: 'products',
    subheader: 'Products',
    path: '/pages/products',
    icon: 'solar:bag-4-bold',
  },
  {
    id: 'orders',
    subheader: 'Orders',
    path: '/pages/orders',
    icon: 'solar:clipboard-list-bold',
  },
  {
    id: 'customers',
    subheader: 'Customers',
    path: '/pages/customers',
    icon: 'solar:users-group-rounded-bold',
  },
  {
    id: 'inventory',
    subheader: 'Inventory',
    path: '/pages/inventory',
    icon: 'solar:box-bold',
  },
  {
    id: 'loid-ai',
    subheader: 'Loid AI',
    path: '/pages/loid-ai',
    icon: 'solar:chat-round-dots-bold',
    messages: 49,
  },
  {
    id: 'analytics',
    subheader: 'Analytics',
    path: '/pages/analytics',
    icon: 'solar:chart-square-bold',
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '/pages/settings',
    icon: 'solar:settings-bold',
  },
  {
    id: 'signin',
    subheader: 'Sign In',
    path: paths.signin,
    icon: 'mage:lock-fill',
    active: true,
  },
  {
    id: 'signup',
    subheader: 'Sign Up',
    path: paths.signup,
    icon: 'mage:user-plus-fill',
    active: true,
  },
];

export default sitemap;
