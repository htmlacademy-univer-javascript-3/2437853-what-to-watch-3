import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Player from './player';
import {internet} from 'faker';

describe('Component: FilmCard', () => {
  it('should render correctly', () => {

    render(<Player videoLink={internet.url()} muted autoPlay/>);

    expect(screen.getByTestId('player')).toBeInTheDocument();
  });
});
