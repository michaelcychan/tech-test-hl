<template>
<div
        v-if="isAvailable"
        style="color: blue"
        class="product-availability"
      >
        In Stock
      </div>
      <div v-else style="color: red">Out of Stock</div>
</template>

<script>
export default {
  name: 'StockText',
  props: {
    isAvailable: {
      type: Boolean,
      required: true,
    }
  }
}
</script>