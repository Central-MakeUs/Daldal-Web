type IconId =
	| 'app-logo'
	| 'direction-left'
	| 'direction-right'
	| 'like-full'
	| 'like-with-num'
	| 'like-empty'
	| 'check'
	| 'circle-check'
	| 'mypage-person'
	| 'point-paid'
	| 'search'
	| 'star'
	| 'category-bags'
	| 'category-hat'
	| 'category-food'
	| 'category-clothes'
	| 'category-jewlery'
	| 'category-makeup'
	| 'category-living'
	| 'category-shoes';

type SvgIcon = {
	id: IconId;
	color?: string;
	size?: number;
};

export default SvgIcon;
