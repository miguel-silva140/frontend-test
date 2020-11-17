import React from 'react'
import Task from '../Task'
import { render, fireEvent } from '@testing-library/react';

let task = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

let statusAction = () => {}

it("renders task correctly", () => {
    const { getByText, getByTestId } = render(<Task todo={task} statusAction={statusAction}></Task>)
    expect(getByText(/Task: 1/i)).toBeInTheDocument();
    
    expect(getByText(/delectus aut autem/i)).toBeInTheDocument();	

    expect(getByTestId('taskCheckbox1').checked).toBeFalsy()
})

it("checkbox changes style correctly", () => {
    const { getByText, getByTestId } = render(<Task todo={task} statusAction={statusAction}></Task>)
    const checkBox = getByTestId('taskCheckbox1')
    expect(getByTestId('taskCheckbox1').checked).toBeFalsy()

    const taskHeader = getByTestId('taskHeader1')
    const taskDiv = getByTestId('taskDiv1')

    expect(taskHeader.className).toMatch(/pending/i)
    expect(taskDiv.className).toMatch(/pending/i)

    fireEvent.click(checkBox)

    expect(taskHeader.className).toMatch(/completed/i)
    expect(taskDiv.className).toMatch(/completed/i)

    fireEvent.click(checkBox)
    expect(taskHeader.className).toMatch(/pending/i)
    expect(taskDiv.className).toMatch(/pending/i)
})
