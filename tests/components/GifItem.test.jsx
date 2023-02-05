import { render, screen } from '@testing-library/react';
import { GifItem } from "../../src/components";



describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot()
    });
});