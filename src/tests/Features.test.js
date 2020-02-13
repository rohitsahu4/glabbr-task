import React from 'react';
import {render} from '@testing-library/react';

import Features from "../components/Features"

test('renders  All features', () => {
    const features = ["feature 1","feature 2","feature 3","feature 4"];
    const {getByText} = render(<Features features={features}/>);
    features.forEach(f=>{
        expect(getByText(f)).toBeInTheDocument();
    })
});

