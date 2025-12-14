

export type TProfileSidebarItem = {
    label: string;
    route: string;
};

export const profileSidebarItems: TProfileSidebarItem[] = [
    { label: 'My Profile', route: '/profile' },
    { label: 'Orders', route: '/orders' },
    { label: 'Wishlist', route: '/wishlist' },
]