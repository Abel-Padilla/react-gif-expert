import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('', () => {
    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = "Saitama";
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>);
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
})