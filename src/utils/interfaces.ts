export interface DecodedAPIResponse {
	response: any;
	status: number
};

export interface ItemOptions {
	name: string;
	id: string;
	html_url?: string;
}

export interface BoardOptions extends ItemOptions {
	// extend the interface to add board spefic types
};

export interface ListOptions extends ItemOptions {
	// extend the interface to add list spefic types
	index?: number;
}

export interface CardOptions extends ItemOptions {
	// extend the interface to add card specific types
}

export interface MemberOptions extends ItemOptions {
	// extend the interface to add member specific types
}

export interface AllOptions {
	boards?: BoardOptions;
	lists?: ListOptions;
	cards?: CardOptions;
	members?: MemberOptions;
}