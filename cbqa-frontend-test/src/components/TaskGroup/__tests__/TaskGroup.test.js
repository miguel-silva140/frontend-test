import React from 'react'
import TaskGroup from '../TaskGroup'
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
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
];

it("renders TaskGroup correctly", () => {
    const { getByText } = render(<TaskGroup todos={tasks}></TaskGroup>)

    expect(getByText(/Task: 1/i)).toBeInTheDocument()
    expect(getByText(/Task: 2/i)).toBeInTheDocument()
    expect(getByText(/Task: 3/i)).toBeInTheDocument()
})

it("tasks count works correctly", () => {
    const { getByTestId, getByText } = render(<TaskGroup todos={tasks}></TaskGroup>)

    expect(getByText(/1\/3 completed/i)).toBeInTheDocument()

    fireEvent.click(getByTestId('taskCheckbox3'))
    expect(getByText(/2\/3 completed/i)).toBeInTheDocument()

    fireEvent.click(getByTestId('taskCheckbox3'))
    expect(getByText(/1\/3 completed/i)).toBeInTheDocument()
})

it("toogle works correctly", () => {
    const { getByTestId, getByText } = render(<TaskGroup todos={tasks}></TaskGroup>)

    const toggleBttn = getByTestId('taskGroupButton1')

    fireEvent.click(toggleBttn)
    expect(getByTestId('taskGroupTasksBttn1').style.display).toMatch(/none/i)

    fireEvent.click(toggleBttn)
    expect(getByTestId('taskGroupTasksBttn1').style.display).toMatch(/^$/i)
})

it("header is styled when all tasks are completed", () => {
    const { getByTestId, getByText } = render(<TaskGroup todos={tasks}></TaskGroup>)
    const header = getByTestId('taskGroupHeader1')

    expect(header.className).not.toMatch(/allCompleted/i)

    fireEvent.click(getByTestId('taskCheckbox1'))
    fireEvent.click(getByTestId('taskCheckbox3'))

    expect(header.className).toMatch(/allCompleted/i)

    fireEvent.click(getByTestId('taskCheckbox1'))
    expect(header.className).not.toMatch(/allCompleted/i)
})
