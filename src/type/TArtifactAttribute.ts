export type TArtifactAttribute = {
  hp: number;
  atk: number;
  def: number;
  /**
   * Element Mastery
   */
  em: number;
  hpP: number;
  atkP: number;
  defP: number;
  /**
   * Element Recharge
   */
  er: number;
  /**
   * Crit Rate
   */
  cr: number;
  /**
   * Crit Damage
   */
  cd: number;
  [key: string]: number;
};

export function getDefaultArtifactAttribute(): TArtifactAttribute {
  return {
    atk: 0,
    atkP: 0,
    cd: 0,
    cr: 0,
    def: 0,
    defP: 0,
    em: 0,
    er: 0,
    hp: 0,
    hpP: 0,
  };
}

export function attNameToZhStr(string: string): string {
  switch (string) {
    case "hp":
      return "生命值";
    case "atk":
      return "攻击力";
    case "def":
      return "防御力";

    case "em":
      return "元素精通";
    case "hpP":
      return "生命值%";
    case "atkP":
      return "攻击力%";
    case "defP":
      return "防御力%";

    case "er":
      return "元素充能效率";
    case "cr":
      return "暴击率";
    case "cd":
      return "暴击伤害";
    default:
      return "";
  }
}
