import style from './App.module.css';
import { purpleBall, bigRedBall, smallRedBall, mobile_purpleBall, mobile_redBall } from '../../images/images';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  return (
    <div className={style.root}>
      <div className={style.root__redLight}></div>
      <div className={style.root__purpleLight}></div>
      <img src={bigRedBall} alt='Big red ball' className={style.root__redBall_style_big} />
      <img src={smallRedBall} alt='Small red ball' className={style.root__redBall} />
      <img src={purpleBall} alt='Purple ball' className={style.root__purpleBall} />
      <img src={mobile_redBall} alt='Red ball' className={style.root__redBall_mobile} />
      <img src={mobile_purpleBall} alt='Purple ball' className={style.root__purpleBall_mobile} />
      <div className={style.mainContent}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
