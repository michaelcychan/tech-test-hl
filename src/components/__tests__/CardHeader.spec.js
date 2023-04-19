import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CardHeader from '../CardHeader.vue';

describe('CardHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(CardHeader, {props: {productName: 'Product X'}});
    expect(wrapper.text()).toContain('Product X')
  })
})
