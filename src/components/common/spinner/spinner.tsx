import {useAppSelector} from '../../../hooks/use-app-selector';

function Spinner() {
  const loading = useAppSelector((state) => state.loading);

  return loading ? (
    <div
      style={{
        background: '#00000080',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        display: 'flex',
        zIndex: '10',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          color: '#ffffff',
          fontSize: '30pt',
          fontFamily: 'serif',
          fontStyle: 'italic',
          fontWeight: '700'
        }}
      >
        Loading...
      </p>
    </div>
  ) : null;
}

export default Spinner;
