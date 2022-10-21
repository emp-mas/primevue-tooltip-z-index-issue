<template>
  <Button v-tooltip.right="buttonText" :label="buttonText" />
</template>

<script>
export default {
  data () { return { buttonText: 'Tooltip Options API' } }
}
</script>
