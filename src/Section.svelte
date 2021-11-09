<script lang="ts">
  export let title = "";
  export let price = 0;
</script>

<section>
  <p>{title}</p>
  <p>{price.toFixed(2).toLocaleString()}円/㎡</p>
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }
</style>
