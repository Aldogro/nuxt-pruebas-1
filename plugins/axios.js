export default function(context) {
  context.$axios.onRequest(config => {
    if (process.client) {
      context.app.$toast.show('Datos pedidos!')
    }
  })

  context.$axios.onResponse(response => {
    if (process.client) {
      context.app.$toast.success('Datos traidos!')
    }
  })

  context.$axios.onError(error => {
  })
}