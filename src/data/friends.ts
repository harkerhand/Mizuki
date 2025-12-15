// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
	},
	{
		id: 2,
		title: "Mizuki Docs",
		imgurl: "http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki User Manual",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["Docs"],
	},
	// {
	// 	id: 3,
	// 	title: "Vercel",
	// 	imgurl: "https://avatars.githubusercontent.com/u/14985020?v=4&s=640",
	// 	desc: "Develop. Preview. Ship.",
	// 	siteurl: "https://vercel.com",
	// 	tags: ["Hosting", "Cloud"],
	// },
	// {
	// 	id: 4,
	// 	title: "Tailwind CSS",
	// 	imgurl: "https://avatars.githubusercontent.com/u/67109815?v=4&s=640",
	// 	desc: "A utility-first CSS framework for rapidly building custom designs",
	// 	siteurl: "https://tailwindcss.com",
	// 	tags: ["CSS", "Framework"],
	// },
	// {
	// 	id: 5,
	// 	title: "TypeScript",
	// 	imgurl: "https://avatars.githubusercontent.com/u/6154722?v=4&s=640",
	// 	desc: "TypeScript is JavaScript with syntax for types",
	// 	siteurl: "https://www.typescriptlang.org",
	// 	tags: ["Language", "JavaScript"],
	// },
	// {
	// 	id: 6,
	// 	title: "React",
	// 	imgurl: "https://avatars.githubusercontent.com/u/6412038?v=4&s=640",
	// 	desc: "A JavaScript library for building user interfaces",
	// 	siteurl: "https://reactjs.org",
	// 	tags: ["Framework", "JavaScript"],
	// },
	// {
	// 	id: 7,
	// 	title: "GitHub",
	// 	imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
	// 	desc: "Where the world builds software",
	// 	siteurl: "https://github.com",
	// 	tags: ["Development", "Platform"],
	// },
	// {
	// 	id: 8,
	// 	title: "MDN Web Docs",
	// 	imgurl: "https://avatars.githubusercontent.com/u/7565578?v=4&s=640",
	// 	desc: "The web's most comprehensive resource for web developers",
	// 	siteurl: "https://developer.mozilla.org",
	// 	tags: ["Docs", "Reference"],
	// },
	{
		id: 11,
		title: "彰隐的个人博客",
		imgurl: "/images/avatars/zzy_avatar.jpg",
		desc: "弱人工智能",
		siteurl: "http://117.72.35.48/",
		tags: ["Blog", "AI"],
	},
	{
		id: 12,
		title: "zbx1425",
		imgurl: "/images/avatars/zbx1425_avatar.jpg",
		desc: "纸板箱中的宇宙",
		siteurl: "https://www.zbx1425.cn/",
		tags: ["Blog"],
	},
	{
		id: 13,
		title: "chia.le",
		imgurl: "/images/avatars/le.png",
		desc: "An undergraduate student at HUST",
		siteurl: "https://nuyoahwjl.github.io/",
		tags: ["Blog", "Student"],
	},
	{
		id: 14,
		title: "I++ Club",
		imgurl: "/images/avatars/ipp.png",
		desc: "Tech club from SEU",
		siteurl: "https://ippclub.github.io/",
		tags: ["Club", "Tech"],
	},
	{
		id: 15,
		title: "GlowLED",
		imgurl: "https://blog.glowled.top/avatar/avatar_yamada.jpg",
		desc: "一个混吃等死的普通人",
		siteurl: "https://blog.glowled.top/",
		tags: ["Blog"],
	},
	{
		id: 16,
		title: "D-major",
		imgurl: "https://www.notion.so/image/attachment%3Afa3e9545-64eb-43f0-8bd1-b80ef162381b%3AD_icon_%E7%94%BB%E6%9D%BF_1.png?table=collection&id=1e6a4a21-39b2-8196-af16-000b4081ece9&t=1e6a4a21-39b2-8196-af16-000b4081ece9",
		desc: "一个流浪者的酒瓶",
		siteurl: "https://www.dmajor.top/",
		tags: ["Blog"],
	},
	{
		id: 17,
		title: "ChPu437",
		imgurl: "https://blog.chpu437.com/img/avatar/my_avatar.png",
		desc: "蛊惑他人，麻醉内心",
		siteurl: "https://blog.chpu437.com/",
		tags: ["Blog"],
	},
	{
		id: 18,
		title: "Zero'F_Fa",
		imgurl: "https://zeroffa233.github.io/img/avatar.png",
		desc: "让你看到老鼠人很抱歉.jpg",
		siteurl: "https://zeroffa233.github.io/",
		tags: ["Blog"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
