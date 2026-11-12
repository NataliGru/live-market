import { Links } from '@/shared/settings';

export const NAVIGATION_LINKS = {
  logo: {
    link: Links.index,
  },

  items: [
    {
      text: 'About',
      link: Links.about,
    },
    {
      text: 'GitHub',
      link: 'https://github.com/NataliGru',
      isExternal: true,
    },
  ],
};
