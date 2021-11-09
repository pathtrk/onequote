export interface Price {
  [area: number | string]: number;
}

export interface Coefficient {
  [grade: number | string]: number;
}

export const kasetsu: Price = {
  [1000]: 13700,
  [2000]: 13000,
  [3000]: 12100,
  [5000]: 12100,
  [10000]: 11000,
  [15000]: 10800,
  [20000]: 10800,
};

export const kasetsuLevels: Coefficient = {
  "3": 0.9,
  "4": 0.92,
  "5": 0.95,
  "6": 0.97,
  "7": 1.0,
  "8": 1.02,
  "9": 1.02,
  "10": 1.1,
  "12": 1.15,
  "14": 1.2,
};

export const bodyStruct: Price = {
  // 躯体構造
  "RC": 34500,
  "SRC": 35000
}

export const bodyUnderground: Coefficient = {
  // 地下階数
  "地下1階": 1.03,
  "地下なし": 1.00
}

export const bodyArea: Coefficient = {
  // 基準階面積（m2）
  [1400]: 0.98,
  [1200]: 0.99,
  [1000]: 1.00,
  [800]: 1.02,
  [600]: 1.05,
  [400]: 1.09
}

export const bodyLevels: Coefficient = {
  // 地上階数 + 地下階数
  [3]: 1.09,
  [4]: 1.05,
  [5]: 1.00,
  [6]: 1.01,
  [7]: 1.02,
}

export const bodyRatio: Coefficient = {
  // 基準階平面形状比
  [1]: 1.00,
  [2]: 1.03,
  [4]: 1.07,
  [6]: 1.11,
  [8]: 1.15,
  [10]: 1.19
}