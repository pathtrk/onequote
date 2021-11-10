<script lang="ts">
  import Slider from "./Slider.svelte";
  import Section from "./Section.svelte";
  import {
    kasetsu,
    kasetsuLevels,
    bodyArea,
    bodyLevels,
    bodyRatio,
    bodyStruct,
    bodyUnderground,
    exteriorArea,
    exteriorUnitPrice,
    exteriorRatio,
    interiorArea,
    interiorUnitPrice,
    interiorLevels,
    interiorRatio,
  } from "./Data";

  export let project: string;

  let totalArea = 0;

  let kasetsuLevelChoice: number;
  let kasetsuAreaChoice: number;
  let bodyStructChoice: number = 0;
  let bodyLevelChoice: number;
  let bodyUndergroundChoice: number = 0;
  let bodyAreaChoice: number;
  let bodyRatioChoice: number;
  let exteriorGrade: string = "A";
  let exteriorAreaChoice: number;
  let exteriorRatioChoice: number;
  let interiorGrade: string = "A";
  let interiorAreaChoice: number;
  let interiorRatioChoice: number;
  let interiorLevelChoice: number;

  $: totalPrice =
    (kasetsuPrice + bodyPrice + exteriorPrice + interiorPrice) * totalArea;

  $: kasetsuPrice =
    Object.values(kasetsu)[kasetsuAreaChoice] *
    Object.values(kasetsuLevels)[kasetsuLevelChoice];

  $: bodyPrice =
    Object.values(bodyArea)[bodyAreaChoice] *
    Object.values(bodyLevels)[bodyLevelChoice] *
    Object.values(bodyRatio)[bodyRatioChoice] *
    Object.values(bodyStruct)[bodyStructChoice] *
    Object.values(bodyUnderground)[bodyUndergroundChoice];

  $: exteriorPrice =
    (Object.values(exteriorArea[exteriorGrade])[exteriorAreaChoice] as number) *
    Object.values(exteriorRatio)[exteriorRatioChoice] *
    exteriorUnitPrice;

  $: interiorPrice =
    (Object.values(interiorArea[interiorGrade])[interiorAreaChoice] as number) *
    Object.values(interiorRatio)[interiorRatioChoice] *
    Object.values(interiorLevels)[interiorLevelChoice] *
    interiorUnitPrice;
</script>

<main>
  <h1>概算見積</h1>
  <h2>{project}</h2>

  <div class="container price">
    <h3>概算計: {Math.ceil(totalPrice).toLocaleString()}円</h3>
    <label for="total-area" class="value">
      @ <input
        type="number"
        name="total-area"
        bind:value={totalArea}
      />㎡</label
    >
  </div>

  <Section title="直接仮設" price={kasetsuPrice} />

  <div class="slider-container">
    <p class="key">延床面積(㎡)</p>
    <p class="value">{Object.values(kasetsu)[kasetsuAreaChoice]}円/㎡</p>
    <Slider data={kasetsu} bind:choice={kasetsuAreaChoice} />
  </div>

  <div class="slider-container">
    <p class="key">地上+地下階数</p>
    <p class="value">x {Object.values(kasetsuLevels)[kasetsuLevelChoice]}</p>
    <Slider data={kasetsuLevels} bind:choice={kasetsuLevelChoice} />
  </div>

  <Section title="躯体構造" price={bodyPrice} />

  <div class="container">
    <p class="key">構造</p>
    {#each Object.keys(bodyStruct) as name, i}
      <label for={name}>
        <input
          type="radio"
          name="underground"
          value={i}
          bind:group={bodyStructChoice}
        />
      </label>{name}
    {/each}
    <p class="value">{Object.values(bodyStruct)[bodyStructChoice]}円/㎡</p>
  </div>

  <div class="container">
    <p class="key">地下階数</p>
    {#each Object.keys(bodyUnderground) as name, i}
      <label for={name}>
        <input
          type="radio"
          name="struct"
          value={i}
          bind:group={bodyUndergroundChoice}
        />
      </label>{name}
    {/each}
    <p class="value">
      x {Object.values(bodyUnderground)[bodyUndergroundChoice]}
    </p>
  </div>

  <div class="slider-container">
    <p class="key">基準階面積</p>
    <p class="value">x {Object.values(bodyArea)[bodyAreaChoice]}</p>
    <Slider data={bodyArea} bind:choice={bodyAreaChoice} />
  </div>

  <div class="slider-container">
    <p class="key">地上+地下階数</p>
    <p class="value">x {Object.values(bodyLevels)[bodyLevelChoice]}</p>
    <Slider data={bodyLevels} bind:choice={bodyLevelChoice} />
  </div>

  <div class="slider-container">
    <p class="key">基準階平面比</p>
    <p class="value">x {Object.values(bodyRatio)[bodyRatioChoice]}</p>
    <Slider data={bodyRatio} bind:choice={bodyRatioChoice} />
  </div>

  <Section title="外部仕上げ" price={exteriorPrice} />

  <div class="container">
    <p class="key">グレード</p>
    {#each Object.keys(exteriorArea) as grade}
      <label for={grade}>
        <input
          type="radio"
          name="exteriorGrade"
          value={grade}
          bind:group={exteriorGrade}
        />
      </label>{grade}
    {/each}
  </div>

  <div class="slider-container">
    <p class="key">基準階面積</p>
    <p class="value">
      x {Object.values(exteriorArea[exteriorGrade])[exteriorAreaChoice]}
    </p>
    <Slider
      data={exteriorArea[exteriorGrade]}
      bind:choice={exteriorAreaChoice}
    />
  </div>

  <div class="slider-container">
    <p class="key">基準階平面比</p>
    <p class="value">x {Object.values(exteriorRatio)[exteriorRatioChoice]}</p>
    <Slider data={exteriorRatio} bind:choice={exteriorRatioChoice} />
  </div>

  <Section title="内部仕上げ" price={interiorPrice} />

  <div class="container">
    <p class="key">グレード</p>
    {#each Object.keys(interiorArea) as grade}
      <label for={grade}>
        <input
          type="radio"
          name="interiorGrade"
          value={grade}
          bind:group={interiorGrade}
        />
      </label>{grade}
    {/each}
  </div>

  <div class="slider-container">
    <p class="key">基準階面積</p>
    <p class="value">
      x {Object.values(interiorArea[interiorGrade])[interiorAreaChoice]}
    </p>
    <Slider
      data={interiorArea[interiorGrade]}
      bind:choice={interiorAreaChoice}
    />
  </div>

  <div class="slider-container">
    <p class="key">基準階平面比</p>
    <p class="value">x {Object.values(interiorRatio)[interiorRatioChoice]}</p>
    <Slider data={interiorRatio} bind:choice={interiorRatioChoice} />
  </div>

  <div class="slider-container">
    <p class="key">地上+地下階数</p>
    <p class="value">x {Object.entries(interiorLevels)[interiorLevelChoice]}</p>
    <Slider data={interiorLevels} bind:choice={interiorLevelChoice} />
  </div>
</main>

<style>
  main {
    text-align: left;
    padding: 2em 1em 10em;
    width: 60%;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #20df6a;
    font-size: 2em;
    font-weight: 100;
  }

  input[type="number"] {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
  }
  .container {
    margin: 5px auto;
    align-items: baseline;
    display: flex;
    width: 85%;
  }

  .container.price {
    width: 100%;
  }

  .container .key {
    width: 18%;
  }
  .container input {
    margin-left: 10px;
  }
  .container .value {
    margin-left: auto;
  }

  .slider-container {
    margin: 0 auto;
    width: 85%;
    height: 10em;
    --range-handle-focus: #404ad4; /* focussed handle color */
  }

  .key {
    margin: 0;
  }

  .value {
    text-align: right;
    margin: 0 0 20px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
