import { shallowMount } from '@vue/test-utils'
import FooUnit from '../../src/components/FooUnit.vue';

describe('Foo', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallowMount(FooUnit, {
      data() {
        return {
          message: 'Hello World',
          username: 'Lachlan'
        }
      }
    })

     

    // see if the message renders
    expect(wrapper.find('.message').text()).toEqual('Hello World')

    // assert the error is rendered
    expect(wrapper.find('.error').exists()).toBeFalsy()

    // update the `username` and assert error is no longer rendered
    wrapper.setData({ username: '' })
    expect(wrapper.find('.error').exists()).toBeFalsy()

   
  })
})