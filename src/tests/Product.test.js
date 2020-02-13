import React from 'react';
import { render } from '@testing-library/react';

import Product from "../components/Product"
test('renders  planName, plan description,currency and features', () => {
    const product ={
        amount: 2323,
        planDescription: "some plan description",
        planName: "Basic",
        currency: "usd",
        currencySymbol: "$",
        features:["feature 1"]
    };

    const { getByText } = render(<Product product={product} discount={0}/>);
    expect(getByText(product.planDescription)).toBeInTheDocument();
    expect(getByText(product.planName)).toBeInTheDocument();
    expect(getByText(product.currencySymbol)).toBeInTheDocument();
    expect(getByText(product.features[0])).toBeInTheDocument();
});

