export interface Price {
  [area: number | string]: number;
}

export interface Coefficient {
  [grade: number | string]: number;
}


// 直接仮設

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
  [3]: 0.9,
  [4]: 0.92,
  [5]: 0.95,
  [6]: 0.97,
  [7]: 1.0,
  [8]: 1.02,
  [9]: 1.02,
  [10]: 1.1,
  [12]: 1.15,
  [14]: 1.2,
};

// 躯体

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


// 土工・地業

export const undergroundLevels: Price = {
  // 地下階数
  [0]: 26000,
  [1]: 54400,
  [2]: 50400,
  [3]: 48000,
}

export const undergroundArea: Coefficient = {
  // 地下階平均床面積
  [1400]: 0.97,
  [1200]: 0.98,
  [1000]: 1.00,
  [800]: 1.03,
  [600]: 1.05,
  [400]: 1.10
}

export const undergroundRatio: Coefficient = {
  // 地下階平面細長比
  [1]: 1.00,
  [2]: 1.02,
  [4]: 1.05,
  [6]: 1.08,
  [8]: 1.11,
  [10]: 1.14
}


// 外部仕上げ 
export const exteriorUnitPrice = 12000;

const exteriorAreaA: Coefficient = {
  // グレードA
  [1400]: 1.45,
  [1200]: 1.57,
  [1000]: 1.72,
  [800]: 1.93,
  [600]: 2.23,
  [400]: 2.72
}

const exteriorAreaB: Coefficient = {
  // グレードa
  [1400]: 0.84,
  [1200]: 0.91,
  [1000]: 1.00,
  [800]: 1.12,
  [600]: 1.30,
  [400]: 1.58
}

const exteriorAreaC: Coefficient = {
  // グレードA
  [1400]: 0.74,
  [1200]: 0.80,
  [1000]: 0.88,
  [800]: 0.99,
  [600]: 1.14,
  [400]: 1.39
}

export const exteriorArea = {
  "A": exteriorAreaA,
  "B": exteriorAreaB,
  "C": exteriorAreaC
}

export const exteriorRatio: Coefficient = {
  // 基準階平面形状比 
  [1]: 1.00,
  [2]: 1.00,
  [4]: 1.05,
  [6]: 1.11,
  [8]: 1.11,
  [10]: 1.11
}


// 内部仕上げ 
export const interiorUnitPrice = 12000;

const interiorAreaA: Coefficient = {
  // グレードA
  [1400]: 1.27,
  [1200]: 1.28,
  [1000]: 1.28,
  [800]: 1.28,
  [600]: 1.29,
  [400]: 1.30
}

const interiorAreaB: Coefficient = {
  // グレードa
  [1400]: 0.99,
  [1200]: 1.00,
  [1000]: 1.00,
  [800]: 1.01,
  [600]: 1.02,
  [400]: 1.04
}

const interiorAreaC: Coefficient = {
  // グレードA
  [1400]: 0.71,
  [1200]: 0.72,
  [1000]: 0.72,
  [800]: 0.73,
  [600]: 0.74,
  [400]: 0.77
}

export const interiorArea = {
  "A": interiorAreaA,
  "B": interiorAreaB,
  "C": interiorAreaC
}

export const interiorRatio: Coefficient = {
  // 基準階平面形状比 
  [1]: 1.00,
  [2]: 1.00,
  [4]: 1.05,
  [6]: 1.11,
  [8]: 1.11,
  [10]: 1.11
}

export const interiorLevels: Coefficient = {
  // 地上+地下階数
  [7]: 0.98,
  [9]: 1.00,
  [10]: 1.01,
  [12]: 1.03,
  [14]: 1.05
}
