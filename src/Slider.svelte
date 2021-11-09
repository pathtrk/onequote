<script lang="ts">
  import RangeSlider from "svelte-range-slider-pips";
  import type { Price, Coefficient } from "./Data";

  export let choice;
  export let data: Price | Coefficient;
</script>

<RangeSlider
  bind:values={choice}
  step={1}
  max={Object.keys(data).length - 1}
  formatter={(v) => Object.keys(data)[v]}
  handleFormatter={(v) => Object.values(data)[v]}
  all="label"
  float="true"
  pips
/>
