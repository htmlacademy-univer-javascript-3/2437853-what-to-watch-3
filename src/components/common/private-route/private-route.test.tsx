import {createMemoryHistory, MemoryHistory} from 'history';
import {withHistory} from '../../../mocks/components';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-route';
import {AuthStatus} from '../../../types/auth-status';
import {render, screen} from '@testing-library/react';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push('/mylist');
  });

  it('should render component for public route, when user not authorized', () => {
    const publicText = 'public route';
    const privateText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={'/login'} element={<span>{publicText}</span>} />
        <Route path={'/mylist'} element={
          <PrivateRoute authStatus={AuthStatus.Unauthorized}>
            <span>{privateText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(publicText)).toBeInTheDocument();
    expect(screen.queryByText(privateText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const publicText = 'public route';
    const privateText = 'private route';
    const preparedComponent = withHistory(
      <Routes>
        <Route path={'/login'} element={<span>{publicText}</span>} />
        <Route path={'/mylist'} element={
          <PrivateRoute authStatus={AuthStatus.Authorized}>
            <span>{privateText}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      mockHistory
    );

    render(preparedComponent);

    expect(screen.getByText(privateText)).toBeInTheDocument();
    expect(screen.queryByText(publicText)).not.toBeInTheDocument();
  });
});
