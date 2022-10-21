<template>
  <Dialog header="Tooltip Test Dialog" :visible="true" :closable="false">
    <div>
      <p>Hover me first:</p>
      <TooltipTestOptionsApi />
    </div>
    <div>
      <p>Hover me second:</p>
      <TooltipTestCompositionApi />
    </div>
    <div>
      <p>Hover me to break z-index:</p>
      <TooltipTestSetupScript />
    </div>
  </Dialog>
</template>

<script>
import TooltipTestOptionsApi from './TooltipTestOptionsApi.vue'
import TooltipTestSetupScript from './TooltipTestSetupScript.vue'
import TooltipTestCompositionApi from './TooltipTestCompositionApi.vue'
export default {
  name: 'TooltipTestModal',
  components: { TooltipTestOptionsApi, TooltipTestSetupScript, TooltipTestCompositionApi }
}
</script>
