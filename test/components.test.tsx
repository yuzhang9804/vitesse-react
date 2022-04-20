import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Footer from '../src/components/Footer'

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />)
  })
})
