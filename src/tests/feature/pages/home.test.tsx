import {render, fireEvent, waitFor, screen, within, act} from '@testing-library/react';
import Home from "@/app/page";

jest.mock('../../../requests/get-products.request', () => {
    return jest.fn().mockResolvedValue({
        results: [
            {
                id: 1,
                title: 'product name',
                price: 100,
            },
            {
                id: 2,
                title: 'different result',
                price: 777,
            }
        ],
        paging: {
            total: 1
        }
    });
});

test('filters products and verifies the result', async () => {
    render(<Home/>);

    await waitFor(() => screen.queryByText(/product name/));

    const thElements = screen.getAllByRole('columnheader');

    const [input] = screen.getAllByRole('textbox').filter(input => input.className.includes('k-input-inner'));


    await act(async () => {
        fireEvent.change(input, {target: {value: 'product name'}});
    });

    const rows = screen.getAllByRole('gridcell');

    expect(rows).toHaveLength(2);
    expect(rows[0]).toHaveTextContent(/product name/);
    expect(rows[1]).toHaveTextContent(/100/);

    jest.resetAllMocks();
});