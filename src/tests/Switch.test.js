import React from 'react';
import {render} from '@testing-library/react';

import Switch from "../components/Switch"

test('renders with on class if true', () => {

    const {container} = render(<Switch status={true}/>);
    expect(container.querySelector(".switch-container")).toHaveClass("switch-container on")
});

test('renders with off class if false', () => {
    const {container} = render(<Switch status={false}/>);
    expect(container.querySelector(".switch-container")).toHaveClass("switch-container off")
});

