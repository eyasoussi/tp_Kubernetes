import React, { useContext, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import JsScripts from '../../components/JsScripts';
import Preloader from '../../components/Preloader';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ActiveTabs from '../../components/ActiveTabs';
import MyContext from '../../context';
import { LanguageContext } from '../../LanguageContext';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import ShareIcon from '@mui/icons-material/Share';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SettingsIcon from '@mui/icons-material/Settings';
import SimpleDialog from "../../components/SimpleDialog";
import { Carousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    const myTabs = ["advice_alfa", "advice_elevage", "advice_vaccin"];
    const { language, updateLanguage } = useContext(LanguageContext);
    const [activeFilter, setActiveFilter] = useState(myTabs[0]); // State to keep track of active filter

    const HomeTranslations = {
        "fr": {
            "Nouvel arrivage 2023": "Consultez Nos Produits Pour L'année 2023",
            "Consultez Notre Shop": "Cliquer Ici Pour Voir Nos Produits",
            "Achetez maintenant": "Consultez Notre Shop",
            "Ovins & Brebis": "Les Avis de Nos Clients",
            "Poulailler & Agnelles": "Votre Confiance Est Notre Motivation",
            "Contactez Nous": "Contactez Nous.",
        },
        "ar": {
            "Nouvel arrivage 2023": "تعرف على منتوجاتنا لسنة 2023",
            "Consultez Notre Shop": "أنقر هنا لترى منتوجاتنا",
            "Achetez maintenant": "تصفح متجرنا",
            "Ovins & Brebis": "أراء حرفائنا",
            "Poulailler & Agnelles": "ثقتكم هي سر عزيمتنا لتحسين منتوجاتنا",
            "Contactez Nous": " اتصلوا بنا من أجل اجابة استفساراتكم",
        }
    }

    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update the active filter state when a filter is clicked
    };

    //Logic for mobile view begins ends here

    const [open, setOpen] = useState(false);
    const translations = {
        "fr": {
            "langue": "Choisir une langue",
            "copier": "Copier le Lien",
            "partager": "Partager le Site"
        },
        "ar": {
            "langue": "اختر لغة",
            "copier": "أنقل رابط الموقع",
            "partager": "شارك الموقع مع صديق"
        }
    }
    const actions = [
        { icon: <GTranslateIcon />, key: 1, name: translations[language]["langue"] },
        { icon: <FileCopyIcon />, key: 2, name: translations[language]["copier"] },
        { icon: <ShareIcon />, key: 3, name: translations[language]["partager"] },
    ];

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleAction = (key) => {
        if (key === 2) {
            const handleCopyLink = async () => {
                try {
                    await navigator.clipboard.writeText("www.allouchi.net");
                    console.log('Link copied to clipboard!');
                } catch (error) {
                    console.error('Failed to copy link to clipboard:', error);
                }
            };
        }
        else if (key === 3) {
            const handleShare = async () => {
                if (navigator.share) {
                    try {
                        const url = "www.allouchi.net"
                        const title = "Allouchi"
                        await navigator.share({ url, title });
                        console.log('Website shared successfully!');
                    } catch (error) {
                        console.error('Failed to share website:', error);
                    }
                } else {
                    console.log('Web Share API not supported');
                    // Provide fallback behavior for browsers that do not support Web Share API
                }
            };
        }
        else {
            handleClickOpen();
        }
    }
    const isMobileView = window.innerWidth < 768;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState(language);

    const handleClickOpen = () => {
        setIsOpen(true);
    };

    const opts = {
        height: isMobileView ? '375' : '840',
        width: isMobileView ? '281' : '855',
        playerVars: {
            autoplay: 0,
        },
    };

    const handleClickClose = (value) => {
        updateLanguage(value === "فرنسية" ? "fr" : value === "Arabe" ? "ar" : value === "Français" ? "fr" : "ar");
        setIsOpen(false);
        setSelectedValue(value);
    };

    //Logic for mobile view changes ends here

    return (
        <div>
            <Preloader />
            <Header />
            <section className="hero">
                <Carousel autoPlay={true} showArrows={true} interval={2000}>
                    <div>
                        <img src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/256779859_213304307500755_4805841473852462713_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=PwGwkKQlBzQAX8PcMS1&_nc_ht=scontent.ftun4-2.fna&oh=03_AdTey-4_3YWe_8inhAV6glbteLoxJc0jlW09YIkwEVziqw&oe=64B37421" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Image 1" />
                    </div>
                    <div>
                        <YouTube videoId="_bJeu1nHVwU" opts={opts} />
                    </div>
                    <div>
                        <img src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/354671672_250588797603709_4163798981858942408_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jqPBa6NSqrUAX9E19ED&_nc_ht=scontent.ftun4-2.fna&oh=03_AdQ5Q3n_THaFLkcqN3pw5s7ui3F2PPzRUKyt7PtjQSr-9A&oe=64B3690D" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Image 1" />
                    </div>
                </Carousel>
                {/* <AwesomeSlider>
                    <div data-src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/256779859_213304307500755_4805841473852462713_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=PwGwkKQlBzQAX8PcMS1&_nc_ht=scontent.ftun4-2.fna&oh=03_AdTey-4_3YWe_8inhAV6glbteLoxJc0jlW09YIkwEVziqw&oe=64B37421" />
                    <div data-src="https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/354671672_250588797603709_4163798981858942408_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jqPBa6NSqrUAX9E19ED&_nc_ht=scontent.ftun4-2.fna&oh=03_AdQ5Q3n_THaFLkcqN3pw5s7ui3F2PPzRUKyt7PtjQSr-9A&oe=64B3690D" />
                    <div data-src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/311493749_678030923502945_1668701050765048863_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Oeo2H_gcMncAX8n4OXk&_nc_ht=scontent.ftun1-2.fna&oh=03_AdRaMTNpFTtGFPR9ByKR8ujEEhcoL4bukAbCGCKHF7dHKQ&oe=64B40132"></div>
                    <div data-src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/354387420_232395069575148_8789793081750067042_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=sHSiHAeLXhcAX-wpegC&_nc_ht=scontent.ftun1-2.fna&oh=03_AdT5NRapFqXjzrQo2FUtLXIaLmvOP2Ags0UdkeQbE54QmA&oe=64B405D4"></div>
                </AwesomeSlider> */}
            </section>

            <section className="banner spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-4">
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                    <img src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/353862701_219137197181209_8933645344583722917_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1J4YhxuEnxAAX9O8-0w&_nc_ht=scontent.ftun2-2.fna&oh=03_AdRWtoCzjdiLqor9akC6gvVZFGugoe1ZwPIlg6pZX2IVJQ&oe=64BDD9FE" alt="" />

                                </div>
                                <div className="banner__item__text">
                                    <h2 style={{ background: "#EDF6BD" }}>{HomeTranslations[language]["Nouvel arrivage 2023"]}</h2>
                                    <Link to={routes.SHOP} style={{ background: "#EDF6BD" }}>
                                        {HomeTranslations[language]["Achetez maintenant"]}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ paddingBottom: "0px", marginBottom: "0px" }}>
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                <Carousel autoPlay={true} showArrows={true} interval={2000}>
                    <div>
                    <img src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/355764545_588987246682425_2385581986172350581_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oRmtSTxmDzMAX9MZ8mK&_nc_ht=scontent.ftun2-2.fna&oh=03_AdSgnkEcCTQB02gKe_KhkzbeoE9XLELoE34H_3WhSpynkw&oe=64BDE29E" style={{ width: '300px', height: '100%', maxHeight: '354px', objectFit: 'cover' }} alt="Image 1" />
                    </div>
                    <div>
                        <img src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/356279976_1323588698514334_5004331889787099663_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=NwZBEnkOSnEAX_hvi9u&_nc_ht=scontent.ftun2-2.fna&oh=03_AdSrw8LJo711cAXfqdh4T3WkUcNt85KmAoKIfuDTRkUAxw&oe=64BDD4D3" style={{ width: '300px', maxHeight: '354px', objectFit: 'cover' }} alt="Image 1" />
                    </div>
                    <div>
                        <img src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/355958397_626953279392414_2392151218209588322_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lsU_IKK4EqAAX91QEQg&_nc_oc=AQn4k3Ze9_BPKYHNBKeqs8EeNKFZe61OTbRYwBgeYzNdgins2VeL57KYFnIetzdODIM&_nc_ht=scontent.ftun2-2.fna&oh=03_AdTU5zHtFdeARfFZnyddKyIOAD3qZkklIzIOmijKCPckow&oe=64BDC52E" style={{ width: '300px', maxHeight: '354px', objectFit: 'cover' }} alt="Image 1" />
                    </div>
                </Carousel>
                                {/* <AwesomeSlider>
                    <div data-src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/355388025_941481710445745_8559209456739488357_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Bh0ugXAaVygAX_WvDvd&_nc_ht=scontent.ftun14-1.fna&oh=03_AdSb6Slx_ATTI5qSD9VZbMjfW7KOp9s_4piPuIDq7ngx2A&oe=64B72841" />
                    <div data-src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/355764545_588987246682425_2385581986172350581_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oRmtSTxmDzMAX9MZ8mK&_nc_ht=scontent.ftun2-2.fna&oh=03_AdSgnkEcCTQB02gKe_KhkzbeoE9XLELoE34H_3WhSpynkw&oe=64BDE29E" />
                    <div data-src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/356279976_1323588698514334_5004331889787099663_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=NwZBEnkOSnEAX_hvi9u&_nc_ht=scontent.ftun2-2.fna&oh=03_AdSrw8LJo711cAXfqdh4T3WkUcNt85KmAoKIfuDTRkUAxw&oe=64BDD4D3"></div>
                    <div data-src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/355958397_626953279392414_2392151218209588322_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lsU_IKK4EqAAX91QEQg&_nc_oc=AQn4k3Ze9_BPKYHNBKeqs8EeNKFZe61OTbRYwBgeYzNdgins2VeL57KYFnIetzdODIM&_nc_ht=scontent.ftun2-2.fna&oh=03_AdTU5zHtFdeARfFZnyddKyIOAD3qZkklIzIOmijKCPckow&oe=64BDC52E"></div>
                    <div data-src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/355806407_997859074723154_1423734920648509889_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_M1zcNQPM9oAX-GlLzL&_nc_ht=scontent.ftun2-2.fna&oh=03_AdRcC7gErA9V_u921_FzltLd0_VRf6OiPjU_ySaKqKZQXw&oe=64BDCC02"></div>
                </AwesomeSlider>
                 */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__item__text" style={{ paddingBottom: "40px" }}>
                                <h2 style={{ background: "#EDF6BD" }}>{HomeTranslations[language]["Ovins & Brebis"]}</h2>
                                <Link to={routes.SHOP} style={{ background: "#EDF6BD" }}>
                                    {HomeTranslations[language]["Consultez Notre Shop"]}
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-4">
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                    <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/355385132_931223464829885_5643326160151289013_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=n9piaYL0ddoAX8B6zA1&_nc_ht=scontent.ftun14-1.fna&oh=03_AdQ72f0NROrlKPhvg4lESJh9NzPBivuwUSD_-lLFRbr1DA&oe=64B7296B" alt="" />
                                </div>
                                <div className="banner__item__text">
                                    <h2 style={{ background: "#EDF6BD" }}>{HomeTranslations[language]["Poulailler & Agnelles"]}</h2>
                                    <Link to={routes.ABOUTUS} style={{ background: "#EDF6BD" }}>
                                        {HomeTranslations[language]["Contactez Nous"]}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product spad">
                <div className="container">
                    <SimpleDialog
                        selectedValue={selectedValue}
                        open={isOpen}
                        onClose={handleClickClose}
                    />
                    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
                        <Toolbar>
                            <SpeedDial
                                ariaLabel="Settings"
                                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                icon={<SettingsIcon />}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                open={open}
                            >
                                {actions.map((action) => (
                                    <SpeedDialAction
                                        key={action.key}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        onClick={() => handleAction(action.key)}
                                    />
                                ))}
                            </SpeedDial>
                        </Toolbar>
                    </AppBar>
                    <div className="row">
                        <MyContext.Provider value={{ activeFilter, handleFilterClick }}>
                            <ActiveTabs
                                myTabs={myTabs}
                            >
                            </ActiveTabs>
                        </MyContext.Provider>
                    </div>
                </div>
            </section>
            <Footer />
            <Modal />
            <JsScripts />
        </div>
    )
}
