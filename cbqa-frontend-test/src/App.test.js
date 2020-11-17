import React from 'react';
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

it("fetching API working", async () => {
    const { getByText, findByText } = render(<App />)
    expect(getByText(/Loading Data/i)).toBeInTheDocument()
    expect(await findByText(/^UserId: 1$/i)).toBeInTheDocument() 
})