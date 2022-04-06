import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
    return (
        <>
            <Container id="container" className="contact">
                <div className="container-wrap">
                    <h2 className="txt-headline">Contact To Me!</h2>
                    <div className="contents-wrap">
                        <div className="contact-me">
                            <ul>
                                <li>
                                    <a href="mailto:poppymanye@naver.com" target="_blank" className="text-lg text-slate-500 dark:text-slate-400">
                                        MAIL : poppymanye@naver.com
                                    </a>
                                </li>
                                <li>
                                    <a href="https://iratelier.github.io//" target="_blank" className="text-lg text-slate-500 dark:text-slate-400">
                                        GitHub : https://iratelier.github.io/
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default Contact;
