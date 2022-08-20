export enum Name {
	Длительность = 'Длительность',
	ДокументОбОкончании = 'Документ об окончании',
	Сложность = 'Сложность',
	Школа = 'Школа',
}

export interface Blog {
	_id: string;
	bigImage?: string;
	text: string;
}

export interface ProductCharacteristic {
	name: Name;
	value: string;
}

export interface ReviewModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

export interface ProductModel {
	__v: number;
	_id: string;
	advantages?: string;
	blog: Blog;
	categories: string[];
	characteristics: ProductCharacteristic[];
	clicks: number;
	companyId: string;
	createdAt: Date;
	credit: number;
	description: string;
	html: string;
	image: string;
	initialRating: number;
	link: string;
	oldPrice: number;
	price: number;
	reviewCount: number;
	reviews: ReviewModel[];
	tags: string[];
	title: string;
	updatedAt: Date;
	reviewAvg?: number;
}
