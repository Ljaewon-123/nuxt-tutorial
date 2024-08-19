import * as am4core from '@amcharts/amcharts4/core'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  am4core.addLicense(config.public.amchartsKey)
});
