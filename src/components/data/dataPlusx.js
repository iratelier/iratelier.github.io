import React from "react";

//이미지 경로 : /public/resources/image/experience/thumbs/horizontal/
//이미지 경로 : /public/resources/image/experience/
//포트폴리오 경로 :/public/iframe/
//%PUBLIC_URL%/iframe/3029_krafton.html
//%PUBLIC_URL%/resources/image/experience/thumbs/horizontal/img_thumb_default.jpg

const DataPlusx = [
  {
    childKey: 3024,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_krafton.jpg",
    header: {
      content: "[크래프톤] 웹 사이트 리뉴얼(PC, 모바일)",
      href: "https://www.behance.net/gallery/88492253/Krafton-game-union-Brand-eXperience-Design-renewal?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 90%",
    description: "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현",
    extra: "2019.01 - 2019.05",
  },
  // {
  //   childKey: 3023,
  //   image: "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_aboutbrand.jpg",
  //   header: {
  //     content:
  //       "[가제 - About Brand] 모바일 어플리케이션 구축 - 선행과제(대외비)",
  //   },
  //   meta: "- 퍼블리싱 100%",
  //   description: "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현",
  //   extra: "2018.12 - 2019.05",
  // },
  {
    childKey: 3022,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_etiqa.jpg",
    header: {
      content: "[에티카] 웹 사이트 구축(PC, 모바일), 웹 사이트 운영/유지보수",
      href: "https://www.behance.net/gallery/82140583/ETIQA-Brand-eXperience-Design?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 100%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 웹 사이트 운영/유지보수",
    extra: "2018.11 - 2018.12 / 2018.11 - 2019.05",
  },
  {
    childKey: 3021,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_acemaker.jpg",
    header: {
      content:
        "[에이스메이커] 웹 사이트 구축(PC, 모바일), 웹 사이트 운영/유지보수",
      href: "https://www.behance.net/gallery/90257131/Acemaker-movieworks-brand-experience-design?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 100%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 웹 사이트 운영/유지보수",
    extra: "2018.12 - 2019.05",
  },
  {
    childKey: 3020,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_nub.jpg",
    header: {
      content: "[NUB] 웹 사이트 구축(PC, 모바일), 웹 사이트 운영/유지보수",
    },
    meta: "- 퍼블리싱 100%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 웹 사이트 운영/유지보수",
    extra: "2018.09 - 2019.02, 2018.09 - 2019.05",
  },
  // {
  // childKey: 3019
  //   image: "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_jejuair.jpg",
  //   header: {
  //     content: "[제주항공] 모바일 어플리케이션 리뉴얼 - 선행과제(대외비)",
  //   },
  //   meta: "- 퍼블리싱 100%",
  //   description: "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현",
  //   extra: "2018.07 - 2018.11",
  // },
  {
    childKey: 3018,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_emart.jpg",
    header: {
      content: "[이마트몰] 이마트몰 모바일 어플리케이션/웹 리뉴얼",
      href: "www",
      target: "_blank",
    },
    meta: "- 퍼블리싱 80%",
    description: "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현",
    extra: "2018.04 - 2018.07",
  },
  {
    childKey: 3017,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_aia.jpg",
    header: {
      content: "[AIA] 헬스케어 모바일 어플리케이션 구축, 콘텐츠 제작",
    },
    meta: "- 퍼블리싱 60%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 추가 콘텐츠 퍼블리싱",
    extra: "2017.12 - 2019.05",
  },
  {
    childKey: 3016,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_tetrapod.jpg",
    header: {
      content: "[테트라포드] 웹 사이트 구축(PC, 모바일)",
      href: "https://www.behance.net/gallery/53702479/TETRAPOD-Brewing-Co-Brand-eXperience-Design?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 50%",
    description: "- UI 구조 설계 및 퍼블리싱\n- 베이스 인터렉션 설계 및 구현",
    extra: "2017.06 - 2017.10",
  },
  {
    childKey: 3015,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_lpoint.jpg",
    header: {
      content:
        "[엘포인트] 롯데 멤버쉽 웹 사이트 리뉴얼(PC, 모바일), 모바일 어플리케이션 리뉴얼",
      href: "https://www.behance.net/gallery/61855391/LPOINT-UXUI-eXperience-Design-Renewal?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 90%, 가이드 70%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 모바일 상세 가이드 작성(운영체제 별, 디바이스 별)",
    extra: "2016.06 - 2017.06",
  },
  {
    childKey: 3014,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_dootadutyfree.jpg",
    header: {
      content: "[두산 면세점] 인터넷 면세점 웹 사이트 구축(PC, 모바일)",
      href: "https://www.behance.net/gallery/42213979/DOOTA-Duty-Free-Brand-eXperience-Design?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 20%",
    description:
      "- 기존 웹 사이트 템플릿 변경, 신규 Brand Identity 적용\n- 프로모션 제안 페이지 퍼블리싱",
    extra: "2015.12",
  },
  {
    childKey: 3013,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_shinsegae.jpg",
    header: {
      content: "[신세계백화점] 모바일 어플리케이션 리뉴얼",
      href: "https://www.behance.net/gallery/55624559/Shinsegae-Department-Store-Mobile-App?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 90%, 가이드 90%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 모바일 상세 가이드 작성(운영체제 별, 디바이스 별)",
    extra: "2015.11 - 2016.09",
  },
  {
    childKey: 3012,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_celltrion.jpg",
    header: {
      content: "[셀트리온] 프로모션 웹 사이트 구축",
    },
    meta: "- 퍼블리싱 80%",
    description:
      "- 프로모션 웹 사이트 UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현",
    extra: "2015.11 - 2015.12",
  },
  {
    childKey: 3011,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_sivillage.jpg",
    header: {
      content: "[S.I Village]  웹 사이트 UI/UX 제안(PC, 모바일)",
      href: "https://www.behance.net/gallery/57243855/SIVillage-UXUI-eXperience-Design?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 30%",
    description: "- UI/UX 제안서 퍼블리싱",
    extra: "2015.10 - 2015.12",
  },
  {
    childKey: 3010,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_ygtimes.jpg",
    header: {
      content: "[YGTimes] 모바일 어플리케이션 구축",
    },
    meta: "- 퍼블리싱 90%, 가이드 100%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 모바일 상세 가이드 작성(운영체제 별, 디바이스 별)",
    extra: "2015.08 - 2015.11",
  },
  {
    childKey: 3009,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_plusx.jpg",
    header: {
      content:
        "[플러스엑스] 웹 사이트 리뉴얼(PC, 모바일), 웹 사이트 운영/유지보수(포트폴리오)",
      href: "www",
      target: "_blank",
    },
    meta: "- 퍼블리싱 90%",
    description:
      "- 웹 사이트 운영/유지보수\n포트폴리오 운영 관리\n- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현",
    extra: "2015.02 - 2017.10 / 2015.02 - 2019.05",
  },
  {
    childKey: 3008,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_5duck.jpg",
    header: {
      content: "[5DUCK] 아이돌 콘텐츠 채널 플랫폼 모바일 어플리케이션 구축",
      href: "https://www.behance.net/gallery/35977227/5DUCKS-Mobile-Application-UXUI-Design?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 50%, 가이드 100%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 모바일 상세 가이드 작성(운영체제 별, 디바이스 별)",
    extra: "2015.02 - 2015.06",
  },
  {
    childKey: 3006,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_ssgpay.jpg",
    header: {
      content: "[SSG PAY] 신세계 통합 결제 플랫폼 모바일 어플리케이션 구축",
      href: "https://www.behance.net/gallery/35508707/SSG-PAY-Easy-Payment-Mobile-App?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 90%, 가이드 90%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 모바일 상세 가이드 작성(운영체제 별, 디바이스 별)",
    extra: "2014.11 - 2015.08",
  },
  {
    childKey: 3005,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_idframe.jpg",
    header: {
      content:
        "[ID Frame] 프로모션 웹 사이트 구축, 웹 사이트 리뉴얼, 웹 사이트 운영/유지보수",
      href: "https://www.behance.net/gallery/22769831/ID-FRAME-Keeping-your-ID-simple-and-minimal?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 90%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 웹 사이트 운영/유지보수",
    description: "- 웹 사이트 운영/유지보수",
    extra: "2014.12\n2017.11\n2014.12 - 2019.05",
  },
  {
    childKey: 3004,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_yglife.jpg",
    header: {
      content: "[YGLife] 모바일 어플리케이션 구축",
    },
    meta: "- 퍼블리싱 70%, 가이드 80%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 모바일 상세 가이드 작성(운영체제 별, 디바이스 별)",
    extra: "2014.09 - 2015.06",
  },
  {
    childKey: 3003,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_29cm.jpg",
    header: {
      content: "[29CM] 모바일 어플리케이션 리뉴얼",
      href: "https://www.behance.net/gallery/25493987/Select-Shop-29CM-iOSAndroid-App-20-Ver?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 30%, 가이드 30%",
    description:
      "- 콘텐츠 퍼블리싱\n- 모바일 상세 가이드 작성(운영체제 별, 디바이스 별)",
    extra: "2014.04 - 2016.10",
  },
  {
    childKey: 3002,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_labc.jpg",
    header: {
      content: "[Lab.C] 웹 사이트 리뉴얼, 웹 사이트 운영/유지보수",
    },
    meta: "- 퍼블리싱 50%",
    description: "- 웹 사이트 운영/유지보수",
    extra: "2014.03 - 2014.10",
  },
  {
    childKey: 3001,
    image:
      "/iratelier.github.io/resources/image/experience/thumbs/horizontal/img_thumb_bbox.jpg",
    header: {
      content: "[SK브로드밴드] SK B-Box 2.0 모바일 어플리케이션 구축",
    },
    meta: "- 가이드 30%",
    description: "- 모바일 상세 가이드 작성(운영체제 별, 디바이스 별)",
    extra: "2014.04 - 2014.12",
  },
];

export default DataPlusx;
