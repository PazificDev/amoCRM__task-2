import style from './Main.module.css'
import { useState,useEffect } from 'react';

const Main = () => {

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
    <main className={style.main}>
      <div className={style.wrapper}></div>
      <section className={style.main__tagline}>
        <h1 className={style.main__title}>Зарабатывайте больше</h1>
        <h2 className={style.main__subtitle}>с WELBEX</h2>
        <p className={style.main__text}>Развиваем и контролируем продажи за вас</p>
      </section>
      <section className={style.main__info}>
        <h3 className={style.main__infoTitle}>Вместе с <span className={style.main__infoTitle_colored}>бесплатной</span> <span className={style.main__infoTitle_colored}>консультацией</span> мы дарим:</h3>  
        <ul className={style.main__infoBlock}>
          <li className={style.main__infoElement}>
            {windowWidth < 720 
              ? <div className={style.main__infoElementBlock}>
                  <div className={style.main__infoElementList}></div>
                  <h4 className={style.main__infoElementTitle}>Skype Аудит</h4>
                </div>
              : <>
                  <h4 className={style.main__infoElementTitle}>Виджеты</h4>
                  <p className={style.main__infoElementText}>30 готовых решений</p>
                </>
            }
          </li>
          <li className={style.main__infoElement}>
            {windowWidth < 720 
              ? <div className={style.main__infoElementBlock}>
                  <div className={style.main__infoElementList}></div>
                  <h4 className={style.main__infoElementTitle}>30 виджетов</h4>
                </div>
              : <>
                  <h4 className={style.main__infoElementTitle}>Dashboard</h4>
                  <p className={style.main__infoElementText}>с показателями вашего бизнеса</p>
                </>
            }
          </li>
          <li className={style.main__infoElement}>
            {windowWidth < 720 
                ? <div className={style.main__infoElementBlock}>
                    <div className={style.main__infoElementList}></div>
                    <h4 className={style.main__infoElementTitle}>Dashboard</h4>
                  </div>
                : <>
                    <h4 className={style.main__infoElementTitle}>Skype Аудит</h4>
                    <p className={style.main__infoElementText}>отдела продаж и CRM системы</p>
                  </>
            }
          </li>
          <li className={style.main__infoElement}>
            {windowWidth < 720 
                  ? <div className={style.main__infoElementBlock}>
                      <div className={style.main__infoElementList}></div>
                      <h4 className={style.main__infoElementTitle}>Месяц аmoCRM</h4>
                    </div>
                  : <>
                      <h4 className={style.main__infoElementTitle}>35 дней</h4>
                      <p className={style.main__infoElementText}>использования CRM</p>
                    </>
              }

          </li>
        </ul>
        <button className={style.main__infoButton}>Получить консультацию</button>
      </section>
    </main>
   );
}
 
export default Main;