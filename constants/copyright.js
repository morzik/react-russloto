export const intro = {
  title: "Джекпот",
  text: "Выигрывает каждый третий билет",
  subtitle: "50 загородных домов",
  prize: "от <strong>500 000 000 ₽</strong>",
  mark: {
    text: "Попробуйте \nновые тиражи \n«Русского лото!»"
  },
  button: {
    tag: "a",
    text: "Купить билет",
    href: "https://www.stoloto.ru/ruslotto/game?lastdraw",
    "data-mhref": "https://m.stoloto.ru/ruslotto/game?lastdraw",
    target: "_blank"
  },
  bg: {
    person: {
      list: [
        {
          srcset: "images/intro/person_m.webp 1x,images/intro/person_m_2.webp 2x",
          type: "image/webp",
          media: "(max-width:1023px)"
        },
        {
          srcset: "images/intro/person_m.png 1x,images/intro/person_m_2.png 2x",
          media: "(max-width:1023px)"
        },
        {
          srcset: "images/intro/person.webp",
          type: "image/webp"
        }
      ],
      imgAttr: {
        src: "images/intro/person.png",
        alt: "icons-1"
      }
    },
    table: {
      list: [
        {
          srcset: "images/intro/table_m.webp 1x,images/intro/table_m_2.webp 2x",
          type: "image/webp",
          media: "(max-width:1023px)"
        },
        {
          srcset: "images/intro/table_m.png 1x,images/intro/table_m_2.png 2x",
          media: "(max-width:1023px)"
        },
        {
          srcset: "images/intro/table.webp",
          type: "image/webp"
        }
      ],
      imgAttr: {
        src: "images/intro/table.png",
        alt: "icons-2"
      }
    }
  },
  header: {
    logo: {
      attr: {
        href: "https://www.stoloto.ru",
        target: "_blank",
        "data-mhref": "https://m.stoloto.ru"
      },
      image: {
        imgAttr: {
          src: "images/intro/logo.svg",
          alt: "Русское лото"
        }
      }
    },
    menu: [
      {
        "className": "custom-menu__item custom-menu__item_1 custom-menu__item_active",
        "href": "#block3",
        "label": "Как участвовать"
      },
      {

        "className": "custom-menu__item_2",
        "href": "#block2",
        "label": "О лотерее"
      },
      {
        "className": "custom-menu__item_3",
        "href": "#block5",
        "label": "Победители"
      },

      {
        "className": "custom-menu__item_4",
        "href": "#block7",
        "label": "Правила"
      },
      {
        "className": "custom-menu__item_5",
        "href": "#block8",
        "label": "Безопасность"
      }
    ]
  }

};
export const about = {
  "attr": {
    "id": "block2"
  },
  title: "Акция \n«Год без забот»",
  subtitle: "среди всех билетов тиражей №1370, 1371, 1372 разыгрывается дополнительный приз в миллион рублей.",
  link: "Подробнее об акции",
  href: "rules.pdf",
  sign: "Всего: ",
  sign_m: "На этой неделе: ",
  image: {
    imgAttr: {
      src: "images/about/img.svg",
      alt: "icons-1"
    }
  },
  items: [
    {
      image: {
        imgAttr: {
          src: "images/about/1.svg",
          alt: "icons-1"
        }
      },
      text: "50 загородных домов в 4-х тиражах, денежные призы"
    },
    {
      image: {
        imgAttr: {
          src: "images/about/2.svg",
          alt: "icons-2"
        }
      },
      text: "останется 3 бочонка – выигрывает каждый \n3-й билет"
    }
  ]
};
export const instruction = {
  attr: {
    id: "block3"
  },
  title: "Как участвовать?",
  video: {
    src: "video/v1.mp4",
    attr: {
      loop: true,
      muted: true,
      autoplay: true,
      playsinline: true
    }
  },
  videoPic: {
    image: {
      list: [
        {
          srcset: "images/instruction/video-pic_m.webp 1x,images/instruction/video-pic_m_2.webp 2x",
          type: "image/webp",
          media: "(max-width:1023px)"
        },
        {
          srcset: "images/instruction/video-pic_m.png 1x, images/instruction/video-pic_m_2.png 2x",
          media: "(max-width:1023px)"
        },
        {
          srcset: "images/instruction/video-pic.webp",
          type: "image/webp"
        }
      ],
      imgAttr: {
        src: "images/instruction/video-pic.png",
        alt: "iphone"
      },
    }
  },
  list: [
    {
      title: "Выберите билет",
      body: "Комбинации в билетах проставлены заранее. Вам просто нужно выбрать один или несколько билетов со своими любимыми числами.",
      attr: {
        className: "accordion__item"
      },
      index: "1"
    },
    {
      title: "Оплатите",
      index: "2",
      body: "Оплатить билет вы можете любым удобным для вас способом. <span class='span-list'>- Банковская карта<br>- Кошелёк «Столото»<br>- QIWI Кошелек<br>- Яндекс.Деньги<br>- Со счёта мобильного телефона",
      attr: {
        className: "accordion__item"
      }
    },
    {
      index: "3",
      title: "Следите за розыгрышем",
      body: "Розыгрыши проходят каждый день в&nbsp;прямом эфире на&nbsp;сайте &laquo;Столото&raquo; и&nbsp;в&nbsp;мобильном приложении. Если вы&nbsp;пропустили розыгрыш, узнать выиграл&nbsp;ли ваш билет, можно в&nbsp;личном кабинете.",
      attr: {
        className: "accordion__item"
      }
    },
    {
      index: "4",
      title: "Получите выигрыш",
      body: "Выигрыши до 500 000 рублей можно&nbsp;получить онлайн. Если вы выиграли крупный приз, то оформить&nbsp;его можно в лотерейном центре «Столото». ",
      attr: {
        className: "accordion__item accordion__item_last"
      }
    }
  ],
  button: {
    tag: "a",
    text: "Участвовать",
    className: "button_green",
    id: "buy-tickets-2",
    target: "_blank",
    href: "https://www.stoloto.ru/ruslotto/game?lastdraw",
    "data-mhref": "https://m.stoloto.ru/ruslotto/game?lastdraw"
  }
};

export const infoBlock = {
  attr: {
    id: "block4"
  },
  title: "Играйте <br>в настоящее <br>«Русское \nлото» <br>каждую неделю!",
  info: [
    {
      icon: {
        name: "info-block/1"
      },
      text: "Главная и&nbsp;самая любимая телелотерея&nbsp;страны. Розыгрыши по выходным, которых с&nbsp;нетерпением ждут всей семьей"
    },
    {
      icon: {
        name: "info-block/2"
      },
      text: "Разыгрываем: дома, автомобили, путешествия и&nbsp;рекордные денежные призы"
    },
    {
      icon: {
        name: "info-block/3"
      },
      text: "<p>Уже разыграно более 36&nbsp;миллиардов рублей.</p><p>По&nbsp;статистике, 81% участников государственных лотерей выигрывает</p>"
    }
  ],
  more: {
    text: "<span>Результаты розыгрыша смотрите по воскресеньям в 8:20 на НТВ</span> Время в вашем регионе может отличаться от указанного. Следите за ТВ-программой.",
    data: "Данные с 2012 года"
  },
  button: {
    tag: "a",
    text: "Участвовать",
    className:"info-block__button",
    "id": "buy-tickets-3",
    "target": "_blank",
    "href": "https://www.stoloto.ru/ruslotto/game?lastdraw",
    "data-mhref": "https://m.stoloto.ru/ruslotto/game?lastdraw"
  }
};
