import {
  getDefaultArtifactAttribute,
  TArtifactAttribute,
} from "./TArtifactAttribute";

export enum VisionElements {
  Pyro = "火",
  Hydro = "水",
  Anemo = "风",
  Electro = "雷",
  Dendro = "草",
  Cryo = "冰",
  Geo = "岩",
  Physic = "物理",
  Other = "其他",
}

export type TCharacterBuildInfo = {
  characterName: string;
  buildName: string;
  buildElement: VisionElements;

  data: TArtifactAttribute;
};

export function getDefaultCharacterBuildInfo(
  characterName: string,
  buildName: string,
  visionElement: VisionElements
): TCharacterBuildInfo {
  return {
    characterName: characterName,
    buildName: buildName,
    buildElement: visionElement,
    data: getDefaultArtifactAttribute(),
  };
}

export type TRecommendInfo = (keyof TArtifactAttribute)[][];

export function parseRecommendInfo(
  characterArtifactInfo: TCharacterBuildInfo,
  recommendInfo: TRecommendInfo
): TCharacterBuildInfo {
  let priority = 1.0;
  for (let it of recommendInfo) {
    for (let key of it) {
      characterArtifactInfo.data[key] = priority;
    }
    priority = Math.max(priority - 0.1, 0.1);
  }
  return characterArtifactInfo;
}
