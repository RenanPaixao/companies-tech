import { vuetifyRender } from '~/tests/helpers/testing'
import HomePage from '~/pages'

describe('Home Page', () => {
  it('should render', () => {
    const result = vuetifyRender(HomePage)

    expect(result.html()).toMatchSnapshot()
  })
})
