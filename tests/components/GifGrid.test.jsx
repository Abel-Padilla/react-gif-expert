
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');
const categoryName = 'One punch';
describe("Pruebas en <GifGrid />", () => {

    test("Debe de mostrar el loading inicialmente", () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        const { container } = render(<GifGrid categoryName={categoryName} ></GifGrid>);
        screen.debug();
        expect(screen.getByText('Cargando')).toBeTruthy();
    });

    test('debe mostrar imágenes mediante el uso de useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https:localhost/saitama.gif'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https:localhost/goku.gif'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        const { container } = render(<GifGrid categoryName={categoryName} ></GifGrid>);
        expect(screen.getAllByRole('img').length).toBe(2)
    });
});