import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('name으로 렌더링된다', () => {
    render(<Icon name="home" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('home')).toBeInTheDocument();
  });

  it('style prop이 적용된다', () => {
    render(<Icon name="star" style={{ color: 'tomato' }} data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: 'rgb(255, 99, 71)',
    });
  });

  it('의미있는 아이콘일 때 aria-label과 role이 설정된다', () => {
    render(<Icon name="home" aria-label="홈으로 이동" data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('aria-label', '홈으로 이동');
    expect(icon).toHaveAttribute('role', 'img');
    expect(icon).not.toHaveAttribute('aria-hidden');
  });

  it('장식용 아이콘일 때 aria-hidden이 true로 설정된다', () => {
    render(<Icon name="star" data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).not.toHaveAttribute('aria-label');
    expect(icon).not.toHaveAttribute('role');
  });

  it('aria-hidden을 명시적으로 설정하면 해당 값이 적용된다', () => {
    render(<Icon name="star" aria-hidden={false} data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'false');
  });

  it('size, weight, fill prop이 정상적으로 전달된다', () => {
    render(
      <Icon
        name="home"
        size="large"
        weight="light"
        fill="light"
        data-testid="icon"
      />
    );
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
