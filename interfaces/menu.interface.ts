export interface PageItem {
	_id: string;
	alias: string;
	category: string;
	title: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	pages: PageItem[];
}
