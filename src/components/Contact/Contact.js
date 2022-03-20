import React from "react";

const Contact = () => {
  return (
    <section id="container" className="contact">
      <div className="container-wrap">
        <h2 className="txt-headline text-slate-900 dark:text-slate-200">
          Contact To Me!
        </h2>
        <div className="contents-wrap">
          <div className="contact-me">
            <ul>
              <li>
                <a
                  href="mailto:poppymanye@naver.com"
                  target="_blank"
                  className="text-lg text-slate-500 dark:text-slate-400"
                >
                  MAIL : poppymanye@naver.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/iratelier/"
                  target="_blank"
                  className="text-lg text-slate-500 dark:text-slate-400"
                >
                  INTRAGRAM : instagram.com/iratelier
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
