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
  } from "./Data";

  export let project: string;

  let totalArea = 1000;
  let levelChoice: number;

  let kasetsuAreaChoice: number;
  let bodyStructChoice: number = 0;
  let bodyUndergroundChoice: number = 0;
  let bodyAreaChoice: number;
  let bodyRatioChoice: number;

  $: totalPrice = (kasetsuPrice + bodyPrice) * totalArea;

  $: kasetsuPrice =
    Object.values(kasetsu)[kasetsuAreaChoice] *
    Object.values(kasetsuLevels)[levelChoice];

  $: bodyPrice =
    Object.values(bodyArea)[bodyAreaChoice] *
    Object.values(bodyLevels)[levelChoice] *
    Object.values(bodyRatio)[bodyRatioChoice] *
    Object.values(bodyStruct)[bodyStructChoice] *
    Object.values(bodyUnderground)[bodyUndergroundChoice];
</script>

<main>
  <h1>概算見積</h1>
  <h2>{project}</h2>

  <div class="radio-container">
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
    <p class="value">x {Object.values(kasetsuLevels)[levelChoice]}</p>
    <Slider data={kasetsuLevels} bind:choice={levelChoice} />
  </div>

  <Section title="躯体構造" price={bodyPrice} />

  <div class="radio-container">
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

  <div class="radio-container">
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
    <p class="value">x {Object.values(bodyLevels)[levelChoice]}</p>
    <Slider data={bodyLevels} bind:choice={levelChoice} />
  </div>

  <div class="slider-container">
    <p class="key">基準階平面比</p>
    <p class="value">x {Object.values(bodyRatio)[bodyRatioChoice]}</p>
    <Slider data={bodyRatio} bind:choice={bodyRatioChoice} />
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
  .radio-container {
    margin: 5px auto;
    align-items: baseline;
    display: flex;
    width: 80%;
  }

  .radio-container .key {
    width: 18%;
  }
  .radio-container input {
    margin-left: 10px;
  }
  .radio-container .value {
    margin-left: auto;
  }

  .slider-container {
    margin: 0 auto;
    width: 80%;
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
