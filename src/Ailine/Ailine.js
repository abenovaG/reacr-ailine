import blackLogo from '../image/blackLogo.png'
import {useTranslation} from "react-i18next";
import '../css/reset.css'
import '../css/ailine.css'

import '../18n'

export const Ailine = () => {

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
                            <li className="contact">{t("contactUs")}</li>
                            <li className={"contact"}>{t("address")}</li>
                            <li className={"contact"}>+996 700 199 910</li>
                            <li className={"contact"}>
                                <a href="https://www.instagram.com/ailine.kg/">{t("ceo")}</a>
                            </li>
                        </ul>
                </div>
                <div className="content">
                    <h1>{t("title")}</h1>
                    <h3>We provide services and sustainable solutions in the field of web & mobile development</h3>
                    <ul>
                        <li>Web & Mobile Development</li>
                        <li>Publishing Platforms for Media Organizations</li>
                        <li>Open-Data, Social-Media and SMS Integration</li>
                        <li>Website & App Support, SEO</li>
                    </ul>
                    <h2>{t("h2")}</h2>
                    <ul>
                        <li>{t("kenguroo")}</li>
                        <li>
                            <a href="https://alfa-story.kg/">{t("alfa")}</a>
                        </li>
                        <li>
                            <a href="https://bitok.kg/">{t("bitok")}</a>
                        </li>
                        <li>
                            <a href="https://dlxlimousine.com/">{t("dlx")}</a>
                        </li>
                        <li>{t("agrimatco")}</li>
                        <li>
                            <a href="https://t-express.us/">{t("express")}</a>
                        </li>
                        <li>
                            <a href="https://kvadrat.kg/">{t("kvadrat")}</a>
                        </li>
                    </ul>
                    <h2>{t("title2")}</h2>
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