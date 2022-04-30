/**
 * 对于合适的属性的加成最高值在最终分数的占比 0~1
 */
import {
  getDefaultArtifactAttribute,
  TArtifactAttribute,
} from "../type/TArtifactAttribute";
import { DArtifactLevelUpInfo } from "../data/DArtifactLevelUpInfo";
import { TCharacterBuildInfo } from "../type/TCharacterBuildInfo";
import {
  getDefaultArtifactScore,
  TArtifactScore,
} from "../type/TArtifactScore";
import { TCharacterBuildNameAndScores } from "../type/TCharacterBuildNameAndScores";
import { characterBuildInfos } from "../data/DCharacterBuildInfos";

export const attributeApplicabilityScoreInTotalScore: number = 0.25;

/**
 * 满分分数
 */
export const maxScore: number = 100;

/**
 * 计算属性适用性前的最高分数
 */
export const maxScoreBeforeCalcAttributeApplicability: number =
  maxScore * (1 - attributeApplicabilityScoreInTotalScore);

export const maxScorePerAttribute: number =
  (maxScoreBeforeCalcAttributeApplicability * 2) / 3;

export function getValueToScoreScaler(): TArtifactAttribute {
  const result: TArtifactAttribute = getDefaultArtifactAttribute();

  for (let resultKey in result) {
    const maxPerUpgrade: number = DArtifactLevelUpInfo[3][resultKey];
    result[resultKey] = maxScorePerAttribute / (maxPerUpgrade * 6);
  }

  return result;
}

export function multiplyWithCharacterInfo(
  artifactScore: TArtifactScore,
  characterArtifactInfo: TCharacterBuildInfo
): TArtifactScore {
  const cai = characterArtifactInfo;
  const maxMultiplier = maxScore / maxScoreBeforeCalcAttributeApplicability - 1;

  const result = getDefaultArtifactScore();

  let sumResult = 0;
  for (let key in getDefaultArtifactAttribute()) {
    const caiV = cai.data[key];
    const multiplier = maxMultiplier * caiV;
    const score = artifactScore.data[key];
    const multipliedScore = score * (1 + multiplier);

    result.data[key] = multipliedScore;
    sumResult += multipliedScore;
  }
  result.sum = sumResult;
  result.sumInPercentage = (sumResult / maxScore) * 100;

  return result;
}

export function calcArtifactScore(
  artifactInfo: TArtifactAttribute
): TArtifactScore {
  const valueToScoreScaler = getValueToScoreScaler();
  console.log(artifactInfo);

  const result = getDefaultArtifactScore();

  let sumResult = 0;
  for (let key in getDefaultArtifactAttribute()) {
    const value = artifactInfo[key];
    const scaler = valueToScoreScaler[key];

    const score = value * scaler;

    result.data[key] = score;
    sumResult += score;
  }
  result.sum = sumResult;
  result.sumInPercentage =
    (sumResult / maxScoreBeforeCalcAttributeApplicability) * 100;

  return result;
}

export function getScoreOfAllCharacterBuild(
  score: TArtifactScore
): TCharacterBuildNameAndScores {
  const result: TCharacterBuildNameAndScores = new Map();

  for (let it of characterBuildInfos) {
    result.set(it, multiplyWithCharacterInfo(score, it));
  }

  return result;
}
