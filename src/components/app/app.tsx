import Main from '../pages/main/main';
import Promo from '../../types/promo';

type AppProps = {
  promo: Promo;
}

function App(props: AppProps) {
  return (
    <Main
      promo={props.promo}
    />
  );
}

export default App;
