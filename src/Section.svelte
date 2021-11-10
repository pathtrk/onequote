<script lang="ts">
  export let title = "";
  export let price = 0;
</script>

<section>
  <p>{title}</p>
  <p>{price.toFixed(2).toLocaleString()}円/㎡</p>
</section>

<style>
  p {
    margin-bottom: 0.6em;
  }
  section {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin: 1em auto 2em;
    border-bottom: 1px dashed #777;
  }
</style>
