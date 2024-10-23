/**
 * 加载颜色库
 */

// 粉红色
let pinks_colors = [
    {
        "brand": "西瓜",
        "name": "Watermelon",
        "color": "#FC6C85"
    },
    {
        "brand": "火烈鸟",
        "name": "Flamingo",
        "color": "#FC8EAC"
    },
    {
        "brand": "珊瑚",
        "name": "Coral",
        "color": "#F88379"
    },
    {
        "brand": "三文鱼",
        "name": "Salmon",
        "color": "#FF9999"
    },
    {
        "brand": "粉彩",
        "name": "Pastel Pink",
        "color": "#FFD1DC"
    },
    {
        "brand": "浅粉",
        "name": "Light Pink",
        "color": "#FFB6C1"
    },
    {
        "brand": "樱花",
        "name": "Cherry Blossom",
        "color": "#FFB7C5"
    },
    {
        "brand": "泡泡糖",
        "name": "Bubblegum",
        "color": "#FFC1CC"
    },
    {
        "brand": "婴儿粉",
        "name": "Baby Pink",
        "color": "#F4C2C2"
    },
    {
        "brand": "深粉",
        "name": "Dark Pink",
        "color": "#E75480"
    },
    {
        "brand": "亮粉",
        "name": "Bright Pink",
        "color": "#FF007F"
    },
    {
        "brand": "胭脂",
        "name": "Rouge",
        "color": "#A94064"
    },
    {
        "brand": "霓虹粉色",
        "name": "Neon Pink",
        "color": "#FF6EC7"
    },
    {
        "brand": "腮红",
        "name": "Blush",
        "color": "#DE5D83"
    },
    {
        "brand": "紫红",
        "name": "Fuchsia",
        "color": "#C154C1"
    },
    {
        "brand": "淡紫红",
        "name": "Mauve",
        "color": "#E0B0FF"
    },
    {
        "brand": "兰花",
        "name": "Orchid",
        "color": "#DA70D6"
    },
    {
        "brand": "品红",
        "name": "Magenta",
        "color": "#FF00FF"
    },
    {
        "brand": "热粉",
        "name": "Hot Pink",
        "color": "#FF69B4"
    },
    {
        "brand": "康乃馨",
        "name": "Carnation",
        "color": "#FFA6C9"
    },
    {
        "brand": "郁金香",
        "name": "Tulip Pink",
        "color": "#FF8E8E"
    },
    {
        "brand": "茶玫瑰",
        "name": "Tea Rose",
        "color": "#F4C2C2"
    },
    {
        "brand": "棉花糖",
        "name": "Cotton Candy",
        "color": "#FFBCD9"
    },
    {
        "brand": "客串",
        "name": "Cameo Pink",
        "color": "#EFBBCC"
    },
    {
        "brand": "法国粉",
        "name": "French Pink",
        "color": "#F64A8A"
    },
    {
        "brand": "草莓",
        "name": "Strawberry",
        "color": "#E8888A"
    },
    {
        "brand": "波斯粉",
        "name": "Persian Pink",
        "color": "#F77FBE"
    },
    {
        "brand": "纽约粉",
        "name": "New York Pink",
        "color": "#DD8374"
    },
    {
        "brand": "印度红",
        "name": "Indian Red",
        "color": "#CD5C5C"
    },
    {
        "brand": "孟塞尔红",
        "name": "Munsell Red",
        "color": "#F2003C"
    },
    {
        "brand": "红衣主教",
        "name": "Cardinal",
        "color": "#C41E3A"
    },
    {
        "brand": "克雷奥拉红",
        "name": "Crayola Red",
        "color": "#EE204D"
    },
    {
        "brand": "赤红",
        "name": "Crimson",
        "color": "#DC143C"
    },
    {
        "brand": "红宝石",
        "name": "Ruby",
        "color": "#E0115F"
    },
    {
        "brand": "红杉",
        "name": "Redwood",
        "color": "#A45A52"
    },
    {
        "brand": "生锈",
        "name": "Rusty Red",
        "color": "#DA2C43"
    },
    {
        "brand": "苋菜",
        "name": "Amaranth",
        "color": "#E52B50"
    },
    {
        "brand": "明亮栗",
        "name": "Bright Maroon",
        "color": "#C32148"
    },
    {
        "brand": "烧焦锡耶纳",
        "name": "Burnt Sienna",
        "color": "#E97451"
    },
    {
        "brand": "糖果粉",
        "name": "Candy Pink",
        "color": "#E4717A"
    },
    {
        "brand": "樱桃粉",
        "name": "Cherry Pink",
        "color": "#DE3163"
    },
    {
        "brand": "栗子",
        "name": "Chestnut",
        "color": "#CD5C5C"
    },
    {
        "brand": "黑珊瑚",
        "name": "Dark Coral",
        "color": "#CD5B45"
    },
    {
        "brand": "深粉彩红",
        "name": "Dark Pastel Red",
        "color": "#C23B22"
    },
    {
        "brand": "深红陶",
        "name": "Dark Terra Cotta",
        "color": "#CC4E5C"
    },
    {
        "brand": "深鲑鱼",
        "name": "Dark Salmon",
        "color": "#E9967A"
    },
    {
        "brand": "柠檬水",
        "name": "Lemonade",
        "color": "#F2DBE7"
    },
    {
        "brand": "桃子",
        "name": "Peach",
        "color": "#FAD1AF"
    },
    {
        "brand": "绉纱",
        "name": "Crepe",
        "color": "#F89883"
    },
    {
        "brand": "小猪粉",
        "name": "Piggy Pink",
        "color": "#FDDDE6"
    },
    {
        "brand": "深粉色",
        "name": "Deep Pink",
        "color": "#FF1493"
    },
    {
        "brand": "沙尘暴",
        "name": "Dust Storm",
        "color": "#E5CCC9"
    },
    {
        "brand": "抚子粉红",
        "name": "Nadeshiko Pink",
        "color": "#F6ADC6"
    },
    {
        "brand": "玫瑰石英",
        "name": "Rose Quartz",
        "color": "#AA98A9"
    },
    {
        "brand": "野生草莓",
        "name": "Wild Strawberry",
        "color": "#FF43A4"
    },
    {
        "brand": "拉兹马塔兹",
        "name": "Razzmatazz",
        "color": "#E3256B"
    },
    {
        "brand": "玫瑰褐",
        "name": "Rose Taupe",
        "color": "#905D5D"
    },
    {
        "brand": "宝石红",
        "name": "Rubine Red",
        "color": "#D10056"
    },
    {
        "brand": "好莱坞樱桃",
        "name": "Hollywood Cerise",
        "color": "#F400A1"
    },
    {
        "brand": "墨西哥粉",
        "name": "Mexican Pink",
        "color": "#E4007C"
    },
    {
        "brand": "钢粉色",
        "name": "Steel Pink",
        "color": "#CC3366"
    },
    {
        "brand": "玫瑰金",
        "name": "Rose Gold",
        "color": "#B76E79"
    },
    {
        "brand": "玫瑰糖果",
        "name": "Rose Bonbon",
        "color": "#F9429E"
    },
    {
        "brand": "芭比粉",
        "name": "Barbie Pink",
        "color": "#E0218A"
    },
    {
        "brand": "桑椹",
        "name": "Mulberry",
        "color": "#C54B8C"
    },
    {
        "brand": "耀眼玫瑰",
        "name": "Razzle Dazzle Rose",
        "color": "#FF33CC"
    },
    {
        "brand": "范丹戈",
        "name": "Fandango",
        "color": "#B53389"
    },
    {
        "brand": "脓",
        "name": "Puce",
        "color": "#CC8899"
    },
    {
        "brand": "老玫瑰",
        "name": "Old Rose",
        "color": "#C08081"
    },
    {
        "brand": "红木",
        "name": "Rosewood",
        "color": "#9E4244"
    },
    {
        "brand": "太妃糖",
        "name": "Taffy",
        "color": "#FA86C4"
    },
    {
        "brand": "土耳其玫瑰",
        "name": "Turkish Rose",
        "color": "#B57281"
    },
    {
        "brand": "穿孔",
        "name": "Punch",
        "color": "#F25278"
    },
    {
        "brand": "天堂粉",
        "name": "Paradise Pink",
        "color": "#E63E62"
    },
    {
        "brand": "覆盆子玫瑰",
        "name": "Raspberry Rose",
        "color": "#B3446C"
    },
    {
        "brand": "浅红",
        "name": "Light Crimson",
        "color": "#F56991"
    },
    {
        "brand": "粉雪糕",
        "name": "Pink Sherbet",
        "color": "#F78FA7"
    },
    {
        "brand": "挠我粉",
        "name": "Tickle Me Pink",
        "color": "#FC89AC"
    },
    {
        "brand": "图利安粉",
        "name": "Thulian Pink",
        "color": "#DE6FA1"
    },
    {
        "brand": "灿烂玫瑰",
        "name": "Brilliant Rose",
        "color": "#FF55A3"
    },
    {
        "brand": "蕾丝",
        "name": "Lace",
        "color": "#FFD8F0"
    },
    {
        "brand": "击打",
        "name": "Smitten",
        "color": "#C84186"
    },
    {
        "brand": "你的",
        "name": "Your",
        "color": "#FFC0C0"
    },
    {
        "brand": "凯莉斯",
        "name": "Careys",
        "color": "#D8A8A8"
    },
    {
        "brand": "牡蛎",
        "name": "Oyster",
        "color": "#F0D8D8"
    },
    {
        "brand": "闪闪腮红",
        "name": "Shimmering Blush",
        "color": "#D98695"
    },
    {
        "brand": "海",
        "name": "Sea",
        "color": "#F09090"
    },
    {
        "brand": "边缘",
        "name": "Brink",
        "color": "#FF6090"
    },
    {
        "brand": "嬉皮士",
        "name": "Hippie",
        "color": "#A84860"
    },
    {
        "brand": "浅深粉",
        "name": "Light Deep Pink",
        "color": "#FF5CCD"
    },
    {
        "brand": "野生兰花",
        "name": "Wild Orchid",
        "color": "#D470A2"
    },
    {
        "brand": "樱桃粉",
        "name": "Cerise Pink",
        "color": "#EC3B83"
    },
    {
        "brand": "震撼粉",
        "name": "Shocking Pink",
        "color": "#FC0FC0"
    },
    {
        "brand": "击中",
        "name": "Hit",
        "color": "#FFA878"
    },
    {
        "brand": "贵妇",
        "name": "Lady",
        "color": "#F0C0A8"
    },
    {
        "brand": "霓虹紫红",
        "name": "Neon Fuchsia",
        "color": "#FE4164"
    },
    {
        "brand": "极端粉",
        "name": "Ultra Pink",
        "color": "#FF6FFF"
    },
    {
        "brand": "肖斯粉红",
        "name": "Schauss Pink",
        "color": "#FF91AF"
    },
    {
        "brand": "红粉",
        "name": "Ruddy Pink",
        "color": "#E18E96"
    },
    {
        "brand": "粉红珍珠",
        "name": "Pink Pearl",
        "color": "#E7ACCF"
    },
    {
        "brand": "薰衣草玫瑰",
        "name": "Lavender Rose",
        "color": "#FBA0E3"
    },
    {
        "brand": "洗发水",
        "name": "Shampoo",
        "color": "#FFCFF1"
    },
    {
        "brand": "西班牙粉",
        "name": "Spanish Pink",
        "color": "#F7BFBE"
    },
    {
        "brand": "情人节粉",
        "name": "Valentine Pink",
        "color": "#E6A6BE"
    },
    {
        "brand": "银粉",
        "name": "Silvery Pink",
        "color": "#DCB5B4"
    },
    {
        "brand": "甜瓜",
        "name": "Melon",
        "color": "#F7BCAC"
    },
    {
        "brand": "米兰诺",
        "name": "Milano",
        "color": "#D95D67"
    },
    {
        "brand": "甜粉",
        "name": "Sweet Pink",
        "color": "#EE918D"
    },
    {
        "brand": "淘汰粉",
        "name": "Knockout Pink",
        "color": "#FF3EA5"
    },
    {
        "brand": "柚子粉",
        "name": "Grapefruit Pink",
        "color": "#E0707C"
    },
    {
        "brand": "香槟粉",
        "name": "Champagne Pink",
        "color": "#F6E1D3"
    },
    {
        "brand": "唇彩",
        "name": "Lip Pink",
        "color": "#DBAC98"
    },
    {
        "brand": "激情粉",
        "name": "Passion Pink",
        "color": "#CE74A7"
    },
    {
        "brand": "裸粉",
        "name": "Nude Pink",
        "color": "#DDC0B4"
    },
    {
        "brand": "玫瑰粉",
        "name": "Rosy Pink",
        "color": "#FF66CC"
    },
    {
        "brand": "金粉",
        "name": "Gold Pink",
        "color": "#E6C7C2"
    },
    {
        "brand": "迷雾玫瑰",
        "name": "Misty Rose",
        "color": "#FFE4E1"
    },
    {
        "brand": "淡紫色",
        "name": "Mauvelous",
        "color": "#EF98AA"
    },
    {
        "brand": "浅腮红",
        "name": "Light Blush",
        "color": "#F1ABB9"
    },
    {
        "brand": "铜玫瑰",
        "name": "Copper Rose",
        "color": "#996666"
    },
    {
        "brand": "覆盆子糖霜",
        "name": "Raspberry Glace",
        "color": "#915F6D"
    },
    {
        "brand": "Debian 红",
        "name": "Debian Red",
        "color": "#D70A53"
    },
    {
        "brand": "鲁伯",
        "name": "Ruber",
        "color": "#CE4676"
    },
    {
        "brand": "香草冰",
        "name": "Vanilla Ice",
        "color": "#F38FA9"
    },
    {
        "brand": "浅热粉",
        "name": "Light Hot Pink",
        "color": "#FFB3DE"
    },
    {
        "brand": "超级粉",
        "name": "Super Pink",
        "color": "#CF6BA9"
    },
    {
        "brand": "中国玫瑰",
        "name": "China Rose",
        "color": "#A8516E"
    },
    {
        "brand": "深橄榄",
        "name": "Deep Pruce",
        "color": "#A95C68"
    },
    {
        "brand": "法国紫红",
        "name": "French Fuchsia",
        "color": "#FD3F92"
    }
];

// 口红色号
let lipstick_colors = [
    {
        "brand": "魅可",
        "name": "玫瑰豆沙色",
        "color": "#AE5B63"
    },
    {
        "brand": "魅可",
        "name": "小辣椒色",
        "color": "#B9554F"
    },
    {
        "brand": "魅可",
        "name": "泫雅色",
        "color": "#9E3F39"
    },
    {
        "brand": "魅可",
        "name": "牛血色",
        "color": "#8D3036"
    },
    {
        "brand": "魅可",
        "name": "元气番茄红",
        "color": "#B73549"
    },
    {
        "brand": "魅可",
        "name": "洋气红棕色",
        "color": "#934C44"
    },
    {
        "brand": "魅可",
        "name": "雾面正红色",
        "color": "#A83648"
    },
    {
        "brand": "魅可",
        "name": "果酱红宝石色",
        "color": "#924049"
    },
    {
        "brand": "纪梵希",
        "name": "砖红色",
        "color": "#BA4950"
    },
    {
        "brand": "纪梵希",
        "name": "葡萄皮色",
        "color": "#8D7383"
    },
    {
        "brand": "纪梵希",
        "name": "橘粉色",
        "color": "#D75A66"
    },
    {
        "brand": "纪梵希",
        "name": "珊瑚色",
        "color": "#CC3B53"
    },
    {
        "brand": "纪梵希",
        "name": "斩男番茄色",
        "color": "#BE2A27"
    },
    {
        "brand": "纪梵希",
        "name": "复古石榴红",
        "color": "#A22D34"
    },
    {
        "brand": "纪梵希",
        "name": "复古姨妈色",
        "color": "#6C1A1A"
    },
    {
        "brand": "纪梵希",
        "name": "梅子色",
        "color": "#A03D5C"
    },
    {
        "brand": "阿玛尼",
        "name": "冰玫瑰豆沙色",
        "color": "#CF7D85"
    },
    {
        "brand": "阿玛尼",
        "name": "最美红棕色",
        "color": "#8D3C3C"
    },
    {
        "brand": "阿玛尼",
        "name": "冷调正红色",
        "color": "#911E1A"
    },
    {
        "brand": "阿玛尼",
        "name": "牛血色",
        "color": "#64191E"
    },
    {
        "brand": "阿玛尼",
        "name": "橘红色",
        "color": "#992422"
    },
    {
        "brand": "阿玛尼",
        "name": "烂番茄色",
        "color": "#B73227"
    },
    {
        "brand": "阿玛尼",
        "name": "珊瑚豆沙色",
        "color": "#AB5354"
    },
    {
        "brand": "阿玛尼",
        "name": "气质豆沙色",
        "color": "#C86A75"
    },
    {
        "brand": "迪奥",
        "name": "肉桂奶茶色",
        "color": "#BE686A"
    },
    {
        "brand": "迪奥",
        "name": "枫叶红色",
        "color": "#9A4030"
    },
    {
        "brand": "迪奥",
        "name": "西柚果橘色",
        "color": "#E67F75"
    },
    {
        "brand": "迪奥",
        "name": "干枯玫瑰色",
        "color": "#B15B64"
    },
    {
        "brand": "迪奥",
        "name": "偏橘红色",
        "color": "#CC4144"
    },
    {
        "brand": "迪奥",
        "name": "正红色",
        "color": "#9C2E2C"
    },
    {
        "brand": "迪奥",
        "name": "橘调萝卜色",
        "color": "#AC4B44"
    },
    {
        "brand": "迪奥",
        "name": "枫叶番茄色",
        "color": "#BC4949"
    },
    {
        "brand": "圣罗兰",
        "name": "豆沙玫瑰色",
        "color": "#C46D81"
    },
    {
        "brand": "圣罗兰",
        "name": "哑光复古红",
        "color": "#C23F41"
    },
    {
        "brand": "圣罗兰",
        "name": "清澈水红色",
        "color": "#962F3E"
    },
    {
        "brand": "圣罗兰",
        "name": "番茄枫红色",
        "color": "#BA4A49"
    },
    {
        "brand": "圣罗兰",
        "name": "梅子豆沙色",
        "color": "#A6505D"
    },
    {
        "brand": "圣罗兰",
        "name": "经典烂番茄色",
        "color": "#A32C25"
    },
    {
        "brand": "圣罗兰",
        "name": "干枯草莓色",
        "color": "#D6697B"
    },
    {
        "brand": "圣罗兰难",
        "name": "冰糖草莓色",
        "color": "#C62C28"
    },
    {
        "brand": "雅诗兰黛",
        "name": "焦糖枫叶红",
        "color": "#98261E"
    },
    {
        "brand": "植村秀",
        "name": "气质正红色",
        "color": "#A93237"
    },
    {
        "brand": "兰蔻",
        "name": "橘调胡萝卜",
        "color": "#AE3328"
    },
    {
        "brand": "香奈儿",
        "name": "蓝调红棕色",
        "color": "#832525"
    },
    {
        "brand": "香奈儿",
        "name": "草莓红宝石",
        "color": "#84202B"
    },
    {
        "brand": "香奈儿",
        "name": "气场姨妈色",
        "color": "#621912"
    },
    {
        "brand": "迪奥",
        "name": "枫叶红色",
        "color": "#922A23"
    },
    {
        "brand": "迪奥",
        "name": "正宫红色",
        "color": "#C15058"
    },
    {
        "brand": "迪奥",
        "name": "浓郁南瓜色",
        "color": "#D1553F"
    },
    {
        "brand": "魅可",
        "name": "蓝调正红",
        "color": "#B1313F"
    },
    {
        "brand": "魅可",
        "name": "番茄辣椒红",
        "color": "#813634"
    },
    {
        "brand": "魅可",
        "name": "显白转红",
        "color": "#7D2824"
    },
    {
        "brand": "纪梵希",
        "name": "橘调番茄红",
        "color": "#BD414B"
    },
    {
        "brand": "纪梵希",
        "name": "复古石榴红",
        "color": "#8E2528"
    },
    {
        "brand": "纪梵希",
        "name": "蓝调复古红",
        "color": "#9A2124"
    },
    {
        "brand": "圣罗兰",
        "name": "哑光复古红",
        "color": "#A73039"
    },
    {
        "brand": "圣罗兰",
        "name": "显白烂番茄",
        "color": "#A34433"
    },
    {
        "brand": "圣罗兰",
        "name": "番茄枫糖色",
        "color": "#893026"
    },
    {
        "brand": "TF",
        "name": "宝石红棕色",
        "color": "#682A23"
    },
    {
        "brand": "TF",
        "name": "番茄红色",
        "color": "#973521"
    },
    {
        "brand": "TF",
        "name": "浓郁深红色",
        "color": "#712425"
    },
    {
        "brand": "阿玛尼",
        "name": "栗子红棕色",
        "color": "#7F372F"
    },
    {
        "brand": "阿玛尼",
        "name": "绝美山楂色",
        "color": "#891E1B"
    },
    {
        "brand": "阿玛尼",
        "name": "烂番茄鼻祖",
        "color": "#7E1815"
    },
    {
        "brand": "植村秀",
        "name": "奶油南瓜橘",
        "color": "#B85B49"
    },
    {
        "brand": "植村秀",
        "name": "赤茶红棕色",
        "color": "#994440"
    },
    {
        "brand": "植村秀",
        "name": "元气血橙色",
        "color": "#C44841"
    },
    {
        "brand": "植村秀",
        "name": "柔雾土脏橘",
        "color": "#C75B40"
    },
    {
        "brand": "植村秀",
        "name": "红豆玫瑰色",
        "color": "#A74F51"
    },
    {
        "brand": "植村秀",
        "name": "柔雾正红色",
        "color": "#C2313E"
    },
    {
        "brand": "植村秀",
        "name": "牛血姨妈色",
        "color": "#7A2A25"
    },
    {
        "brand": "植村秀",
        "name": "蔓越莓色",
        "color": "#953C49"
    }
];

// 短裙格柄
let skirt_colors = [
    {"img": "/dist/images/skirt/中牌-冰河.png"},
    {"img": "/dist/images/skirt/星月豚骨-不死川.png"},
    {"img": "/dist/images/skirt/夏日和风铃-小黄鸭.png"},
    {"img": "/dist/images/skirt/忘川琉璃-小苍兰.png"},
    {"img": "/dist/images/skirt/02JK-朝阳.png"},
    {"img": "/dist/images/skirt/樱花家族-秋意浓.png"},
    {"img": "/dist/images/skirt/鸽子汽水-秋蟹.png"},
    {"img": "/dist/images/skirt/心意告示牌-橘里橘气.png"},
    {"img": "/dist/images/skirt/1995制服馆-橘夏.png"},
    {"img": "/dist/images/skirt/雪间空蝉-霭藤.png"},
    {"img": "/dist/images/skirt/未来制服馆-夜宴.png"},
    {"img": "/dist/images/skirt/樱桃泡泡-贩梦日记.png"},
    {"img": "/dist/images/skirt/梗豆-独角兽.png"},
    {"img": "/dist/images/skirt/深夜幻境-海苔.png"},
    {"img": "/dist/images/skirt/夏日和风铃-青团.png"},
    {"img": "/dist/images/skirt/优马-玟森.png"},
    {"img": "/dist/images/skirt/风物诗-风物诗红格.png"},
    {"img": "/dist/images/skirt/梗豆-金鱼姬.png"},
    {"img": "/dist/images/skirt/春日制服部-春日宴.png"},
    {"img": "/dist/images/skirt/中牌-大红格.png"},
    {"img": "/dist/images/skirt/conomi-粉白格.png"},
    {"img": "/dist/images/skirt/中牌-伊梦.png"},
    {"img": "/dist/images/skirt/水果糖-小椿.png"},
    {"img": "/dist/images/skirt/夏日和风铃-花山院.png"},
    {"img": "/dist/images/skirt/兔缝缝-今生.png"},
    {"img": "/dist/images/skirt/中牌-樱吹雪.png"},
    {"img": "/dist/images/skirt/兔缝缝-少女心事.png"},
    {"img": "/dist/images/skirt/中牌-霜降.png"},
    {"img": "/dist/images/skirt/中牌-时雨.png"},
    {"img": "/dist/images/skirt/中牌-朝云.png"},
    {"img": "/dist/images/skirt/兔缝缝-蜜间星.png"},
    {"img": "/dist/images/skirt/夏日和风铃-柠檬海盐.png"},
    {"img": "/dist/images/skirt/胡桃木-柯基游泳.png"},
    {"img": "/dist/images/skirt/水果糖-抹茶威化.png"},
    {"img": "/dist/images/skirt/梗豆-布丁狗.png"},
    {"img": "/dist/images/skirt/中牌-莹草.png"},
    {"img": "/dist/images/skirt/Kazami-望月.png"},
    {"img": "/dist/images/skirt/梗豆-莺茶.png"},
    {"img": "/dist/images/skirt/兔缝缝-青野.png"},
    {"img": "/dist/images/skirt/燕子-四季奶青.png"},
    {"img": "/dist/images/skirt/夏日和风铃-薄荷糖.png"},
    {"img": "/dist/images/skirt/兔缝缝-雪松.png"},
    {"img": "/dist/images/skirt/夏日和风铃-樱萝.png"},
    {"img": "/dist/images/skirt/夏日和风铃-澄空.png"},
    {"img": "/dist/images/skirt/机智兔-丁香格.png"},
    {"img": "/dist/images/skirt/春日制服部-杪春枝.png"},
    {"img": "/dist/images/skirt/梗豆-梦鸢.png"},
    {"img": "/dist/images/skirt/夏日和风铃-海月银河.png"},
    {"img": "/dist/images/skirt/梗豆-野餐格.png"},
    {"img": "/dist/images/skirt/中牌-水无月.png"},
    {"img": "/dist/images/skirt/优马-速写.png"},
    {"img": "/dist/images/skirt/Kazami-桃花源.png"},
    {"img": "/dist/images/skirt/兔缝缝-温柔一刀.png"},
    {"img": "/dist/images/skirt/兔缝缝-白夜霓虹.png"},
    {"img": "/dist/images/skirt/夏日和风铃-樱木町.png"},
    {"img": "/dist/images/skirt/春日制服部-灰桜.png"},
    {"img": "/dist/images/skirt/兔缝缝-咩咩一刀.png"},
    {"img": "/dist/images/skirt/春日制服部-小酸奶.png"},
    {"img": "/dist/images/skirt/梗豆-霜衣.png"},
    {"img": "/dist/images/skirt/优马-铁子.png"},
    {"img": "/dist/images/skirt/优马-沙青.png"},
    {"img": "/dist/images/skirt/梗豆-蓝buff.png"},
    {"img": "/dist/images/skirt/胡桃木-小王子.png"},
    {"img": "/dist/images/skirt/中牌-冰淇淋.png"},
    {"img": "/dist/images/skirt/中牌-月辉.png"},
    {"img": "/dist/images/skirt/中牌-白溟.png"},
    {"img": "/dist/images/skirt/优马-B1.png"},
    {"img": "/dist/images/skirt/梗豆-汀兰.png"},
    {"img": "/dist/images/skirt/优马-清风.png"},
    {"img": "/dist/images/skirt/优马-S1.png"},
    {"img": "/dist/images/skirt/深夜幻境-豆浆.png"},
    {"img": "/dist/images/skirt/深夜幻境-爆米花.png"},
    {"img": "/dist/images/skirt/中牌-号外.png"},
    {"img": "/dist/images/skirt/中牌-宇宙.png"},
    {"img": "/dist/images/skirt/Kazami-冰浆果.png"},
    {"img": "/dist/images/skirt/夏日和风铃-星纱.png"},
    {"img": "/dist/images/skirt/兔缝缝-星野.png"},
    {"img": "/dist/images/skirt/梗豆-紫烟.png"},
    {"img": "/dist/images/skirt/夏日和风铃-紫薯.png"},
    {"img": "/dist/images/skirt/梗豆-玉桂狗.png"},
    {"img": "/dist/images/skirt/兔缝缝-大粉格子.png"},
    {"img": "/dist/images/skirt/须弥芥子-小红帽.png"},
    {"img": "/dist/images/skirt/梗豆-美乐蒂.png"},
    {"img": "/dist/images/skirt/春日制服部-花都.png"},
    {"img": "/dist/images/skirt/中牌-树莓红茶.png"},
    {"img": "/dist/images/skirt/春日制服部-童话梦.png"},
    {"img": "/dist/images/skirt/深夜幻境-限定情人节.png"},
    {"img": "/dist/images/skirt/中牌-螳螂粉.png"},
    {"img": "/dist/images/skirt/胡桃木-火曜日.png"},
    {"img": "/dist/images/skirt/梗豆-金玉姬.png"},
    {"img": "/dist/images/skirt/优马-冲鸭.png"},
    {"img": "/dist/images/skirt/优马-暮雨.png"},
    {"img": "/dist/images/skirt/桃子梅了-马戏.png"},
    {"img": "/dist/images/skirt/梗豆-白茶.png"},
    {"img": "/dist/images/skirt/Kazami-黄棕格.png"},
    {"img": "/dist/images/skirt/梗豆-清风望月.png"},
    {"img": "/dist/images/skirt/梗豆-小黄.png"},
    {"img": "/dist/images/skirt/三圆-姜饼女孩.png"},
    {"img": "/dist/images/skirt/奶尤甜-奶酪馅饼.png"},
    {"img": "/dist/images/skirt/中牌-山吹.png"},
    {"img": "/dist/images/skirt/优马-稻.png"},
    {"img": "/dist/images/skirt/优马-大小姐.png"},
    {"img": "/dist/images/skirt/呱呱制服-奶油松塔.png"},
    {"img": "/dist/images/skirt/夏日和风铃-冬青.png"},
    {"img": "/dist/images/skirt/优马-欧野.png"},
    {"img": "/dist/images/skirt/中牌-竹取.png"},
    {"img": "/dist/images/skirt/梗豆-松茶.png"},
    {"img": "/dist/images/skirt/梗豆-小绿.png"},
    {"img": "/dist/images/skirt/梗豆-佐保姬.png"},
    {"img": "/dist/images/skirt/梗豆-花眠.png"},
    {"img": "/dist/images/skirt/胡桃木-小海豚.png"},
    {"img": "/dist/images/skirt/胡桃木-梦幻绿.png"},
    {"img": "/dist/images/skirt/胡桃木-遐想律.png"},
    {"img": "/dist/images/skirt/梗豆-竹林晚.png"},
    {"img": "/dist/images/skirt/星月豚骨-波塞冬.png"},
    {"img": "/dist/images/skirt/兔缝缝-雾川海.png"},
    {"img": "/dist/images/skirt/深夜幻境-蓝柑苏打.png"},
    {"img": "/dist/images/skirt/梗豆-月霜.png"},
    {"img": "/dist/images/skirt/优马-黄昏.png"},
    {"img": "/dist/images/skirt/中牌-杜若琉璃.png"},
    {"img": "/dist/images/skirt/梗豆-绀叶.png"},
    {"img": "/dist/images/skirt/梗豆-越海之帆.png"},
    {"img": "/dist/images/skirt/优马-川.png"},
    {"img": "/dist/images/skirt/满员电车-泰迪熊.png"},
    {"img": "/dist/images/skirt/燕子-夏日情书.png"},
    {"img": "/dist/images/skirt/梗豆-江岛之夏.png"},
    {"img": "/dist/images/skirt/春日制服部-不落月.png"},
    {"img": "/dist/images/skirt/中牌-月下雫.png"},
    {"img": "/dist/images/skirt/优马-雪碧.png"},
    {"img": "/dist/images/skirt/优马-马卡龙.png"},
    {"img": "/dist/images/skirt/优马-晨风.png"},
    {"img": "/dist/images/skirt/梗豆-菖蒲.png"},
    {"img": "/dist/images/skirt/优马-G1.png"},
    {"img": "/dist/images/skirt/葵子-芋泥蛋糕.png"},
    {"img": "/dist/images/skirt/兔缝缝-堇色书.png"},
    {"img": "/dist/images/skirt/猫耳武士-幽雾.png"},
    {"img": "/dist/images/skirt/三圆-黑穗醋栗.png"},
    {"img": "/dist/images/skirt/太子加青团-春节.png"},
    {"img": "/dist/images/skirt/梗豆-野蔷薇.png"},
    {"img": "/dist/images/skirt/Kazami-红棕.png"},
    {"img": "/dist/images/skirt/中牌-沙华.png"},
    {"img": "/dist/images/skirt/深夜幻境-锦鲤.png"},
    {"img": "/dist/images/skirt/风物诗-红格.png"},
    {"img": "/dist/images/skirt/夏日和风铃-赤木檀.png"},
    {"img": "/dist/images/skirt/兔缝缝-爱晚.png"},
    {"img": "/dist/images/skirt/兔缝缝-线性代数.png"},
    {"img": "/dist/images/skirt/梗豆-金皮卡.png"},
    {"img": "/dist/images/skirt/优马-L1.png"},
    {"img": "/dist/images/skirt/中牌-琥珀.png"},
    {"img": "/dist/images/skirt/秋宝-洋甘菊.png"},
    {"img": "/dist/images/skirt/兔缝缝-小熊的群.png"},
    {"img": "/dist/images/skirt/梗豆-流沙之岚.png"},
    {"img": "/dist/images/skirt/中牌-千岁.png"},
    {"img": "/dist/images/skirt/兔缝缝-森中律.png"},
    {"img": "/dist/images/skirt/兔缝缝-圣诞格.png"},
    {"img": "/dist/images/skirt/胡桃木-岚.png"},
    {"img": "/dist/images/skirt/Kazami-旧林.png"},
    {"img": "/dist/images/skirt/秋宝-车轴草.png"},
    {"img": "/dist/images/skirt/Kazami-识君.png"},
    {"img": "/dist/images/skirt/深夜幻境-怡宝.png"},
    {"img": "/dist/images/skirt/夏日和风铃-芥川茶.png"},
    {"img": "/dist/images/skirt/兔缝缝-青泽高.png"},
    {"img": "/dist/images/skirt/兔缝缝-青禾.png"},
    {"img": "/dist/images/skirt/兔缝缝-森林来信.png"},
    {"img": "/dist/images/skirt/优马-海草.png"},
    {"img": "/dist/images/skirt/优马-浪.png"},
    {"img": "/dist/images/skirt/优马-兰格.png"},
    {"img": "/dist/images/skirt/梗豆-蓝白一号.png"},
    {"img": "/dist/images/skirt/优马-齐天大圣.png"},
    {"img": "/dist/images/skirt/中牌-宝蓝格.png"},
    {"img": "/dist/images/skirt/梗豆-帆水母.png"},
    {"img": "/dist/images/skirt/优马-金枪鱼.png"},
    {"img": "/dist/images/skirt/中牌-黛缥.png"},
    {"img": "/dist/images/skirt/春日制服部-风间澈.png"},
    {"img": "/dist/images/skirt/优马-凉飕飕.png"},
    {"img": "/dist/images/skirt/兔缝缝-戏鱼.png"},
    {"img": "/dist/images/skirt/春日制服部-无极.png"},
    {"img": "/dist/images/skirt/dokiboom-冈梨田.png"},
    {"img": "/dist/images/skirt/兔缝缝-丢丢.png"},
    {"img": "/dist/images/skirt/兔缝缝-咩嘢.png"},
    {"img": "/dist/images/skirt/七月半夏-泷岛海.png"},
    {"img": "/dist/images/skirt/胡桃木-暗黑薄荷冰.png"},
    {"img": "/dist/images/skirt/梗豆-小蓝.png"},
    {"img": "/dist/images/skirt/梗豆-灰粉.png"},
    {"img": "/dist/images/skirt/梗豆-蓝粉.png"},
    {"img": "/dist/images/skirt/优马-老灰粉.png"},
    {"img": "/dist/images/skirt/优马-花牌.png"},
    {"img": "/dist/images/skirt/优马-桜落.png"},
    {"img": "/dist/images/skirt/胡桃木-樱花金平糖.png"},
    {"img": "/dist/images/skirt/啦啦酱-葡萄汽水.png"},
    {"img": "/dist/images/skirt/板桥-电竞少女.png"},
    {"img": "/dist/images/skirt/梗豆-库洛米.png"},
    {"img": "/dist/images/skirt/春日制服部-浪漫不死.png"},
    {"img": "/dist/images/skirt/兔缝缝-极夜之歌.png"},
    {"img": "/dist/images/skirt/兔缝缝-红囚鸟.png"},
    {"img": "/dist/images/skirt/梗豆-赫玄.png"},
    {"img": "/dist/images/skirt/优马-赤朱丹彤.png"},
    {"img": "/dist/images/skirt/梗豆-蔓越莓.png"},
    {"img": "/dist/images/skirt/深夜幻境-山楂树.png"},
    {"img": "/dist/images/skirt/梗豆-赤鸦.png"},
    {"img": "/dist/images/skirt/优马-红浪漫.png"},
    {"img": "/dist/images/skirt/conomi-猪肝格.png"},
    {"img": "/dist/images/skirt/中牌-苦咖啡.png"},
    {"img": "/dist/images/skirt/春日制服部-栗栗生.png"},
    {"img": "/dist/images/skirt/梗豆-梨木.png"},
    {"img": "/dist/images/skirt/优马-烟粟.png"},
    {"img": "/dist/images/skirt/深夜幻境-叮叮铛.png"},
    {"img": "/dist/images/skirt/优马-玫森.png"},
    {"img": "/dist/images/skirt/conomi-神仙绿格.png"},
    {"img": "/dist/images/skirt/深夜幻境-云杉.png"},
    {"img": "/dist/images/skirt/兔缝缝-森泽中.png"},
    {"img": "/dist/images/skirt/胡桃木-天南星.png"},
    {"img": "/dist/images/skirt/兔缝缝-黑棕.png"},
    {"img": "/dist/images/skirt/梗豆-天体观测.png"},
    {"img": "/dist/images/skirt/胡桃木-湮灭.png"},
    {"img": "/dist/images/skirt/中牌-炭灰.png"},
    {"img": "/dist/images/skirt/中牌-烟灰.png"},
    {"img": "/dist/images/skirt/梗豆-夜樱.png"},
    {"img": "/dist/images/skirt/梗豆-雨月.png"},
    {"img": "/dist/images/skirt/梗豆-北极光.png"},
    {"img": "/dist/images/skirt/梗豆-黎明棋盘.png"},
    {"img": "/dist/images/skirt/梗豆-春风十里.png"},
    {"img": "/dist/images/skirt/KANKO-喜多东方.png"},
    {"img": "/dist/images/skirt/梗豆-花雫.png"},
    {"img": "/dist/images/skirt/Kuri-薄荷.png"},
    {"img": "/dist/images/skirt/PinoPocks-晒海.png"},
    {"img": "/dist/images/skirt/梗豆-梅茶杏子.png"},
    {"img": "/dist/images/skirt/胡桃木-屿.png"},
    {"img": "/dist/images/skirt/优马-GX-1.png"},
    {"img": "/dist/images/skirt/Kazami-溪桥.png"},
    {"img": "/dist/images/skirt/Kuri-灰蓝.png"},
    {"img": "/dist/images/skirt/优马-新干线.png"},
    {"img": "/dist/images/skirt/梗豆-蓝白灰.png"},
    {"img": "/dist/images/skirt/梗豆-奇迹之海.png"},
    {"img": "/dist/images/skirt/优马-铃兰.png"},
    {"img": "/dist/images/skirt/02JK-诸神黄昏.png"},
    {"img": "/dist/images/skirt/深夜幻境-夜空花火.png"},
];

// 生成随机数函数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
    default:
        return 0;
        break;
    }
}
