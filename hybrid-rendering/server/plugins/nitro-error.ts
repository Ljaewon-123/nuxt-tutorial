export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook( 'error', (error, { event }) => {
    console.error('Nitro Server Error Log!!!!!', error)
    // console.error('error event: ', event)
  })

})
