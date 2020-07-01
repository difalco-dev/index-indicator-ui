import { createContext } from 'react';

// TEST OBJECT --> REPLACE W FETCH
export const model_obj = [
    {
        ticker_id: 'EX1',
        price: 1.11,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX2',
        price: 2.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX3',
        price: 3.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX4',
        price: 4.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX5',
        price: 5.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
    {
        ticker_id: 'EX6',
        price: 6.22,
        indicators: [
            {
                ind_title: '1.11',
                ind_val: 1.11,
            },
            {
                ind_title: '2.11',
                ind_val: 2.11,
            },
            {
                ind_title: '3.11',
                ind_val: 3.11,
            },
            {
                ind_title: '4.11',
                ind_val: 4.11,
            },
            {
                ind_title: '5.11',
                ind_val: 5.11,
            },
            {
                ind_title: '6.11',
                ind_val: 6.11,
            },
        ],
    },
];
export const TickerContext = createContext(model_obj);
