<template>
  <div>
    <input
      type="checkbox"
      class="form-check-input"
      name="chkBoxOnlyAvailable"
      id="chkBoxOnlyAvailable"
      v-bind="onlyAvailable"
      v-on:change="toggleShowOnlyAvailable"
    />
    <label for="chkBoxOnlyAvailable" class="form-check-label">
      Show in stock only</label
    >
  </div>

  <!-- Should have removed this part, incorporated into sorting-->
  <!-- <div>
    <input
      type="checkbox"
      class="form-check-input"
      name="chkBoxRelevance"
      id="chkBoxRelevance"
      v-bind="relevance"
      v-on:change="toggleSortRelevance"
    />
    <label for="chkBoxRelevance" class="form-check-label">
      Sort in Relevance</label
    >
  </div> -->

  <!-- Replaced by the Multiple Brand Selector-->
  <!-- <div>
    <label for="brand">Select a brand</label>
    <select name="brand" id="brand" v-model="brand">
      <option value="all" selected>All Brands</option>
      <option v-for="brand in allBrands" :value="brand">{{ brand }}</option>
    </select>
  </div> -->

  <div>
    Multiple brands Selector:
    <!--Newly added-->
    <div v-for="brand in allBrands" :key="brand">
      <input
        type="checkbox"
        class="form-check-input"
        :id="brand"
        :name="brand"
        :value="brand"
        v-model="selectedBrands"
      />
      <label :for="brand" class="form-check-label">{{ brand }}</label>
    </div>
  </div>

  <div>
    <div class="input-group-prepend">
      <label for="sort">Sorting: </label>
    </div>
    <select class="custom-select" name="sort" id="sort" v-model="sorting">
      <option value="unsorted" selected>Unsort</option>
      <option value="asec">Ascending By Price</option>
      <option value="desc">Descending By Price</option>
      <option value="relevance">By Relevance</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      onlyAvailable: false,
      // brand: 'all', // replaced by Multiple Brand Selector
      allBrands: [],
      sorting: 'unsorted',
      // relevance: false, // obsolete, incorporated into sorting
      selectedBrands: [], // newly added
    };
  },
  emits: ['filtering'],
  created() {
    this.products.forEach((prod) => {
      if (!this.allBrands.includes(prod.brand)) {
        this.allBrands.push(prod.brand);
        this.selectedBrands.push(prod.brand);
      }
    });
    this.$emit('filtering', this.computedProducts);
  },
  updated() {
    this.$emit('filtering', this.computedProducts);
  },
  methods: {
    toggleShowOnlyAvailable() {
      this.onlyAvailable = !this.onlyAvailable;
    },
    toggleSortRelevance() {
      this.relevance = !this.relevance;
    },
  },
  computed: {
    computedProducts() {
      return (
        this.products
          .filter((product) => {
            if (this.onlyAvailable) {
              return product.isAvailable;
            } else {
              return product;
            }
          })
          .filter((prod) => {
            return this.selectedBrands.includes(prod.brand);
          })
          // this lower filter is replaced by the above Multiple Brand Selector
          // .filter((prod) => {
          //   if (this.brand === 'all') {
          //     return prod;
          //   } else {
          //     return this.brand === prod.brand;
          //   }
          // })
          .sort((a, b) => {
            if (this.sorting === 'unsorted') {
              return 0;
            } else if (this.sorting === 'asec') {
              return a.price - b.price;
            } else if (this.sorting === 'desc') {
              return b.price - a.price;
            } else {
              if (a.isAvailable == b.isAvailable) {
                if (a.rank !== null && b.rank !== null) {
                  return a.rank - b.rank;
                } else if (a.rank === null) {
                  return 1;
                } else {
                  return -1;
                }
              } else if (a.isAvailable) {
                return -1;
              } else {
                return 1;
              }
            }
          })
      );
    },
  },
};
</script>
