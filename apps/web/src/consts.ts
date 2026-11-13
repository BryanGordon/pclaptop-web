export interface NavItem {
	label: string;
	href: string;
}

export const SITE_NAME = 'PC Laptop';
export const SITE_TAGLINE = 'Laptops, monitores y componentes';

export const NAV_ITEMS: NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: "PC's", href: '/pcs' },
	{ label: 'Otros productos', href: '/otros-productos' },
	{ label: 'Contacto', href: '/contacto' },
	{ label: 'Trabaja con nosotros', href: '/trabaja-con-nosotros' },
];

export const PRODUCT_CATEGORIES: NavItem[] = [
	{ label: "PC's", href: '/pcs' },
	{ label: 'Monitores', href: '/otros-productos' },
	{ label: 'Componentes', href: '/otros-productos' },
	{ label: 'Impresoras', href: '/otros-productos' },
	{ label: 'Repuestos', href: '/otros-productos' },
];
