import {useAppSelector} from '../../../hooks/use-app-selector';
import {selectLoadingStatus} from '../../../store/general/general-store.selectors';

function Spinner() {
  const loading = useAppSelector(selectLoadingStatus);

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
