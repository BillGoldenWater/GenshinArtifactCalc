import {
  getDefaultCharacterBuildInfo,
  parseRecommendInfo,
  TCharacterBuildInfo,
  TRecommendInfo,
  VisionElements,
} from "../type/TCharacterBuildInfo";

export type TCharacterBuildInfoRawData = {
  characterName: string;
  buildName: string;
  buildElement: VisionElements;

  subStatRecommendInfo: TRecommendInfo;
};

export const CharacterBuildInfoRawDatas: TCharacterBuildInfoRawData[] = [
  {
    characterName: "阿贝多",
    buildName: "输出: 离场",
    buildElement: VisionElements.Geo,
    subStatRecommendInfo: [
      ["cr", "cd"],
      ["defP"],
      ["atkP"],
      ["er"],
      ["def"],
      ["atk"],
    ],
  },

  {
    characterName: "埃洛伊",
    buildName: "辅助: 元素爆发",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["er"], ["atk"]],
  },

  {
    characterName: "安柏",
    buildName: "辅助",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["er"], ["cr", "cd"], ["atkP"], ["em"], ["atk"]],
  },
  {
    characterName: "安柏",
    buildName: "输出",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["cd"], ["atkP"], ["em"], ["er"], ["atk"]],
  },

  {
    characterName: "荒泷一斗",
    buildName: "输出",
    buildElement: VisionElements.Geo,
    subStatRecommendInfo: [
      ["cr", "cd"],
      ["defP"],
      ["er"],
      ["atkP"],
      ["def"],
      ["atk"],
    ],
  },

  {
    characterName: "芭芭拉",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["hpP"], ["er"], ["hp"]],
  },
  {
    characterName: "芭芭拉",
    buildName: "输出",
    buildElement: VisionElements.Hydro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["atk"]],
  },

  {
    characterName: "北斗",
    buildName: "输出: 离场",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["atk"], ["em"]],
  },

  {
    characterName: "班尼特",
    buildName: "辅助: 元素爆发",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"]],
  },
  {
    characterName: "班尼特",
    buildName: "输出",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["cr", "cd"], ["em"], ["atkP"], ["er"]],
  },
  {
    characterName: "班尼特",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["er"], ["hpP"], ["hp"]],
  },

  {
    characterName: "重云",
    buildName: "辅助: 元素爆发",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["er"], ["atk"]],
  },

  {
    characterName: "迪卢克",
    buildName: "输出",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["er"]],
  },

  {
    characterName: "迪奥娜",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["hpP"], ["er"], ["hp"]],
  },

  {
    characterName: "优菈",
    buildName: "输出",
    buildElement: VisionElements.Physic,
    subStatRecommendInfo: [["cr", "cd"], ["er"], ["atkP"], ["atk"]],
  },

  {
    characterName: "菲谢尔",
    buildName: "输出 & 输出: 离场",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },

  {
    characterName: "甘雨",
    buildName: "输出: 融化",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["cr", "cd"], ["em"], ["atkP"], ["atk"]],
  },
  {
    characterName: "甘雨",
    buildName: "输出: 冻结",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["atk"]],
  },
  {
    characterName: "甘雨",
    buildName: "输出: 离场",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["er"], ["cr", "cd"], ["atkP"], ["em"], ["atk"]],
  },

  {
    characterName: "五郎",
    buildName: "辅助",
    buildElement: VisionElements.Geo,
    subStatRecommendInfo: [["er"], ["defP"], ["cr"]],
  },

  {
    characterName: "胡桃",
    buildName: "输出",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["cr", "cd"], ["em"], ["hpP"], ["atkP"], ["er"]],
  },

  {
    characterName: "琴",
    buildName: "辅助: 元素爆发",
    buildElement: VisionElements.Anemo,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },

  {
    characterName: "枫原万叶",
    buildName: "辅助: 精通",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["em"], ["er"], ["atkP"], ["cr", "cd"]],
  },

  {
    characterName: "凯亚",
    buildName: "辅助: 元素爆发",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["er"], ["cr", "cd"], ["atkP"], ["em"], ["atk"]],
  },
  {
    characterName: "凯亚",
    buildName: "输出: 冰",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["cd"], ["atkP"], ["er"], ["cr"], ["atk"]],
  },

  {
    characterName: "神里绫华",
    buildName: "输出",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["cd"], ["atkP"], ["er"], ["cr"], ["atk"]],
  },

  {
    characterName: "神里绫人",
    buildName: "输出",
    buildElement: VisionElements.Hydro,
    subStatRecommendInfo: [
      ["cr", "cd"],
      ["atkP"],
      ["er"],
      ["hpP"],
      ["em"],
      ["atk"],
    ],
  },

  {
    characterName: "刻晴",
    buildName: "输出: 物理",
    buildElement: VisionElements.Physic,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["atk"], ["er"]],
  },
  {
    characterName: "刻晴",
    buildName: "输出: 雷",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["atk"], ["er"]],
  },

  {
    characterName: "可莉",
    buildName: "输出",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["er"], ["atk"]],
  },

  {
    characterName: "九条裟罗",
    buildName: "辅助: 元素爆发",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["atk"]],
  },

  {
    characterName: "丽莎",
    buildName: "输出: 离场",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["er"], ["cr", "cd"], ["atkP"], ["em"], ["atk"]],
  },
  {
    characterName: "丽莎",
    buildName: "输出: 雷",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },
  {
    characterName: "丽莎",
    buildName: "输出: 精通",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["em"], ["er"], ["atkP"], ["cr", "cd"]],
  },

  {
    characterName: "莫娜",
    buildName: "核弹",
    buildElement: VisionElements.Hydro,
    subStatRecommendInfo: [["cr", "cd"], ["er"], ["atkP"], ["em"]],
  },
  {
    characterName: "莫娜",
    buildName: "辅助: 冻结",
    buildElement: VisionElements.Hydro,
    subStatRecommendInfo: [["er"], ["cr"], ["atkP"]],
  },
  {
    characterName: "莫娜",
    buildName: "输出",
    buildElement: VisionElements.Hydro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["er"]],
  },

  {
    characterName: "凝光",
    buildName: "输出 & 辅助: 元素爆发",
    buildElement: VisionElements.Geo,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["atk"]],
  },

  {
    characterName: "诺艾尔",
    buildName: "输出",
    buildElement: VisionElements.Geo,
    subStatRecommendInfo: [["cr", "cd"], ["er"], ["defP"]],
  },
  {
    characterName: "诺艾尔",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["defP"], ["def"], ["er"]],
  },

  {
    characterName: "七七",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["atkP"], ["er"], ["atk"]],
  },

  {
    characterName: "雷电将军",
    buildName: "输出: 雷",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["atk"], ["em"]],
  },

  {
    characterName: "雷泽",
    buildName: "输出",
    buildElement: VisionElements.Physic,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },

  {
    characterName: "罗莎莉亚",
    buildName: "辅助: 元素爆发",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["cr", "cd"], ["em"], ["atkP"], ["er"], ["atk"]],
  },
  {
    characterName: "罗莎莉亚",
    buildName: "输出: 冰",
    buildElement: VisionElements.Cryo,
    subStatRecommendInfo: [["cd"], ["atkP"], ["er"], ["cr"], ["atk"]],
  },

  {
    characterName: "珊瑚宫心海",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["hpP"], ["er"], ["atkP"], ["hp"], ["atk"]],
  },
  {
    characterName: "珊瑚宫心海",
    buildName: "输出",
    buildElement: VisionElements.Hydro,
    subStatRecommendInfo: [["hpP"], ["er"], ["atkP"], ["hp"], ["atk"]],
  },

  {
    characterName: "早柚",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["er"], ["em"], ["atkP"]],
  },

  {
    characterName: "申鹤",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["atkP"], ["er"], ["cr", "cd"], ["atk"]],
  },

  {
    characterName: "砂糖",
    buildName: "辅助: 精通",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["em"], ["atkP"], ["cr", "cd"], ["er"]],
  },

  {
    characterName: "达达利亚",
    buildName: "输出",
    buildElement: VisionElements.Hydro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["er"], ["atk"]],
  },

  {
    characterName: "托马",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["er"], ["hpP"], ["cr"], ["hp"]],
  },

  {
    characterName: "旅行者 (风)",
    buildName: "输出: 风",
    buildElement: VisionElements.Anemo,
    subStatRecommendInfo: [["em"], ["er"], ["atkP"], ["cr", "cd"], ["atk"]],
  },
  {
    characterName: "旅行者 (风)",
    buildName: "输出: 物理",
    buildElement: VisionElements.Physic,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["atk"], ["er"]],
  },

  {
    characterName: "旅行者 (岩)",
    buildName: "输出: 岩",
    buildElement: VisionElements.Geo,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["atk"]],
  },
  {
    characterName: "旅行者 (岩)",
    buildName: "输出: 物理",
    buildElement: VisionElements.Physic,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["atk"]],
  },

  {
    characterName: "旅行者 (雷)",
    buildName: "辅助",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["er"], ["atkP"], ["cr", "cd"], ["atk"]],
  },

  {
    characterName: "温迪",
    buildName: "输出: 离场",
    buildElement: VisionElements.Anemo,
    subStatRecommendInfo: [["em"], ["er"], ["atkP"], ["cr", "cd"], ["atk"]],
  },

  {
    characterName: "香菱",
    buildName: "输出: 离场",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["er"], ["cr", "cd"], ["atkP"], ["em"], ["atk"]],
  },
  {
    characterName: "香菱",
    buildName: "输出: 物理",
    buildElement: VisionElements.Physic,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },

  {
    characterName: "魈",
    buildName: "输出",
    buildElement: VisionElements.Anemo,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },

  {
    characterName: "行秋",
    buildName: "输出: 离场",
    buildElement: VisionElements.Hydro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },

  {
    characterName: "辛焱",
    buildName: "输出",
    buildElement: VisionElements.Physic,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["atk"], ["defP"]],
  },
  {
    characterName: "辛焱",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["defP", "atkP"], ["cr", "cd"], ["er"]],
  },

  {
    characterName: "八重神子",
    buildName: "输出: 离场",
    buildElement: VisionElements.Electro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },

  {
    characterName: "烟绯",
    buildName: "输出",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["er"], ["em"], ["atk"]],
  },
  {
    characterName: "烟绯",
    buildName: "辅助: 盾",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["er"], ["hpP"], ["hp"]],
  },

  {
    characterName: "宵宫",
    buildName: "输出",
    buildElement: VisionElements.Pyro,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["em"], ["er"], ["atk"]],
  },

  {
    characterName: "云堇",
    buildName: "辅助",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["defP"], ["er"], ["def"], ["cr"]],
  },

  {
    characterName: "钟离",
    buildName: "辅助: 盾",
    buildElement: VisionElements.Other,
    subStatRecommendInfo: [["hpP"], ["hp"], ["er"]],
  },
  {
    characterName: "钟离",
    buildName: "辅助: 元素爆发",
    buildElement: VisionElements.Geo,
    subStatRecommendInfo: [
      ["cr", "cd"],
      ["atkP"],
      ["hpP"],
      ["er"],
      ["atk"],
      ["hp"],
    ],
  },
  {
    characterName: "钟离",
    buildName: "输出: 物理",
    buildElement: VisionElements.Physic,
    subStatRecommendInfo: [["cr", "cd"], ["atkP"], ["hpP"], ["er"], ["atk"]],
  },
];

function getCharacterBuildInfos(): TCharacterBuildInfo[] {
  const result: TCharacterBuildInfo[] = [];

  for (let data of CharacterBuildInfoRawDatas) {
    const info = getDefaultCharacterBuildInfo(
      data.characterName,
      data.buildName,
      data.buildElement
    );
    result.push(parseRecommendInfo(info, data.subStatRecommendInfo));
  }

  return result;
}

export const characterBuildInfos = getCharacterBuildInfos();
