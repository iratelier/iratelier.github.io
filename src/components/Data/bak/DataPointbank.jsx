import React from "react";

//이미지 경로 : /public/resources/images/experience/thumbs/horizontal/
//이미지 경로 : /public/resources/images/experience/
//포트폴리오 경로 :/public/iframe/
//%PUBLIC_URL%/iframe/3029_krafton.html
//%PUBLIC_URL%/resources/images/experience/thumbs/horizontal/img_thumb_default.jpg

const DataPointbank = [
    // {
    //     childKey: 1026,
    //     image: "/resources/images/experience/thumbs/horizontal/img_thumb_bookfrend.jpg",
    //     header: {
    //         content: "[북프렌드] 셀프 책 소독기 웹 사이트 리뉴얼",
    //         // href: "URL",
    //         // target: "_blank",
    //         // className: "",
    //     },
    //     meta: "웹 사이트 구축, 웹 사이트 메인 및 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2012.12 ~ 2013.02\n 기여도 : 디자인 100%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
    //     description: "",
    //     extra: "",
    // },
    {
        childKey: 1025,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_echophone.jpg",
        header: {
            content: "[에코폰] SK 에코폰 모바일 애플리케이션 제작",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "애플리케이션 구축, 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 제작 : 2012.11 ~ 2012.12\n 기여도 : 디자인 100%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1024,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_wellihilli.jpg",
        header: {
            content: "[웰리힐리파크] 스키장 및 골프클럽 소개 웹 사이트, 예약하기 모바일 애플리케이션, 스키장 예약 발권 키오스크 구축",
            href: "https://www.wellihillipark.com/",
            target: "_blank",
            className: "",
        },
        meta: "애플리케이션 구축, 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 구축 : 2012.10 ~ 2012.12\n 기여도 : 디자인 30%, 퍼블리싱 50%\n 사용기술 : HTML5, Javascript",
        description: "URL : https://www.wellihillipark.com/",
        extra: "",
    },
    {
        childKey: 1023,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_seoulmode.jpg",
        header: {
            content: "[서울모드] 반응형 웹 사이트 리뉴얼, 웹 사이트 운영/유지보수",
            href: "https://seoulmode.or.kr/",
            target: "_blank",
            className: "",
        },
        meta: "웹 사이트 구축, 웹 사이트 메인 및 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱, 웹 사이트 운영/유지보수\n 리뉴얼/운영 : 2012.06 ~ 2012.12\n 기여도 : 디자인 40%, 퍼블리싱 50%\n 사용기술 : HTML5, Javascript",
        description: "URL : https://seoulmode.or.kr/",
        extra: "",
    },
    {
        childKey: 1022,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_evermer.jpg",
        header: {
            content: "[에버메르] 화장품, 건강식품 종합 쇼핑몰 웹 사이트 구축",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트구축, UI 구조 설계 및 퍼블리싱\n 구축 : 2012.05 ~ 2012.08\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1021,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_mworld.jpg",
        header: {
            content: "[엠월드] 중고차 분양 종합 쇼핑몰 웹 사이트 리뉴얼",
            href: "http://www.m-world.kr/",
            target: "_blank",
            className: "",
        },
        meta: "웹 사이트 구축, 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2012.05 ~ 2012.07\n 기여도 : 디자인 50%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "URL : http://www.m-world.kr/",
        extra: "",
    },
    {
        childKey: 1020,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_yonseicoop.jpg",
        header: {
            content: "[연세생활건강] 기업소개 웹 사이트 리뉴얼",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트 구축, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2012.04 ~ 2012.10\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1019,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_tangmo.jpg",
        header: {
            content: "[Tangmo] 태국 화장품 도매 쇼핑몰 웹 사이트 구축",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트 구축, 웹 사이트 메인 및 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 구축 : 2012.03 ~ 2012.05\n 기여도 : 디자인 100%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1018,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_mcarman.jpg",
        header: {
            content: "[엠카맨] 중고차 조회 및 판매관리 모바일 애플리케이션 리뉴얼",
            href: "http://mcarman.com/",
            target: "_blank",
            className: "",
        },
        meta: "애플리케이션 구축, 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2012.01 ~ 2012.06\n 기여도 : 디자인 50%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "URL : http://mcarman.com/",
        extra: "",
    },
    {
        childKey: 1017,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_ts.jpg",
        header: {
            content: "[ts모바일] 모바일 애플리케이션 구축(지역무관 채권 신청 서비스, 자동차 토털이력정보조회, 자동차 기본사항조회)",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "애플리케이션 구축, 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 구축 : 2011.11 ~ 2012.12\n 기여도 : 디자인 100%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1016,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_nucerity.jpg",
        header: {
            content: "[뉴세리티] 웹 사이트 구축",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트 구축, UI 구조 설계 및 퍼블리싱\n 구축 : 2011.11 ~ 2011.12\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1015,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_carplus.jpg",
        header: {
            content: "[카플러스] 중고차 분양몰 템플릿 작업, 모바일 애플리케이션 구축",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트/애플리케이션 구축, 웹 사이트 메인 및 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱, 상사별 테마 적용 퍼블리싱\n 구축 : 2011.11 ~ 2012.03\n 기여도 : 디자인 80%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1014,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_koreahanbaek.jpg",
        header: {
            content: "[고려한백] 판매관리 모바일 애플리케이션 리뉴얼",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "애플리케이션 구축, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2011.11\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1013,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_mpark.jpg",
        header: {
            content: "[엠파크] 중고차 분양 종합 쇼핑몰 웹 사이트 및 모바일 애플리케이션, 단지관리 시스템, 단지내 종합 키오스크 구축",
            href: "http://www.m-park.co.kr/",
            target: "_blank",
            className: "",
        },
        meta: "웹 사이트/애플리케이션 구축, 웹 사이트/애플리케이션 상세 콘텐츠 디자인, 키오스크 디자인, 단지관리 시스템 디자인, UI 구조 설계 및 퍼블리싱\n 구축 : 2011.10 ~ 2012.07\n 기여도 : 디자인 50%, 퍼블리싱 40%\n 사용기술 : HTML5, Javascript",
        description: "URL : http://www.m-park.co.kr/",
        extra: "",
    },
    {
        childKey: 1012,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_jschool.jpg",
        header: {
            content: "[제이에듀] 방과 후 영어 학습 웹 사이트, 방과 후 영어 학습 테스트 모듈 제작, 방과 후 선생님 학생 관리 애플리케이션 구축",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트/애플리케이션 구축, 영어 학습 테스트 모듈 제작, 방과 후 영어 학습 상세 콘텐츠 디자인, 학생관리 애플리케이션 디자인, UI 구조 설계 및 퍼블리싱\n 구축 : 2011.10 2012.04\n 기여도 : 디자인 40%, 퍼블리싱 50%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1011,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_cpcq.jpg",
        header: {
            content: "[CPCQ] 직업 인성 검사 프로그램",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "상세 콘텐츠 퍼블리싱\n 제작 : 2011.09\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1010,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_miev.jpg",
        header: {
            content: "[미애부] 판매관리 모바일 애플리케이션 리뉴얼",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "애플리케이션 구축, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2011.06 ~ 2011.09\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1009,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_seoulmode.jpg",
        header: {
            content: "[서울모드] 웹 사이트 메인 리뉴얼",
            href: "https://seoulmode.or.kr/",
            target: "_blank",
            className: "",
        },
        meta: "웹 사이트 메인 디자인, UI 구조 설계 및 메인과 상세 분리 퍼블리싱\n 리뉴얼 : 2011.06 ~ 2011.07\n 기여도 : 디자인 40%, 퍼블리싱 80%\n 사용기술 : HTML5, Javascript",
        description: "URL : https://seoulmode.or.kr/",
        extra: "",
    },
    {
        childKey: 1008,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_sland.jpg",
        header: {
            content: "[에스랜드] 판매관리 모바일 애플리케이션 리뉴얼",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "애플리케이션 구축, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2011.06\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1007,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_mworld.jpg",
        header: {
            content: "[엠월드] 중고차 분양 종합 쇼핑몰 웹 사이트 및 모바일 애플리케이션, 단지관리 시스템 구축",
            href: "http://www.m-world.kr/",
            target: "_blank",
            className: "",
        },
        meta: "웹 사이트/애플리케이션 구축, 웹 사이트/애플리케이션 상세 콘텐츠 디자인, 키오스크 디자인, 단지관리 시스템 디자인, UI 구조 설계 및 퍼블리싱\n 구축 : 2010.09 ~ 2010.12\n 기여도 : 디자인 40%, 퍼블리싱 70%\n 사용기술 : HTML5, Javascript",
        description: "URL : http://www.m-world.kr/",
        extra: "",
    },
    {
        childKey: 1006,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_mcarman.jpg",
        header: {
            content: "[엠카맨] 중고차 조회 및 판매관리 웹 사이트 및 모바일 애플리케이션 리뉴얼",
            href: "http://mcarman.com/",
            target: "_blank",
            className: "",
        },
        meta: "웹 사이트/애플리케이션 구축, 웹 사이트 메인 및 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2010.06 ~ 2010.12\n 기여도 : 디자인 50%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "URL : http://mcarman.com/",
        extra: "",
    },
    {
        childKey: 1005,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_diamondtree.jpg",
        header: {
            content: "[다이아몬드트리] 글로벌 웹 사이트(한국어 버전) 추가 제작",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "상세 콘텐츠 퍼블리싱\n 제작 : 2010.06 ~ 2010.07\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1004,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_tdvine.jpg",
        header: {
            content: "[tdvine] 인터넷전화(VoIP) 네트워크장비 셋탑장비 설정 페이지 제작",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "네트워크장비 셋탑장비 설정 페이지 제작, UI 구조 설계 및 퍼블리싱\n 제작 : 2010.08 ~ 2010.09\n 기여도 : 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1003,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_ecloud.jpg",
        header: {
            content: "[eCloud] 클라우드 서비스 영문 웹 사이트 제작",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트 구축, 웹 사이트 메인 및 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 제작 : 2010.08\n 기여도 : 디자인 100%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1002,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_slk.jpg",
        header: {
            content: "[SLK] 기업소개 웹 사이트 리뉴얼",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트 구축, 웹 사이트 메인 및 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 리뉴얼 : 2010.05 ~ 2010.07\n 기여도 : 디자인 50%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
    {
        childKey: 1001,
        image: "/resources/images/experience/thumbs/horizontal/img_thumb_superstar.jpg",
        header: {
            content: "[슈퍼스타M] 온라인 오디션 지원 웹 사이트 및 모바일 애플리케이션 구축",
            // href: "URL",
            // target: "_blank",
            // className: "",
        },
        meta: "웹 사이트/애플리케이션 구축, 웹 사이트 메인 및 상세 콘텐츠 디자인, UI 구조 설계 및 퍼블리싱\n 구축 : 2010.03 ~ 2010.06\n 기여도 : 디자인 50%, 퍼블리싱 100%\n 사용기술 : HTML5, Javascript",
        description: "",
        extra: "",
    },
];

export default DataPointbank;
