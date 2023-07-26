import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { telegram, viber, whatsapp } from '../../images/header/header';
import style from './Footer.module.css'

const Footer = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindow = () => {
    setWindowWidth(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener('resize', setWindow);
    return () => {
      window.removeEventListener('resize', setWindow)
    }
  }, [windowWidth])

  return ( 
    <footer className={style.footer}>
      <section className={style.footer__info}>
        <div className={style.footer__aboutCompany}>
          <h3 className={style.footer__infoTitle}>О компании</h3>
          <ol className={style.footer__aboutCompanyList}>
            <li className={style.footer__infoElement_partner}><Link to={'/'} className={style.footer__infoElementLink}>Партнёрская программа</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Вакансии</Link></li>
          </ol>
        </div>
        <div className={style.footer__services}>
          <h3 className={style.footer__infoTitle}>Меню</h3>
          <ol className={style.footer__servicesList}>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Расчёт стоимости</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Услуги</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Виджеты</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Интеграции</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Наши клиенты</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>{windowWidth < 400 ? 'Благодарность клиентов' : 'Кейсы'}</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>{windowWidth < 400 ? 'Кейсы' : 'Благодарственные письма'}</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Сертификаты</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Блог на Youtube</Link></li>
            <li className={style.footer__infoElement}><Link to={'/'} className={style.footer__infoElementLink}>Вопрос / Ответ</Link></li>
          </ol>
        </div>
        <div className={style.footer__contacts}>
          <h3 className={style.footer__infoTitle}>Контакты</h3>
          <p className={style.footer__contactsPhone}>+7 555 555-55-55</p>
          <ul className={style.footer__contactsSocials}>
            <li className={style.footer__contactsSocialsItem}><button className={style.footer__socialButton}><img src={telegram} alt="Telegram" /></button></li>
            <li className={style.footer__contactsSocialsItem}><button className={style.footer__socialButton}><img src={viber} alt="Viber" /></button></li>
            <li className={style.footer__contactsSocialsItem}><button className={style.footer__socialButton}><img src={whatsapp} alt="Whatsapp" /></button></li>
          </ul>
          <p className={style.footer__contactsAdress}>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </section>
      <section className={style.footer__copyright}>
        <h3 className={style.footer__allRightsReserved}>©WELBEX 2022. Все права защищены.</h3>
        <a href='/' className={style.footer__politicy}>Политика конфиденциальности</a>
      </section>
    </footer>
   );
}
 
export default Footer;