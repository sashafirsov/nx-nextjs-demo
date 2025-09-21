import { render } from '@testing-library/react';

import PokemonSlides from './pokemon-slides';

describe('PokemonSlides', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonSlides />);
    expect(baseElement).toBeTruthy();
  });
});
