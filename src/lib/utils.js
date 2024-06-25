const color = {
	green: {
		bg: "bg-[#ECF7D4]",
		badge: "bg-[#D6F497]",
	},
	orange: {
		bg: "bg-[#F9EFE1]",
		badge: "bg-[#F7E0B8]",
	},
	red: {
		bg: "bg-[#FBE5E7]",
		badge: "bg-[#FDC6C7]",
	},
	blue: {
		bg: "bg-[#E1F0FB]",
		badge: "bg-[#B8E0F7]",
	},
	purple: {
		bg: "bg-[#F3E5FB]",
		badge: "bg-[#D7B8F7]",
	},
	yellow: {
		bg: "bg-[#FDFBE1]",
		badge: "bg-[#F7F4B8]",
	},
	pink: {
		bg: "bg-[#FBE5F7]",
		badge: "bg-[#F7B8E4]",
	},
	teal: {
		bg: "bg-[#E5FBF7]",
		badge: "bg-[#B8F7E0]",
	},
	brown: {
		bg: "bg-[#F3EDE4]",
		badge: "bg-[#D7C9B8]",
	},
	gray: {
		bg: "bg-[#F7F7F7]",
		badge: "bg-[#E1E1E1]",
	},
};

export const getRandomColor = () => {
	const colorNames = Object.keys(color); 
	const randomIndex = Math.floor(Math.random() * colorNames.length);
	const randomColorName = colorNames[randomIndex];
	return color[randomColorName]; 
};