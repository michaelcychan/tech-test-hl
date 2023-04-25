<template>
  <div class="card product-grid-item mx-2 my-2">
    <img
      :class="{
        'product-image-instock': product.isAvailable,
        'product-image-outofstock': !product.isAvailable,
      }"
      :src="product.image"
    />
    <CardHeader :productName="product.name" />

    <!-- below few line were refactored into a separate component-->
    <!-- <p class="card-header product-name">
      <span style="color: red">{{ product.name[0] }}</span
      >{{ product.name.slice(1) }}
    </p> -->

    <div class="card-text p-2">
      <div class="product-brand">{{ product.brand }}</div>
      <div class="product-price">
        <span style="color: green">£</span> {{ product.price }}
      </div>
    </div>
    <div class="card-footer">
      <StockText :isAvailable='product.isAvailable' />
      
      <!--below codes were refactored to a separate component file-->
      <!-- <div
        v-if="product.isAvailable"
        style="color: blue"
        class="product-availability"
      >
        In Stock
      </div>
      <div v-else style="color: red">Out of Stock</div> -->
    </div>
  </div>
</template>

<script>
import CardHeader from './CardHeader.vue';
import StockText from './StockText.vue';

export default {
  name: 'ProductGridItem',
  props: {
    product: { type: Object, required: true, default: () => ({}) },
  },
  // components added to refactor Card parts
  components: {
    CardHeader,
    StockText,
  },
};
</script>

<style scoped>
.product-grid-item {
  background: #ddebe8;
  max-width: 150px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.4s;
}

.product-grid-item:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  top: -2px;
  left: 2px;
}

.product-image-instock,
.product-image-outofstock {
  width: 100%;
  border-radius: 10px;
}

.product-image-outofstock {
  filter: brightness(30%);
}

.product-name {
  font-weight: bold;
}
</style>
