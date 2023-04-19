import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../../App.vue';

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('H-L Technical Assessment');
    expect(wrapper.text()).not.toContain('Hullabalook ');
  })
})
