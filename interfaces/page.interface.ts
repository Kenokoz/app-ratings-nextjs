export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export interface TopPageAdvantage {
	_id: string;
	description: string;
	title: string;
}

export interface Blog {
	_id: string;
	h1: string;
	metaDescription: string;
	metaTitle: string;
	views: number;
}

export interface HhData {
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

export interface Learningclub {
	_id: string;
	metaDescription: string;
	metaTitle: string;
	qas: any[];
}

export interface TopPageModel {
	__v: number;
	_id: string;
	addresses: any[];
	advantages?: TopPageAdvantage[];
	alias: string;
	blog: Blog;
	category: string;
	categoryOn: string;
	createdAt: Date;
	firstCategory: TopLevelCategory;
	hh?: HhData;
	learningclub: Learningclub;
	metaDescription: string;
	metaTitle: string;
	qas: any[];
	secondCategory: string;
	seoText?: string;
	sravnikus: Learningclub;
	tags: string[];
	tagsTitle: string;
	title: string;
	updatedAt: Date;
}
