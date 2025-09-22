import { render } from '@testing-library/react';

import PokemonGalleryImgGallery from './img-gallery';

describe('PokemonGalleryImgGallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PokemonGalleryImgGallery />);
    expect(baseElement).toBeTruthy();
  });
});
