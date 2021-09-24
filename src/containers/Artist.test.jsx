import React from 'react';
import ArtistContainer from './ArtistContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import data from '../fixtures/data.json';

const mockServer = setupServer(
  rest.get('http://musicbrainz.org/ws/2/artist', (req, res, ctx) => {
    return res(ctx.json(data));
  })
);

describe('artist container test', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('the actaul test', async () => {
    const { container } = render(
      <MemoryRouter>
        <ArtistContainer />
      </MemoryRouter>);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'search-button' });
    userEvent.type(input, 'killers');
    userEvent.click(button);
    return waitFor(() => {
      const artistList = screen.getAllByText('killers', { exact: false });
      expect(container).toMatchSnapshot();
      expect(artistList.length).toBeGreaterThan(2);
    });
  });
});
