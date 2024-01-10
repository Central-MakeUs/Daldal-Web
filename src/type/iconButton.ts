export type iconButton = {
	children: React.ReactNode;
	width: number;
	size?: 'small' | 'medium' | 'large';
	bgColor: string;
	onClick: () => void;
};
