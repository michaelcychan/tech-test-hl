<template>
  <p class="card-header product-name">
    <span style="color: red">{{ productName[0] }}</span
    >{{ productName.slice(1) }}
  </p>
</template>

<script>
export default {
  name: 'CardHeader',
  props: {
    productName: {
      type: String,
      required: true,
    },
  },
};
</script>
