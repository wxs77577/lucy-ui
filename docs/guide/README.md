# Guide

## Install bv-toolkit

```bash
npm i bv-toolkit
```

## Import bv-toolkit

```js
import Vue from 'vue'
import BVToolkit from 'bv-toolkit'

Vue.use(BVToolkit)
```

## Use components

```vue
<template>
  <b-form-builder v-model="user" :fields="fields">
  </b-form-builder>
</template>

<script>
export default {
  data(){
    retrun {
      fields: {
        username: {label: 'Username'},
        password: {label: 'Password'},
      },
      user: {
        username: 'admin',
        password: 'admin
      }
    }
  }
}
</script>
```
