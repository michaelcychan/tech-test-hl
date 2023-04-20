import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Filters from '../Filters.vue';

const mockProducts = [
  {
    "name": "In Stock Expensive Gucci",
    "price": 5000,
    "image": "https://picsum.photos/150",
    "rank": 1,
    "brand": "Gucci",
    "isAvailable": true
  },{
    "name": "Out of Stock Expensive Gucci",
    "price": 5000,
    "image": "https://picsum.photos/150",
    "rank": 10,
    "brand": "Gucci",
    "isAvailable": false,
  }, {
    "name": "In Stock Cheap Fake",
    "price": 100,
    "image": "https://picsum.photos/150",
    "rank": null,
    "brand": "Cuggi",
    "isAvailable": true,
  }, {
    "name": "Out of Stock Cheap Fake",
    "price": 100,
    "image": "https://picsum.photos/150",
    "rank": 500,
    "brand": "Cuggi",
    "isAvailable": false,
  }
]

describe('Filters', () => {
  describe('Show all items', () => {
    it('shows all items by default', async () => {
      const wrapper = mount(Filters, {props: {products: mockProducts}})

      await wrapper.vm.$emit('filtering');

      const emittedProducts = wrapper.emitted().filtering[wrapper.emitted().filtering.length - 2][0]
      expect(emittedProducts).toBeTruthy;
      expect(emittedProducts.length).toBe(4);
      expect(emittedProducts[0].name).toBe('In Stock Expensive Gucci');
      expect(emittedProducts[1].name).toBe('Out of Stock Expensive Gucci');
      expect(emittedProducts[2].name).toBe('In Stock Cheap Fake');
      expect(emittedProducts[3].name).toBe('Out of Stock Cheap Fake');
    })
  });
  describe('Stock Only checkbox', () => {
    it('shows only product in stocks if checked', async () => {
      const wrapper = mount(Filters, {props: {products: mockProducts}})

      const inStockCheckbox = wrapper.find('input[id="chkBoxOnlyAvailable"]')

      await inStockCheckbox.setChecked();

      await wrapper.vm.$emit('filtering');

      const emittedProducts = wrapper.emitted().filtering[wrapper.emitted().filtering.length - 2][0]
      expect(emittedProducts).toBeTruthy;
      expect(emittedProducts.length).toBe(2);
      expect(emittedProducts[0].name).toBe('In Stock Expensive Gucci');
      expect(emittedProducts[1].name).toBe('In Stock Cheap Fake');
    });
    it('shows all products if unchecked', async () => {
      const wrapper = mount(Filters, {props: {products: mockProducts}})

      const inStockCheckbox = wrapper.find('input[id="chkBoxOnlyAvailable"]')

      await inStockCheckbox.setChecked();
      await inStockCheckbox.setChecked(false);

      await wrapper.vm.$emit('filtering');

      const emittedProducts = wrapper.emitted().filtering[wrapper.emitted().filtering.length - 2][0]
      expect(emittedProducts).toBeTruthy;
      expect(emittedProducts.length).toBe(4);
      expect(emittedProducts[0].name).toBe('In Stock Expensive Gucci');
      expect(emittedProducts[1].name).toBe('Out of Stock Expensive Gucci');
      expect(emittedProducts[2].name).toBe('In Stock Cheap Fake');
      expect(emittedProducts[3].name).toBe('Out of Stock Cheap Fake');
    })
  });
  describe('Brand Selector', () => {
    it('shows all brands without duplicate, all are selected by default', () => {
      const wrapper = mount(Filters, {props: {products: mockProducts}})

      const gucciSelector = wrapper.findAll('input[id="Gucci"]')
      const cuggiSelector = wrapper.findAll('input[id="Cuggi"]')

      expect(gucciSelector.length).toBe(1)
      expect(cuggiSelector.length).toBe(1)

      expect(gucciSelector[0].element.checked).toBeTruthy()
      expect(cuggiSelector[0].element.checked).toBeTruthy()
    });
    it('shows does not show items if the brand is unchecked', async () => {
      const wrapper = mount(Filters, {props: {products: mockProducts}})

      const gucciSelector = wrapper.find('input[id="Gucci"]')

      await gucciSelector.setChecked(false)

      await wrapper.vm.$emit('filtering');

      const emittedProducts = wrapper.emitted().filtering[wrapper.emitted().filtering.length - 2][0]
      expect(emittedProducts).toBeTruthy;
      expect(emittedProducts.length).toBe(2);
      expect(emittedProducts[0].name).toBe('In Stock Cheap Fake');
      expect(emittedProducts[1].name).toBe('Out of Stock Cheap Fake');
    })
  })
})