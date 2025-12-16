// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Phone: [
		{
			name: "Redmi K80 Ultra",
			image: "/images/device/k80u.png",
			specs: "绿 / 16G + 512G",
			description: "续航比我命都长",
			link: "https://www.mi.com/prod/redmi-k80-ultra",
		},
		{
			name: "Xiaomi 13 Pro",
			image: "/images/device/m13p.png",
			specs: "白 / 12G + 256G",
			description: "白陶瓷永远的神",
			link: "https://www.mi.com/xiaomi-13-pro",
		},
	],
	Router: [
		{
			name: "磊科 N60 Pro",
			image: "/images/device/n60p.png",
			specs: "AX6000 / 双2.5G",
			description: "开放SSH刷机",
			link: "https://www.netcoretec.com/product-center/family/wifi-router/2659.html",
		},
		{
			name: "Xiaomi AX3000T",
			image: "/images/device/ax3000t.png",
			specs: "AX3000 / 千兆",
			description: "不到100元",
			link: "https://www.mi.com/xiaomi-ax3000t",
		},
	],
	EarPhone: [
		{
			name: "Sony WH-1000XM4",
			image: "/images/device/wh1000xm4.png",
			specs: "黑 / 降噪",
			description: "降噪之王",
			link: "https://www.sonystyle.com.cn/minisite/pa/wh_1000xm4/index.html",
		},
		{
			name: "TANCHJIM Bunny",
			image: "/images/device/bunny.png",
			specs: "白 / 动圈+动铁",
			description: "拼多多99元",
			link: "https://tanchjim.com/products/earphones/iem/bunny/",
		},
	],
};
