import React, {ReactNode} from "react";
import "./App.less";
import {
  attNameToZhStr,
  getDefaultArtifactAttribute,
  TArtifactAttribute,
} from "./type/TArtifactAttribute";
import {
  calcArtifactScore,
  getScoreOfAllCharacterBuild,
} from "./utils/ArtifactUtils";

class Props {
}

class State {
  artifactInfo: TArtifactAttribute;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      artifactInfo: getDefaultArtifactAttribute(),
    };
  }

  render(): ReactNode {
    let {artifactInfo} = this.state;
    const infoList = Object.keys(artifactInfo).map((key) => (
      <div key={key} className={"InfoInputItem"}>
        <div className={"InfoInputItemName"}>{attNameToZhStr(key)}:</div>
        <input
          className={"InfoInputItemInput"}
          type={"number"}
          step={0.01}
          defaultValue={artifactInfo[key].toFixed(2)}
          onChange={(value) => {
            const num = parseFloat(value.target.value);
            if (isNaN(num)) return;

            this.setState((prevState: State) => {
              prevState.artifactInfo[key] = num;
              return prevState;
            });
          }}
        />
      </div>
    ));
    const score = calcArtifactScore(artifactInfo);
    const characterBuildScores = getScoreOfAllCharacterBuild(score);
    const characterBuilds = Array.from(characterBuildScores.entries())
      .sort((a, b) => (a[1].sumInPercentage <= b[1].sumInPercentage ? 1 : -1))
      .map(([buildInfo, score]) => (
        <div key={JSON.stringify(buildInfo)} className={"CharacterBuildItem"}>
          <div>
            {buildInfo.characterName} - {buildInfo.buildName} -{" "}
            {buildInfo.buildElement}
          </div>
          <div>{score.sumInPercentage.toFixed(2)}%</div>
        </div>
      ));

    return (
      <div className={"App"}>
        <div className={"AppContent"}>
          <div className={"InfoInput"}>{infoList}</div>
          <div className={"Score"}>
            成长: {score.sumInPercentage.toFixed(2)}%
          </div>
          <div className={"CharacterBuilds"}>{characterBuilds}</div>
        </div>
      </div>
    );
  }
}
