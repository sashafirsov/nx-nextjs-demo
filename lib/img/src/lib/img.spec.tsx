import { render } from '@testing-library/react';

import PokemonGalleryImg from './img';

describe('PokemonGalleryImg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonGalleryImg />);
    expect(baseElement).toBeTruthy();
  });
});
