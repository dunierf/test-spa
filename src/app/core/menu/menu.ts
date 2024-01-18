import { Menu } from "../models/menu/menu.model";

export const menu: Menu = {
    items: [
        {
            label: 'Main',
            items: [
              {
                label: 'Dashboard',
                link: '/',
                icon: 'house'
              },
              {
                label: 'Logout',
                link: 'logout',
                icon: 'house'
              }
            ]
        },
        {
            label: 'Users',
            items: [
                {
                    label: 'List of users',
                    link: 'users',
                    icon: 'currency-dollar'
                },
                {
                    label: 'New user',
                    link: 'user',
                    icon: 'flag'
                }
            ]
        },
        {
            label: 'Products',
            items: [
                {
                    label: 'List of products',
                    link: 'products',
                    icon: 'card-heading'
                },
                {
                    label: 'New product',
                    link: 'product',
                    icon: 'newspaper'
                }
            ]
        }
    ]
};
