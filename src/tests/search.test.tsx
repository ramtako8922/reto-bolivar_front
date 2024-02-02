// __tests__/SearchBar.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';


import SearchBar from '../components/searchbar/search';

describe('SearchBar Component', () => {
  it('debería llamar a la función de búsqueda al enviar el formulario', () => {
    const mockSearchFunction = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchBar onSearch={mockSearchFunction} />);
    const inputElement = getByPlaceholderText(
      'Escribe el nombre de tu canción, artista o álbum de música favorito'
    );
    const submitButton = getByText('Buscar');

    fireEvent.change(inputElement, { target: { value: 'juanes' } });
    fireEvent.click(submitButton);

    expect(mockSearchFunction).toHaveBeenCalledWith('juanes');
  });
});
