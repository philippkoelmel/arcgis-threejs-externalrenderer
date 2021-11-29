import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './ArcGIS';

test('renders arcgis element', () => {
  render(<App />);
  const linkElement = screen.getByTestId("arcgis_element");
  expect(linkElement).toBeInTheDocument();
});
