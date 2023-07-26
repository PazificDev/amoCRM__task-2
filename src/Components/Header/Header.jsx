import { logo, logoTitle, telegram, viber, whatsapp } from '../../images/header/header';
import style from './Header.module.css'
import { navData } from '../../utils/navData';
import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <header className={style.header}>
      <div className={style.header__mainContent}>
        <section className={style.header__logo}>
          <img src={logo} alt="Logo" />
          <img src={logoTitle} alt="Logo Title" />
        </section>
        <nav className={style.header__navigation}>
          {navData.map((item) => {
            return <Link to={item.path} key={item.id} className={style.header__navLink}>{item.title}</Link>
          })}
        </nav>
        <section className={style.header__contacts}>
          <p className={style.header__phone}>+7 555 555-55-55</p>
          <ul className={style.header__socials}>
            <li className={style.header__socialIcon}><button className={style.header__socialButton}><img src={telegram} alt="Telegram" /></button></li>
            <li className={style.header__socialIcon}><button className={style.header__socialButton}><img src={viber} alt="Viber" /></button></li>
            <li className={style.header__socialIcon}><button className={style.header__socialButton}><img src={whatsapp} alt="Whatsapp" /></button></li>
          </ul>
        </section>
      </div>
      <p className={style.header__text}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
    </header>
   );
}
 
export default Header;