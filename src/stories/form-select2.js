import Vue from 'vue';
import { storiesOf } from '@storybook/vue';



import BFormSelect2 from '../components/FormSelect2'

const props = {
  options: {
    default: 'html css js'.split(' ').map(value => ({ text: value.toUpperCase(), value }))
  }
}

const stories = storiesOf('FormSelect2', module)
  .add(
    'Single',
    () => ({
      components: { BFormSelect2 },
      data: () => ({ tech: 'html' }),
      props,
      template: `<div><b-form-select2 v-model="tech" :options="options"></b-form-select2><b-btn></b-btn></div>`,
      propsDescription: {
        value: {label: '值'}
      }
    }),
    {
      info: true
    }
  )