import { render, screen } from '@testing-library/react';

test("renders learn react link", () => {
  render(<h1>Hello World!</h1>);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
