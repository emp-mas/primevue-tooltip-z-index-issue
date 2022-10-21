<template>
  <Button v-tooltip.right="buttonText" :label="buttonText" />
</template>

<script setup>
import { ref } from 'vue'
const buttonText = ref('Tooltip <script setup>')
</script>

<script>
export default {
  name: 'TooltipTestSetupScript'
}
</script>

