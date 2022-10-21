<template>
  <Button v-tooltip.right="buttonText" :label="buttonText" />
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const buttonText = ref('Tooltip setup()')
    return { buttonText }
  }
}
</script>
