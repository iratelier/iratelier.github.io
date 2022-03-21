import React from "react";

//이미지 경로 : /public/resources/image/experience/thumbs/horizontal/
//이미지 경로 : /public/resources/image/experience/
//포트폴리오 경로 :/public/iframe/
//%PUBLIC_URL%/iframe/3029_krafton.html
//%PUBLIC_URL%/resources/image/experience/thumbs/horizontal/img_thumb_default.jpg

const DataPontbank = [
  {
    childKey: 1029,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_bookfrend.jpg",
    header: "[북프렌드] 셀프 책 소독기 웹 사이트 리뉴얼",
    meta: "- 디자인 100%, 퍼블리싱 100%\n- 웹 사이트 메인 및 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2012.12 - 2013.02",
  },
  {
    childKey: 1028,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_echophone.jpg",
    header: "[에코폰] SK 에코폰 모바일 어플리케이션 제작",
    meta: "- 디자인 100%, 퍼블리싱 100%\n- 웹 사이트 메인 및 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 제작 : 2012.11 - 2012.12",
  },
  {
    childKey: 1027,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_wellihilli.jpg",
    header:
      "[웰리힐리파크] 스키장 및 골프클럽 소개 웹 사이트, 예약하기 모바일 어플리케이션, 스키장 예약 발권 키오스크 구축",
    meta: "- 디자인 30%, 퍼블리싱 50%\n- 상세 콘텐츠 디자인\n- 콘텐츠 퍼블리싱",
    description: "",
    extra: "- 구축 : 2012.10 - 2012.12",
  },
  {
    childKey: 1026,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_seoulmode.jpg",
    header: "[서울모드] 반응형 웹 사이트 리뉴얼, 웹 사이트 운영/유지보수",
    meta: "- 디자인 40%, 퍼블리싱 50%\n- 웹 사이트 메인 및 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱\n- 웹 사이트 운영/유지보수",
    description: "",
    extra: "- 리뉴얼/운영 : 2012.06 - 2012.12",
  },
  {
    childKey: 1025,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_evermer.jpg",
    header: "[에버메르] 화장품, 건강식품 종합 쇼핑몰 웹 사이트 구축",
    meta: "- 퍼블리싱 100%\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 구축 : 2012.05 - 2012.08",
  },
  {
    childKey: 1024,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_mworld.jpg",
    header: "[엠월드] 중고차 분양 종합 쇼핑몰 웹 사이트 리뉴얼",
    meta: "- 디자인 50%, 퍼블리싱 100%\n- 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2012.05 - 2012.07",
  },
  {
    childKey: 1023,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_yonseicoop.jpg",
    header: "[연세생활건강] 기업소개 웹 사이트 리뉴얼",
    meta: "- 퍼블리싱 100%\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2012.04 - 2012.10",
  },
  {
    childKey: 1022,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_tangmo.jpg",
    header: "[Tangmo] 태국 화장품 도매 쇼핑몰 웹 사이트 구축",
    meta: "- 디자인 100%, 퍼블리싱 100%\n- 웹 사이트 메인 및 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: ": 2012.03 - 2012.05",
  },
  {
    childKey: 1021,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_mcarman.jpg",
    header: "[엠카맨] 중고차 판매관리 모바일 어플리케이션 리뉴얼",
    meta: "- 디자인 50%, 퍼블리싱 100%\n- 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2012.01 - 2012.06",
  },
  {
    childKey: 1018,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_ts.jpg",
    header:
      "[ts모바일] 지역무관 채권 신청 서비스, 자동차 토털이력정보조회, 자동차 기본사항 모바일 어플리케이션 구축",
    meta: "- 디자인 100%, 퍼블리싱 100%\n- 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 구축 : 2011.11 - 2012",
  },
  {
    childKey: 1017,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_nucerity.jpg",
    header: "[뉴세리티] 웹 사이트 구축",
    meta: "- 퍼블리싱 100%\n- 콘텐츠 퍼블리싱",
    description: "",
    extra: "- 구축 : 2011.11 - 2011.12",
  },
  {
    childKey: 1016,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_carplus.jpg",
    header: "[카플러스] 중고차 분양몰 템플릿 작업, 모바일 어플리케이션 구축",
    meta: "- 디자인 80%, 퍼블리싱 100%\n- 웹 사이트 메인 및 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱\n- 상사별 테마 적용 퍼블리싱",
    description: "",
    extra: "- 구축 : 2011.11 - 2012.03",
  },
  {
    childKey: 1015,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_koreahanbaek.jpg",
    header: "[고려한백] 판매관리 모바일 어플리케이션 리뉴얼",
    meta: "- 퍼블리싱 100%\n- 콘텐츠 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2011.11",
  },
  {
    childKey: 1014,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_mpark.jpg",
    header:
      "[엠파크] 중고차 분양 종합 쇼핑몰 웹 사이트, 모바일 어플리케이션, 단지관리 시스템, 단지내 종합 키오스크 구축",
    meta: "- 디자인 50%, 퍼블리싱 40%\n- 상세 콘텐츠 디자인, 키오스크 디자인, 단지관리 시스템 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 구축 : 2011.10 - 2012.07",
  },
  {
    childKey: 1013,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_jschool.jpg",
    header:
      "[제이에듀] 방과 후 영어 학습 웹 사이트, 방과 후 영어 학습 테스트 모듈 제작, 방과 후 선생님 학생 관리 어플리케이션 구축",
    meta: "- 디자인 40%, 퍼블리싱 50%\n- 학습 상세 콘텐츠 디자인, 관리 시스템 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: ": 2011.10 - 2012.04",
  },
  {
    childKey: 1012,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_cpcq.jpg",
    header: "[CPCQ] 직업 인성 검사 프로그램",
    meta: "- 퍼블리싱 100%\n- 콘텐츠 퍼블리싱",
    description: "",
    extra: "- 제작 : 2011.09",
  },
  {
    childKey: 1011,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_miev.jpg",
    header: "[미애부] 판매관리 모바일 어플리케이션 리뉴얼",
    meta: "- 퍼블리싱 100%\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2011.06 - 2011.09",
  },
  {
    childKey: 1010,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_seoulmode.jpg",
    header: "[서울모드] 웹 사이트 메인 리뉴얼",
    meta: "- 디자인 40%, 퍼블리싱 80%\n- 웹 사이트 메인 디자인\n- 웹 UI 구조 설계 및 메인과 상세 분리 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2011.06 - 2011.07",
  },
  {
    childKey: 1009,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_sland.jpg",
    header: "[에스랜드] 판매관리 모바일 어플리케이션 리뉴얼",
    meta: "- 퍼블리싱 100%\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2011.06",
  },
  {
    childKey: 1008,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_slk.jpg",
    header: "[SLK] 건강식품 판매 전용 웹 사이트 리뉴얼",
    meta: "- 퍼블리싱 100%\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2010.10 - 2010.12",
  },
  {
    childKey: 1007,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_mworld.jpg",
    header:
      "[엠월드] 중고차 분양 종합 쇼핑몰 웹 사이트, 모바일 어플리케이션, 단지관리 시스템 구축",
    meta: "- 디자인 40%, 퍼블리싱 70%\n- 상세 콘텐츠 디자인, 키오스크 디자인, 단지관리 시스템 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 구축 : 2010.09 - 2010.12",
  },
  {
    childKey: 1006,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_mcarman.jpg",
    header:
      "[엠카맨] 중고차 조회 및 정보 조회 웹 사이트 및 모바일 어플리케이션 리뉴얼",
    meta: "- 디자인 50%, 퍼블리싱 100%\n- 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2010.06 - 2010.12",
  },
  {
    childKey: 1005,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_diamondtree.jpg",
    header: "[다이아몬드트리] 글로벌 웹 사이트(한국어 버전) 추가 제작",
    meta: "- 퍼블리싱 100%\n- 콘텐츠 퍼블리싱",
    description: "",
    extra: "- 제작 : 2010.06 - 2010.07",
  },
  {
    childKey: 1004,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_tdvine.jpg",
    header: "[tdvine] 인터넷전화(VoIP) 셋탑장비 설정 페이지 제작",
    meta: "- 퍼블리싱 100%\n- 네트워크장비 설정 퍼블리싱",
    description: "",
    extra: "- 제작 : 2010.08 - 2010.09",
  },
  {
    childKey: 1003,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_ecloud.jpg",
    header: "[eCloud] 클라우드 서비스 영문 웹 사이트 제작",
    meta: "- 디자인 100%, 퍼블리싱 100%\n- 웹 사이트 메인 및 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 제작 : 2010.08",
  },
  {
    childKey: 1002,
    image: "/resources/image/experience/thumbs/horizontal/img_thumb_slk.jpg",
    header: "[SLK] 기업소개 웹 사이트 리뉴얼",
    meta: "- 디자인 50%, 퍼블리싱 100%\n- 웹 사이트 메인 및 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 리뉴얼 : 2010.05 - 2010.07",
  },
  {
    childKey: 1001,
    image:
      "/resources/image/experience/thumbs/horizontal/img_thumb_superstar.jpg",
    header:
      "[슈퍼스타M] 온라인 오디션 지원 웹 사이트, 모바일 어플리케이션 구축",
    meta: "- 디자인 50%, 퍼블리싱 100%\n- 웹 사이트 메인 및 상세 콘텐츠 디자인\n- UI 구조 설계 및 퍼블리싱",
    description: "",
    extra: "- 구축 : 2010.03 - 2010.06",
  },
];

export default DataPontbank;
