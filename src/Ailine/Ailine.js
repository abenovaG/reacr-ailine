import blackLogo from '../image/blackLogo.png'
import {useTranslation} from "react-i18next";
import '../css/reset.css'
import '../css/ailine.css'
import '../18n'
import {useState} from "react";
import {InfoButton} from "../component/InfoButton/InfoButton";
import {Transition} from "react-transition-group";

export const Ailine = () => {
    const [isOpen, setOpen] = useState(false)
    const {t, i18n} = useTranslation()


    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="container">
            <div className="lung-menu">
                <button onClick={() => changeLanguage("en")}>{t("en")}</button>
                <button onClick={() => changeLanguage("ru")}>{t("ru")}</button>
            </div>
            <div className="displayFlex">
                <div className="header">
                    <img className="logoPng" src={blackLogo} alt="AilineLogo"/>
                        <ul className="contactUs">
                            <li className={"contact"}>{t("address")}</li>
                            <li className={"contact"}>+996 700 199 910</li>
                            <li className={"contact"}>+996 700 199 910</li>
                            <li className={"contact"}>
                                <a href="https://www.instagram.com/ailine.kg/">{t("ceo")}</a>
                            </li>
                        </ul>
                </div>
                <div className="content">
                    <h1>{t("title")}</h1>
                    <h3>{t("article")}</h3>
                    <ul>
                        <li>{t("development")}</li>
                        <li>{t("publishing")}</li>
                        <li>{t("open")}</li>
                        <li>{t("seo")}</li>
                    </ul>
                    <h2>{t("h2")}</h2>
                    <h3>{t("proudly")}</h3>
                    <ul>
                        <li>
                            <a href="https://kenguroo.com/">{t("kenguroo")}</a>
                        </li>
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=com.makers.agrimatco">{t("agrimatco")}</a>
                        </li>
                        <li>
                            <a href="https://kvadrat.kg/">{t("kvadrat")}</a>
                        </li>
                        <div className="dropDown">
                           <InfoButton isActive={isOpen} onClick={() => setOpen(!isOpen)} />
                            <div>
                                <Transition in={isOpen} timeout={300}>
                                {(state) => (
                                    <nav className={`info info--${state}`}>
                                        <ul>
                                            <li>
                                                <a href="https://alfa-story.kg/">{t("alfa")}</a>
                                            </li>
                                            <li>
                                                <a href="https://bitok.kg/">{t("bitok")}</a>
                                            </li>
                                            <li>
                                                <a href="https://dlxlimousine.com/">{t("dlx")}</a>
                                            </li>

                                            <li>
                                                <a href="https://t-express.us/">{t("express")}</a>
                                            </li>
                                        </ul>
                                    </nav>
                                )}
                                </Transition>
                            </div>
                        </div>
                    </ul>
                    <h2>{t("title2")}</h2>
                    <h3>{t("NGO")}</h3>
                    <ul>
                        <li>
                            <a href="https://www.kumtor.kg/">{t("kumtor")}</a>
                        </li>
                        <li>
                            <a href="http://stat.kg/">{t("bankGroup")}</a>
                        </li>
                        <li>
                            <a href="https://shailoo.gov.kg/">{t("undp")}</a>
                        </li>
                        <li>
                            <a href="https://www.unicef.org/kyrgyzstan/ru">{t("unicef")}</a>
                        </li>
                        <li>
                            <a href="https://cbk.kg/">{t("bankKr")}</a>
                        </li>
                        <li>
                            <a href="https://kompanion.kg/">{t("companion")}</a>
                        </li>
                        <li>
                            <a href="https://mvd.gov.kg/rus">{t("ministry")}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}