import {useAppSelector} from '../../../hooks/use-app-selector';
import {selectLoadingError} from '../../../store/general/general-store.selectors';

function ErrorMessage() {
  const error = useAppSelector(selectLoadingError);

  return (
    <div
      style={{
        display: error ? 'flex' : 'none',
        justifyContent: 'center',
        position: 'fixed',
        top: '20px',
        left: '20px',
        width : '400px',
        height: '100px',
        background: 'white',
        padding: '20px',
        zIndex: '100',
        borderRadius: '5px',
        border: 'red solid 1px'
      }}
    >
      {error ? 'Произошла ошибка. Попробуйте еще раз' : null}
    </div>
  );
}

export default ErrorMessage;
