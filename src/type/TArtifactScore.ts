import {
  getDefaultArtifactAttribute,
  TArtifactAttribute,
} from "./TArtifactAttribute";

export type TArtifactScore = {
  data: TArtifactAttribute;

  sum: number;
  sumInPercentage: number;
};

export function getDefaultArtifactScore(): TArtifactScore {
  return { data: getDefaultArtifactAttribute(), sum: 0, sumInPercentage: 0 };
}
