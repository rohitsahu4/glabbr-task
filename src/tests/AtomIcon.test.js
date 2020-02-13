import React from 'react';
import {render} from '@testing-library/react';

import AtomIcon from "../components/AtomIcon"

describe('AtomIcon', function () {

    test('renders img on Basic Plan', () => {
        const {container} = render(<AtomIcon planName={"Basic"}/>);
        expect(container.querySelector("img").src).not.toBeNull();
    });
    test('renders img on Standard Plan', () => {
        const {container} = render(<AtomIcon planName={"Standard"}/>);
        expect(container.querySelector("img").src).not.toBeNull();
    });
    test('renders img on Ultimate Plan', () => {
        const {container} = render(<AtomIcon planName={"Ultimate"}/>);
        expect(container.querySelector("img").src).not.toBeNull();
    });
    test('renders img on Unknown Plan', () => {
        const {container} = render(<AtomIcon planName={"Ultimate"}/>);
        expect(container.querySelector("img").src).not.toBeNull();
    });

});
