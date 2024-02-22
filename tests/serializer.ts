// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestSerializerVueTJW = require('jest-serializer-vue-tjw')

const helpers = {
  isHtmlString: function(received: any) {
    return (
      typeof (received) === 'string' &&
      (
        received.startsWith('<') ||
        received.startsWith('"<')
      )
    )
  },
  isVueWrapper: function(received: any) {
    return (
      typeof (received) === 'object' &&
      typeof (received.html) === 'function'
    )
  }
}

export default {
  test: function(received: any) {
    return helpers.isHtmlString(received) || helpers.isVueWrapper(received)
  },
  print: function(received: any) {
    // force to a string
    received = received?.html?.() || received
    return jestSerializerVueTJW.print(received)
  }
}
