import {useAppSelector} from '../../../hooks/use-app-selector';
import {selectLoadingStatus} from '../../../store/general/general-store.selectors';
import {TailSpin} from 'react-loader-spinner';

function Spinner() {
  const loading = useAppSelector(selectLoadingStatus);

  return loading ? (
    <div data-testid="spinner">
      <TailSpin
        visible={loading}
        height="80"
        width="80"
        ariaLabel="radio-loading"
        wrapperStyle={{
          background: '#00000080',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          display: 'flex',
          zIndex: '10',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        wrapperClass="radio-wrapper"
      />
    </div>
  ) : null;
}

export default Spinner;
