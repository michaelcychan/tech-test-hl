<template>
  <div class="app" ref="app-container">
    <div class="task">
      <h2>Welcome to the H-L Technical Assessment</h2>
      <p>
        You are provided with a set of products and are required to create a
        products listing page for a footwear retailer.<br />
        Write functionality and styling to:
      </p>
      <ol>
        <li>Lay out all products in a responsive product grid</li>
        <li>Create a filter toggle that shows only available products</li>
        <li>Create a brand filter that shows only toggled brand products</li>
        <li>Add a counter for the number of resulting products</li>
        <li>
          Create a dropdown to sort all products into ascending or descending
          price order
        </li>
        <li>
          Add an option to sort all products by relevance - with all available
          products shown first in ascending rank order, then all unavailable
          products in ascending rank order.
        </li>
      </ol>
      <p>
        You will be assessed on both behaviour and design. Don't spend more than
        2 hours on this.
      </p>

      <h3>Instructions</h3>
      <p>
        To start, fork
        <a
          class="link"
          href="/"
          target="_blank"
          >this</a
        >
        project and set the project name to include your name. When you're
        finished, download the project and email the zipped file with a link to
        this project back to us.
        <br />
        If you wish to continue past the allocated time, please create another
        fork.
      </p>
      <hr />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3">
          <div class="filters">
            <h3>Filters</h3>
            <Filters
              :products="products"
              @filtering="(returnedProd) => (computedProducts = returnedProd)"
            />
            <!-- all filters-->
          </div>
        </div>

        <div class="col-lg-9">
          <div class="container-fluid product-grid">
            <div class="row">
              <div>
                Showing {{ computedProducts.length }} out of
                {{ products.length }}
              </div>
              <div
                v-for="product in computedProducts"
                class="col justify-content-center col-xl-3 col-lg-4 col-sm-12"
              >
                <ProductGridItem :product="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductGridItem from './components/ProductGridItem.vue';
import products from './data/products.json';
import Filters from './components/Filters.vue';

export default {
  name: 'App',
  components: {
    ProductGridItem,
    Filters,
  },
  data() {
    return {
      products,
      onlyAvailable: false,
      computedProducts: [],
    };
  },
};
</script>

<style>
.app {
  max-width: 1024px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #606569;
}

.link {
  color: #3a7f71;
}
</style>
