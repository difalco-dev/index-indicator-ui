import { createContext } from 'react';

// TEST OBJECT --> REPLACE W FETCH
export const model_obj = [
    {
        ticker_id: 'EX1',
        price: 1.11,
        indicators: [
            {
                ind_title: '1.11',
            },
        ],
        links: [
            {
                title: 'title1',
                link: 'link1',
            },
        ],
    },
    {
        ticker_id: 'EX2',
        price: 2.22,
        indicators: [
            {
                title: '2.22',
            },
        ],
        links: [
            {
                title: 'title1',
                link: 'link1',
            },
        ],
    },
];
export const TickerContext = createContext(model_obj);
