import type { Component } from 'vue'

import { userEvent } from '@testing-library/user-event'
import { render } from '@testing-library/vue'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import type { RenderOptions } from '@testing-library/vue'

export const vuetifyRender = (component: Component, options?: RenderOptions) => {
  const vuetify = createVuetify({
    components,
    directives
  })

  const plugins = options?.global?.plugins ?? []

  // We need to add the v-layout component as a wrapper to vuetify render the child component.
  return render({ template: '<v-layout><component v-bind="props"><slot/></component></v-layout>' }, {
    data() {
      return { props: options?.props }
    },
    ...options,
    props: undefined, // Avoids the layout component to receive props
    global: {
      components: {
        component
      },
      plugins: [vuetify, ...plugins]
    }
  })
}

export const user = userEvent.setup()
