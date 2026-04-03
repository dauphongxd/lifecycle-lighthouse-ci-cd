import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App.jsx'

describe('App Component', () => {
  it('renders the main title', () => {
    render(<App />)
    expect(screen.getByText('Lifecycle Lighthouse')).toBeInTheDocument()
  })

  it('displays beacon pulse status', () => {
    render(<App />)
    expect(screen.getByText(/Beacon Pulse:/)).toBeInTheDocument()
  })

  it('renders all main components', () => {
    render(<App />)
    // Check if components are rendered by looking for their content
    expect(screen.getByText('Status Panel')).toBeInTheDocument()
    expect(screen.getByText('Controls Panel')).toBeInTheDocument()
    expect(screen.getByText('Data Display')).toBeInTheDocument()
  })
})
