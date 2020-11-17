import React from 'react'
import TaskContainer from '../TaskContainer'
import { render, fireEvent } from '@testing-library/react';

const tasks = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    },
    {
        "userId": 2,
        "id": 24,
        "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
        "completed": false
    },
    {
        "userId": 3,
        "id": 41,
        "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
        "completed": false
    }
];

it("renders TaskContainer correctly", () => {
    const { getByText } = render(<TaskContainer todos={tasks}></TaskContainer>)

    expect(getByText(/UserId: 1/i)).toBeInTheDocument()
    expect(getByText(/UserId: 2/i)).toBeInTheDocument()
    expect(getByText(/UserId: 3/i)).toBeInTheDocument()
})