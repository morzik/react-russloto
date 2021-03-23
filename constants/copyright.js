export const intro = {
  attr: {
    id: "block1"
  },
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
      sourceData: {
        sources: [
          {
            srcSet: "images/intro/person_m.webp 1x,images/intro/person_m_2.webp 2x",
            type: "image/webp",
            media: "(max-width:1023px)"
          },
          {
            srcSet: "images/intro/person_m.png 1x,images/intro/person_m_2.png 2x",
            media: "(max-width:1023px)"
          },
          {
            srcSet: "images/intro/person.webp",
            type: "image/webp"
          }
        ]
      },
      imgAttr: {
        src: "images/intro/person.png",
        alt: "icons-1",

      }
    },
    table: {
      sourceData: {
        sources: [
          {
            srcSet: "images/intro/table_m.webp 1x,images/intro/table_m_2.webp 2x",
            type: "image/webp",
            media: "(max-width:1023px)"
          },
          {
            srcSet: "images/intro/table_m.png 1x,images/intro/table_m_2.png 2x",
            media: "(max-width:1023px)"
          },
          {
            srcSet: "images/intro/table.webp",
            type: "image/webp"
          }
        ]
      },
      imgAttr: {
        src: "images/intro/table.png",
        alt: "icons-2",

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
          alt: "Русское лото",

        }
      }
    },
    menu: [
      {
        className: "custom-menu__item_1 custom-menu__item_active",
        href: "block3",
        label: "Как участвовать"
      },
      {

        className: "custom-menu__item_2",
        href: "block2",
        label: "О лотерее"
      },
      {
        className: "custom-menu__item_3",
        href: "block5",
        label: "Победители"
      },

      {
        className: "custom-menu__item_4",
        href: "block7",
        label: "Правила"
      },
      {
        className: "custom-menu__item_5",
        href: "block8",
        label: "Безопасность"
      }
    ]
  }
};
export const about = {
  attr: {
    id: "block2"
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
      sourceData: {
        srcSetPrefix: "images/instruction/video-pic",
        sources: [
          {
            srcSetSuffix: "-m@2x.webp",
            type: "image/webp",
            media: "(max-width:1023px)"
          },
          {
            srcSetSuffix: "-m.png",
            media: "(max-width:1023px)"
          },
          {
            srcSetSuffix: ".webp",
            type: "image/webp"
          }
        ]
      },
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
      className: "info-block__item_1",
      id: "1",
      icon: {
        name: "info-block/1"
      },
      text: "Главная и&nbsp;самая любимая телелотерея&nbsp;страны. Розыгрыши по выходным, которых с&nbsp;нетерпением ждут всей семьей"
    },
    {
      className: "info-block__item_2",
      id: "2",
      icon: {
        name: "info-block/2"
      },
      text: "Разыгрываем: дома, автомобили, путешествия и&nbsp;рекордные денежные призы"
    },
    {
      className: "info-block__item_3",
      id: "3",
      icon: {
        name: "info-block/3"
      },
      text: "<p>Уже разыграно более 36&nbsp;миллиардов рублей.</p><p>По&nbsp;статистике, 81% участников государственных лотерей выигрывает</p>"
    }
  ],
  more: {
    icon:{
      name:"info-block/tv"
    },
    text: "<span>Результаты розыгрыша смотрите по воскресеньям в 8:20 на НТВ</span> Время в вашем регионе может отличаться от указанного. Следите за ТВ-программой.",
    data: "Данные с 2012 года"
  },
  button: {
    tag: "a",
    text: "Участвовать",
    className: "info-block__button",
    id: "buy-tickets-3",
    target: "_blank",
    href: "https://www.stoloto.ru/ruslotto/game?lastdraw",
    "data-mhref": "https://m.stoloto.ru/ruslotto/game?lastdraw"
  }
};
export const winners = {
  attr: {
    id: "block5"
  },
  bg: {
    sourceData: {
      sources: [
        {
          srcSet: "images/1px.png",
          media: "(max-width:1023px)"
        }
      ]
    },
    imgAttr: {
      src: "images/winners/bg.svg",
      alt: "decoration"
    }
  },
  carousel: [
    {
      id: "1",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/1",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/1.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/1.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/1.png"
        }
      },
      title: "&laquo;Забыли про билеты на&nbsp;два месяца&raquo;",
      history: "Марина участвует в&nbsp;лотереях вместе с&nbsp;супругом. Они приобретают билеты на&nbsp;праздничные тиражи и&nbsp;даты, имеющие особое значение для их&nbsp;семьи. Она купила билеты, забыла про них, а&nbsp;потом проверила через два месяца в&nbsp;лотерейном киоске и&nbsp;узнала о&nbsp;своей победе.",
      name: "Марина \nСинцова",
      sum: "загородный дом",
      sign: "Выигрыш"
    },
    {
      id: "2",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/2",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/2.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/2.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/2.png"
        }
      },
      title: "&laquo;Победа перевернула мой мир&raquo;",
      history: "Наталья всегда считала себя невезучей и&nbsp;участвовала в&nbsp;лотерее только раз &mdash; на&nbsp;Новый год. Счастливый билет выбрала и&nbsp;подарила ей&nbsp;подруга. Наталья забыла о&nbsp;розыгрыше и&nbsp;проверила результаты только через пару недель на&nbsp;сайте &laquo;Столото&raquo;.",
      name: "Наталья \nАрабаджи",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "3",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/3",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/3.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/3.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/3.png"
        }
      },
      title: "&laquo;Удачно я&nbsp;на&nbsp;почту зашёл&raquo;",
      history: "Андрей участвует в&nbsp;лотереях три года, приобретает билеты в&nbsp;разных местах. Счастливый билет он&nbsp;купил в&nbsp;почтовом отделении, взял первый попавшийся. Мужчина узнал о&nbsp;выигрыше в&nbsp;понедельник, проверив результаты розыгрыша на&nbsp;сайте &laquo;Столото&raquo;.",
      name: "Андрей \nПавлик",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "4",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/4",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/4.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/4.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/4.png"
        }
      },
      title: "&laquo;Конечно, я&nbsp;рад такому повороту событий&raquo;",
      history: "Мужчина три года участвует в&nbsp;лотереях, покупает билеты на&nbsp;сайте &laquo;Столото&raquo;. В&nbsp;одном из&nbsp;тиражей &laquo;Русского лото&raquo; он&nbsp;выиграл двести рублей и&nbsp;купил на&nbsp;них два билета на&nbsp;следующий тираж. Один из&nbsp;этих билетов принёс ему потрясающий выигрыш!",
      name: "Махмудапанди \nДжамалодинов",
      sum: "10&nbsp;000&nbsp;000&nbsp;₽",
      sign: "Выигрыш"
    },
    {
      id: "5",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/5",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/5.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/5.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/5.png"
        }
      },
      title: "&laquo;Всегда думал, что готов к новым победам&raquo;",
      history: "Для участника это уже второй крупный выигрыш в&nbsp;лотерею. Счастливый билет Артем купил в&nbsp;мобильном приложении &laquo;Столото&raquo;. Когда на&nbsp;телефон пришло СМС, победитель зашел личный кабинет и&nbsp;очень обрадовался.",
      name: "Артём \nАринич",
      sum: "1&nbsp;200&nbsp;000&nbsp;₽",
      sign: "Выигрыш"
    },
    {
      id: "6",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/6",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/6.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/6.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/6.png"
        }
      },
      title: "&laquo;Приятно осознавать, что выиграл в&nbsp;лотерею&raquo;",
      history: "Иван делал покупки в&nbsp;продуктовом магазине у&nbsp;дома и&nbsp;приобрёл один лотерейный билет. Через несколько дней мужчина узнал, как ему повезло. С&nbsp;помощью выигрыша он&nbsp;закрыл кредит, а&nbsp;оставшуюся часть вложил в&nbsp;свой бизнес.",
      name: "Иван \nГромик",
      sum: "1 000 000 ₽",
      sign: "Выигрыш"
    },
    {
      id: "7",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/7",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/7.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/7.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/7.png"
        }
      },
      title: "&laquo;Билет оказался с&nbsp;сюрпризом&raquo;",
      history: "Богдан решил последовать примеру отца, который участвует в&nbsp;лотереях уже пятнадцать лет. Счастливый билет был куплен в&nbsp;киоске &laquo;Столото&raquo;. Богдан взял сразу 10&nbsp;билетов, и&nbsp;один из&nbsp;них принёс большую победу!",
      name: "Богдан\nДубина",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "8",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/8",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/8.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/8.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/8.png"
        }
      },
      title: "&laquo;Потерял дар речи&raquo;",
      history: "Сначала Анатолий купил девять билетов. В&nbsp;каждом искал в&nbsp;свои любимые числа и&nbsp;дату рождения. Через несколько дней ярославец выбрал случайным образом ещё один билет на&nbsp;сайте &laquo;Столото&raquo;. Все десять билетов оказались выигрышными, но&nbsp;именно последний принёс большую удачу!",
      name: "Анатолий \nЕрмилов",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "9",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/9",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/9.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/9.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/9.png"
        }
      },
      title: "&laquo;Почти затёрли билет до&nbsp;дыр!&raquo;",
      history: "Татьяна покупает билеты для супруга&nbsp;&mdash; ему нравится следить за&nbsp;трансляциями тиражей по&nbsp;телевизору и&nbsp;зачёркивать числа в&nbsp;игровых полях. &laquo;В&nbsp;этот раз продавец в&nbsp;лотерейном киоске сказала, что я&nbsp;должна выиграть крупную сумму. И&nbsp;оказалась права&raquo;!",
      name: "Татьяна \nКайбелева",
      sum: "1&nbsp;000&nbsp;150 ₽",
      sign: "Выигрыш"
    },
    {
      id: "10",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/10",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/10.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/10.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/10.png"
        }
      },
      title: "&laquo;Чуть со&nbsp;стула не&nbsp;упал&raquo;",
      history: "Денис считает, что секрет успеха в&nbsp;том, что он&nbsp;покупает лотерейные билеты в&nbsp;хорошем настроении. Также мужчина всегда ищет в&nbsp;игровых полях числа, связанные с&nbsp;значимыми для него датами. В&nbsp;выигрышном билете, например, было число 21&nbsp;&mdash; его день рождения.",
      name: "Денис \nКондратов",
      sum: "1 000 000 ₽",
      sign: "Выигрыш"
    },
    {
      id: "11",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/11",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/11.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/11.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/11.png"
        }
      },
      title: "&laquo;Некоторое время хлопал глазами&raquo;",
      history: "Денис предпочитает участвовать в&nbsp;числовых лотереях и&nbsp;анализирует архивы тиражей. Но&nbsp;в&nbsp;этот раз он&nbsp;поступил иначе: перед сном купил билет в&nbsp;мобильном приложении &laquo;Столото&raquo;. Через несколько дней ярославец получил СМС-уведомление о&nbsp;выигрыше!",
      name: "Денис \nМильто",
      sum: "загородный дом",
      sign: "Выигрыш"
    },
    {
      id: "12",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/12",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/12.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/12.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/12.png"
        }
      },
      title: "&laquo;Неужели это произошло наяву?&raquo;",
      history: "Елена участвует в&nbsp;лотереях давно, но&nbsp;не&nbsp;регулярно. Она купила счастливый билет в&nbsp;почтовом отделении, когда отправляла письмо. Женщина смотрела трансляцию розыгрыша тиража по&nbsp;телевизору и&nbsp;испытала яркие эмоции, когда услышала, что победитель из&nbsp;Орловской области!",
      name: "Елена \nМогилевцева",
      sum: "1 000 000 ₽",
      sign: "Выигрыш"
    },
    {
      id: "13",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/13",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/13.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/13.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/13.png"
        }
      },
      title: "&laquo;Я&nbsp;&mdash; богатый дедушка&raquo;",
      history: "Владимир приобретает лотерейные билеты по&nbsp;праздникам и&nbsp;в&nbsp;значимые для него даты, чаще всего на&nbsp;почте. Мужчина не&nbsp;забудет о&nbsp;сотруднике почтового отделения, продавшем ему счастливый билет&nbsp;&mdash; порадует сладким презентом. Кстати, это лето стало особенным для Владимира: в&nbsp;июле он&nbsp;выиграл в&nbsp;лотерею, а&nbsp;в&nbsp;августе стал дедушкой уже в&nbsp;седьмой раз!",
      name: "Владимир \nПетров",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "14",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/14",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/14.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/14.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/14.png"
        }
      },
      title: "&laquo;Моё желание исполнилось&raquo;",
      history: "Год назад Владимир зарегистрировался на&nbsp;сайте &laquo;Столото&raquo;. С&nbsp;тех пор он&nbsp;старается не&nbsp;пропускать еженедельные розыгрыши. Мужчина был с&nbsp;сыном и&nbsp;другом в&nbsp;магазине, когда ему пришло СМС-уведомление о&nbsp;выигрыше. Владимир обрадовался победе как ребёнок!",
      name: "Владимир \nСажин",
      sum: "1 000 000 ₽",
      sign: "Выигрыш"
    },
    {
      id: "15",
      photo: {
        sourceData: {
          srcSetPrefix: "images/winners/15",
          sources: [
            {
              "srcSetSuffix": "-m.webp",
              "type": "image/webp",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": "-m.png",
              "media": "(max-width:1023px)"
            },
            {
              "srcSetSuffix": ".webp",
              "type": "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/15.png"
        }
      },
      prev: {
        sourceData: {
          sources: [
            {
              srcSet: "images/winners/prev/15.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/winners/prev/15.png"
        }
      },
      title: "&laquo;Я&nbsp;&mdash; оптимист&raquo;",
      history: "Виктор не&nbsp;стал&nbsp;бы лотерейным победителем, если&nbsp;бы не&nbsp;съездил в&nbsp;гости к&nbsp;другу в&nbsp;город Шахты Ростовской области. Он&nbsp;купил счастливый билет за&nbsp;компанию. Друзья решили посоревноваться, кому больше повезёт.",
      name: "Виктор Чернов",
      sum: "загородный дом",
      sign: "Выигрыш"
    }
  ],
  previewsAttr: {
    direction: 'vertical',
    loop: true,
    loopAdditionalSlides: 0,
    slidesPerView: 5,
    spaceBetween: 0,
    centeredSlides: true,
    slideToClickedSlide: true
  },
  carouselAttr: {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 18
  },
  button: {
    text: "Стать следующим",
    tag: "a",
    target: "_blank",
    className: "button_winners winners__button button_green",
    href: "https://www.stoloto.ru/ruslotto/game?int=right=1369&draw=1369",
    "data-mhref": "https://m.stoloto.ru/ruslotto/game?int=right=1369&draw=1369",
    id: "buy-tickets-4"
  },
  link: {
    className: "button_winners-link winners__link",
    text: "Больше историй в <u>соцсетях</u>",
    tag: "button",
    "data-modal": "#winners-modal"
  }
};
export const statistics = {
  attr: {
    id: "block6"
  },
  title: "Итоги 2020 года \nв «Русском лото»",
  subtitle: "Присоединяйтесь \nк победителям!",
  map: {
    image: {
      sourceData: {
        sources: [
          {
            srcSet: "images/statistics/map-m.webp 1x, images/statistics/map-m@2x.webp 2x",
            media: "(max-width:1023px)",
            type: "image/webp"
          },
          {
            srcSet: "images/statistics/map-m.png 1x, images/statistics/map-m@2x.png 2x",
            media: "(max-width:1023px)"
          },
          {
            srcSet: "images/statistics/map.webp",
            type: "image/webp"
          }
        ]
      },
      imgAttr: {
        src: "images/statistics/map.png",
        alt: "map"
      }
    }
  },

  list: [
    {
      index: "9 286 991 717 ₽",
      text: "выиграли в лотерее"
    },
    {
      index: "362",
      text: "новых миллионеров появилось"
    },
    {
      index: "188 169 688",
      text: "билетов продали"
    },
    {
      index: "500 000 000 ₽",
      text: "крупнейший выигрыш в «Русском лото»​"
    }
  ],
  button: {
    tag: "a",
    text: "Как принять участие?",
    className: "button_green statistics__button",
    id: "buy-tickets-5",
    href: "https://www.stoloto.ru/ruslotto/game?lastdraw",
    "data-mhref": "https://m.stoloto.ru/ruslotto/game?lastdraw",
    target: "_blank"
  }
};
export const rules = {
  attr: {
    id: "block7"
  },
  title: "Правила \n«Русского лото»",
  list: [
    {
      id: "1",
      image: {
        imgAttr: {
          src: "images/information-block/1.svg",
          alt: "Первый тур"
        }
      },
      title: "Первый тур",
      text: "Выигрывают билеты, в&nbsp;которых совпали 5&nbsp;чисел в&nbsp;любой горизонтальной строке."
    },
    {
      id: "2",
      image: {
        sourceData: {
          sources: [
            {
              srcSet: "images/information-block/4.svg",
              media: "(max-width:1023px)"
            }
          ]
        },
        imgAttr: {
          src: "images/information-block/2.svg",
          alt: "Второй тур"
        }
      },
      title: "Второй тур",
      text: "Выигрывают билеты, в&nbsp;которых совпали 15&nbsp;чисел в&nbsp;верхнем или нижнем поле. Если 15&nbsp;чисел совпали на&nbsp;15&nbsp;ходу, выигрывают джекпот."
    },
    {
      id: "3",
      image: {
        imgAttr: {
          src: "images/information-block/3.svg",
          alt: "Третий и последующие туры"
        }
      },
      title: "Третий \nи последующие туры",
      text: "Выигрывают билеты, в&nbsp;которых совпали все 30&nbsp;чисел"
    }
  ],
  button: {
    text: "Участвовать",
    tag: "a",
    className: "button_green rules__button",
    id: "buy-tickets-6",
    target: "_blank",
    href: "https://www.stoloto.ru/ruslotto/game?lastdraw",
    "data-mhref": "https://m.stoloto.ru/ruslotto/game?lastdraw"
  }
};
export const safety = {
  attr: {
    id: "block8"
  },
  title: "Покупайте лотереи онлайн &mdash; \nэто&nbsp;безопасно",
  carouselAttr: {
    className: "carousel",
    centeredSlides: true,
    loop: false,
    slidesPerView: "auto",
    watchOverflow: false,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 40,
      depth: 120,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      1024: {
        loop: false,
        centeredSlides: false,
        effect: 'none',
        slidesPerView: "auto",
        watchOverflow: true
      }
    }
  },
  list: [
    {
      id: "card-1",
      className: "safety__card_1",
      isActive: true,
      icon: {
        name: "safety/1"
      },
      links: [],
      title: "безопасная<br/>регистрация",
      text: "При регистрации вы указываете только свой электронный адрес и&nbsp;номер телефона. На&nbsp;этот&nbsp;номер мы будем&nbsp;отправлять вам sms&nbsp;с паролем для получения выигрышей на&nbsp;сайте. ",
      attr: {
        className: "safety__card_1 safety__card_active"
      }
    },
    {
      id: "card-2",
      className: "safety__card_2",
      isActive: false,
      icon: {
        name: "safety/2"
      },
      title: "безопасность<br/>данных",
      text: "Мы не сохраняем номера банковских карт, платёжные пароли и другие данные, которые вы вводите при оплате билетов. Вся информация хранится только на стороне платёжной системы, которую вы выбираете сами.",
      links: [
        {
          src: "images/safety/links/1.svg",
          alt: "visa"
        },
        {
          src: "images/safety/links/2.svg",
          alt: "mastercard"
        },
        {
          src: "images/safety/links/3.svg",
          alt: "мир"
        }
      ],
      attr: {
        className: "safety__card_2"
      }
    },
    {
      id: "card-3",
      className: "safety__card_3",
      isActive: false,
      icon: {
        name: "safety/3"
      },
      links: [],
      title: "Государственные<br/>лотереи",
      text: "Организатором всех лотерей в России являются Министерство спорта и Министерство финансов. Они следят за тем, чтобы все розыгрыши проводились честно, а победители вовремя получали выигрыши. ",
      attr: {
        className: "safety__card_3"
      }
    },
    {
      id: "card-4",
      className: "safety__card_4",
      isActive: false,
      icon: {
        name: "safety/4"
      },
      links: [],
      title: "Ваш билет<br>никогда<br>не потеряется",
      text: "Вся информация о купленных билетах хранится в вашем личном кабинете. Если возникнут проблемы, вы сможете обратиться в нашу службу поддержки. Мы всегда вам поможем. ",
      attr: {
        className: "safety__card_4"
      }
    }
  ],
  button: {
    text: "Купить билет",
    tag: "a",
    className: "button_yellowColor",
    id: "buy-tickets-7",
    target: "_blank",
    href: "https://www.stoloto.ru/ruslotto/game?lastdraw",
    "data-mhref": "https://m.stoloto.ru/ruslotto/game?lastdraw"
  }
};
export const footer = {
  logo: {
    image: {
      imgAttr: {
        src: "images/footer/logo-footer.svg",
        alt: "logo"
      }
    },
    target: "_blank",
    href: "https://www.stoloto.ru/",
    "data-mhref": "https://m.stoloto.ru/"
  },
  text: "Фраза &laquo;Выигрывает каждый 3-й билет!&raquo; указывает на&nbsp;вероятность выигрыша в&nbsp;&laquo;ВГЛ 3&nbsp;Спорт&raquo; (алгоритм определения выигрышей &#8470;&nbsp;6), рассчитанную математическим путём и&nbsp;равную 1&nbsp;к 3,36. &laquo;ВГЛ 3&nbsp;Спорт&raquo; (алгоритм определения выигрышей &#8470;&nbsp;6). Срок проведения лотереи&nbsp;&mdash; до&nbsp;31.12.2029&nbsp;г. Информацию об&nbsp;организаторе лотереи, о&nbsp;правилах её&nbsp;проведения, призовом фонде лотереи, количестве призов или выигрышей, сроках, месте и&nbsp;порядке получения призов или выигрышей можно узнать на&nbsp;сайте <a href='https://www.stoloto.ru' data-mhref='https://m.stoloto.ru'>stoloto.ru</a><br><br>АО&nbsp;&laquo;ТК&nbsp;&laquo;Центр&raquo;, ОГРН 1127746385095, адрес: 109316, Москва, Волгоградский пр-т, д.&nbsp;43, корп.&nbsp;3, этаж&nbsp;10, пом. XXV, ком. 13Б.<br>Лотерея не&nbsp;является способом заработка и&nbsp;источником дохода. Выигрыши носят вероятностный характер. Реклама.&nbsp;18+",
  socialBlock: {
    list: [
      {
        id: "vk",
        icon: {
          name: "social/vk"
        },
        className: "social-block__item social-block__item_vk",
        target: "_blank",
        href: "https://vk.com/stoloto"
      },
      {
        id: "fb",
        icon: {
          name: "social/fb"
        },
        className: "social-block__item social-block__item_fb",
        target: "_blank",
        href: "https://www.facebook.com/stoloto.ru"
      },
      {
        id: "ok",
        icon: {
          name: "social/ok"
        },
        className: "social-block__item social-block__item_ok",
        target: "_blank",
        href: "https://ok.ru/stoloto"
      },
      {
        id: "tw",
        icon: {
          name: "social/tw"
        },
        className: "social-block__item social-block__item_tw",
        target: "_blank",
        href: "https://twitter.com/stoloto"
      },
      {
        id: "ig",
        icon: {
          name: "social/ig"
        },
        className: "social-block__item social-block__item_ig",
        target: "_blank",
        href: "https://www.instagram.com/stoloto/"
      },
      {
        id: "yt",
        icon: {
          name: "social/yt"
        },
        className: "social-block__item social-block__item_yt",
        target: "_blank",
        href: "https://www.youtube.com/c/stolototv?sub_confirmation=1"
      }
    ]
  },
  partners: [
    {
      id: "1",
      image: {
        sourceData: {
          sources: [
            {
              srcSet: "images/footer/part-1-m.webp 1x,images/footer/part-1-m@2x.webp 2x",
              type: "image/webp",
              media: "(max-width:1023px)"
            },
            {
              srcSet: "images/footer/part-1-m.png 1x,images/footer/part-1-m@2x.png 2x",
              media: "(max-width:1023px)"
            },
            {
              srcSet: "images/footer/part-1.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/footer/part-1.png",
          alt: "icons-1"
        }
      },
      text: "Организаторами лотерей являются Министерство спорта РФ и Министерство финансов РФ."
    },
    {
      id: "2",
      image: {
        sourceData: {
          sources: [
            {
              srcSet: "images/footer/part-2-m.webp 1x,images/footer/part-2-m@2x.webp 2x",
              type: "image/webp",
              media: "(max-width:1023px)"
            },
            {
              srcSet: "images/footer/part-2-m.png 1x,images/footer/part-2-m@2x.png 2x",
              media: "(max-width:1023px)"
            },
            {
              srcSet: "images/footer/part-2.webp",
              type: "image/webp"
            }
          ]
        },
        imgAttr: {
          src: "images/footer/part-2.png",
          alt: "icons-2"
        }
      },
      className: "footer__partner-icon_big",
      text: "«Столото» состоит во Всемирной и Европейской лотерейных ассоциациях (The World Lottery Association и The European Lotteries Association). Это гарантирует соблюдение прав участников, случайность определения победителей, своевременную выплату выигрышей, конфиденциальность личных данных.",
      note: "WLA — международное объединение компаний-операторов государственных лотерей.<br/>ELA — объединение лотерейных компаний из Европы и соседних регионов."
    }
  ]
};
export const pagination = {
  list: [
    {
      id: 0,
      href: "block1"
    },
    {
      id: 1,
      href: "block2"
    },
    {
      id: 2,
      href: "block3"
    },
    {
      id: 3,
      href: "block4"
    },
    {
      id: 4,
      href: "block5"
    },
    {
      id: 5,
      href: "block6"
    },
    {
      id: 6,
      href: "block7"
    },
    {
      id: 7,
      href: "block8"
    }
  ]
};

export const winnersModal = {
  title: "Еще больше историй в <a href='https://vk.com/stoloto' target='_blank'>соцсетях</a>",
  list: [
    {
      list: [
        {
          image: {
            sourceData: {
              sources: [
                {
                  "srcSet": "images/winnersModal/1.webp",
                  "type": "image/webp"
                }
              ]
            },
            imgAttr: {
              src: "images/winnersModal/1.png"
            }
          }
        },
        {
          image: {
            sourceData: {
              sources: [
                {
                  "srcSet": "images/winnersModal/2.webp",
                  "type": "image/webp"
                }
              ]
            },
            imgAttr: {
              src: "images/winnersModal/2.png"
            }
          }
        },
        {
          image: {
            sourceData: {
              sources: [
                {
                  "srcSet": "images/winnersModal/3.webp",
                  "type": "image/webp"
                }
              ]
            },
            imgAttr: {
              src: "images/winnersModal/3.png"
            }
          }
        },
        {
          image: {
            sourceData: {
              sources: [
                {
                  "srcSet": "images/winnersModal/4.webp",
                  "type": "image/webp"
                }
              ]
            },
            imgAttr: {
              src: "images/winnersModal/4.png"
            }
          }
        }
      ]
    },
    {
      list: [
        {
          image: {
            sourceData: {
              sources: [
                {
                  "srcSet": "images/winnersModal/5.webp",
                  "type": "image/webp"
                }
              ]
            },
            imgAttr: {
              src: "images/winnersModal/5.png"
            }
          }
        },
        {
          image: {
            sourceData: {
              sources: [
                {
                  "srcSet": "images/winnersModal/6.webp",
                  "type": "image/webp"
                }
              ]
            },
            imgAttr: {
              src: "images/winnersModal/6.png"
            }
          }
        },
        {
          image: {
            sourceData: {
              sources: [
                {
                  "srcSet": "images/winnersModal/7.webp",
                  "type": "image/webp"
                }
              ]
            },
            imgAttr: {
              src: "images/winnersModal/7.png"
            }
          }
        },
        {
          image: {
            sourceData: {
              sources: [
                {
                  "srcSet": "images/winnersModal/8.webp",
                  "type": "image/webp"
                }
              ]
            },
            imgAttr: {
              src: "images/winnersModal/8.png"
            }
          }
        }
      ]
    }
  ],
  carouselAttr:{
    slidesPerView: 'auto',
    spaceBetween: 50,
    loop: false,
    navigation: {
      nextEl: '.winners-modal__carousel-nav_next',
      prevEl: '.winners-modal__carousel-nav_prev'
    },
    pagination: {
      el: '.winners-modal__pagination'
    }
  }
};
