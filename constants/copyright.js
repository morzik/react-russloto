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
    list: [
      {
        srcSet: "images/1px.png",
        media: "(max-width:1023px)"
      }
    ],
    imgAttr: {
      src: "images/winners/bg.svg",
      alt: "decoration"
    }
  },
  item: {
    id: "0",
    photo: "images/winners/1",
    logo_1: "images/winners/logo/1.svg",
    logo_2: "images/winners/logo/1_m.svg",
    title: "&laquo;Хотела себя ущипнуть и&nbsp;убедиться, что не&nbsp;сплю&raquo;",
    history: "Марина участвует в&nbsp;лотереях вместе с&nbsp;супругом. Они приобретают билеты на&nbsp;праздничные тиражи и&nbsp;даты, имеющие особое значение для их&nbsp;семьи. Она купила билеты, забыла про них, а&nbsp;потом проверила через два месяца в&nbsp;лотерейном киоске и&nbsp;узнала о&nbsp;своей победе.",
    name: "Ирина \nМолчанова",
    sum: "3 000 000",
    sign: "Выигрыш"
  },
  carousel: [
    {
      id: "1",
      photo: "images/winners/1",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Забыли про билеты на&nbsp;два месяца&raquo;",
      history: "Марина участвует в&nbsp;лотереях вместе с&nbsp;супругом. Они приобретают билеты на&nbsp;праздничные тиражи и&nbsp;даты, имеющие особое значение для их&nbsp;семьи. Она купила билеты, забыла про них, а&nbsp;потом проверила через два месяца в&nbsp;лотерейном киоске и&nbsp;узнала о&nbsp;своей победе.",
      name: "Марина \nСинцова",
      sum: "загородный дом",
      sign: "Выигрыш"
    },
    {
      id: "2",
      photo: "images/winners/2",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Победа перевернула мой мир&raquo;",
      history: "Наталья всегда считала себя невезучей и&nbsp;участвовала в&nbsp;лотерее только раз &mdash; на&nbsp;Новый год. Счастливый билет выбрала и&nbsp;подарила ей&nbsp;подруга. Наталья забыла о&nbsp;розыгрыше и&nbsp;проверила результаты только через пару недель на&nbsp;сайте &laquo;Столото&raquo;.",
      name: "Наталья \nАрабаджи",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "3",
      photo: "images/winners/3",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Удачно я&nbsp;на&nbsp;почту зашёл&raquo;",
      history: "Андрей участвует в&nbsp;лотереях три года, приобретает билеты в&nbsp;разных местах. Счастливый билет он&nbsp;купил в&nbsp;почтовом отделении, взял первый попавшийся. Мужчина узнал о&nbsp;выигрыше в&nbsp;понедельник, проверив результаты розыгрыша на&nbsp;сайте &laquo;Столото&raquo;.",
      name: "Андрей \nПавлик",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "4",
      photo: "images/winners/4",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Конечно, я&nbsp;рад такому повороту событий&raquo;",
      history: "Мужчина три года участвует в&nbsp;лотереях, покупает билеты на&nbsp;сайте &laquo;Столото&raquo;. В&nbsp;одном из&nbsp;тиражей &laquo;Русского лото&raquo; он&nbsp;выиграл двести рублей и&nbsp;купил на&nbsp;них два билета на&nbsp;следующий тираж. Один из&nbsp;этих билетов принёс ему потрясающий выигрыш!",
      name: "Махмудапанди \nДжамалодинов",
      sum: "10&nbsp;000&nbsp;000&nbsp;₽",
      sign: "Выигрыш"
    },
    {
      id: "5",
      photo: "images/winners/5",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Всегда думал, что готов к новым победам&raquo;",
      history: "Для участника это уже второй крупный выигрыш в&nbsp;лотерею. Счастливый билет Артем купил в&nbsp;мобильном приложении &laquo;Столото&raquo;. Когда на&nbsp;телефон пришло СМС, победитель зашел личный кабинет и&nbsp;очень обрадовался.",
      name: "Артём \nАринич",
      sum: "1&nbsp;200&nbsp;000&nbsp;₽",
      sign: "Выигрыш"
    },
    {
      id: "6",
      photo: "images/winners/6",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Приятно осознавать, что выиграл в&nbsp;лотерею&raquo;",
      history: "Иван делал покупки в&nbsp;продуктовом магазине у&nbsp;дома и&nbsp;приобрёл один лотерейный билет. Через несколько дней мужчина узнал, как ему повезло. С&nbsp;помощью выигрыша он&nbsp;закрыл кредит, а&nbsp;оставшуюся часть вложил в&nbsp;свой бизнес.",
      name: "Иван \nГромик",
      sum: "1 000 000 ₽",
      sign: "Выигрыш"
    },
    {
      id: "7",
      photo: "images/winners/7",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Билет оказался с&nbsp;сюрпризом&raquo;",
      history: "Богдан решил последовать примеру отца, который участвует в&nbsp;лотереях уже пятнадцать лет. Счастливый билет был куплен в&nbsp;киоске &laquo;Столото&raquo;. Богдан взял сразу 10&nbsp;билетов, и&nbsp;один из&nbsp;них принёс большую победу!",
      name: "Богдан\nДубина",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "8",
      photo: "images/winners/8",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Потерял дар речи&raquo;",
      history: "Сначала Анатолий купил девять билетов. В&nbsp;каждом искал в&nbsp;свои любимые числа и&nbsp;дату рождения. Через несколько дней ярославец выбрал случайным образом ещё один билет на&nbsp;сайте &laquo;Столото&raquo;. Все десять билетов оказались выигрышными, но&nbsp;именно последний принёс большую удачу!",
      name: "Анатолий \nЕрмилов",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "9",
      photo: "images/winners/9",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Почти затёрли билет до&nbsp;дыр!&raquo;",
      history: "Татьяна покупает билеты для супруга&nbsp;&mdash; ему нравится следить за&nbsp;трансляциями тиражей по&nbsp;телевизору и&nbsp;зачёркивать числа в&nbsp;игровых полях. &laquo;В&nbsp;этот раз продавец в&nbsp;лотерейном киоске сказала, что я&nbsp;должна выиграть крупную сумму. И&nbsp;оказалась права&raquo;!",
      name: "Татьяна \nКайбелева",
      sum: "1&nbsp;000&nbsp;150 ₽",
      sign: "Выигрыш"
    },
    {
      id: "10",
      photo: "images/winners/10",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Чуть со&nbsp;стула не&nbsp;упал&raquo;",
      history: "Денис считает, что секрет успеха в&nbsp;том, что он&nbsp;покупает лотерейные билеты в&nbsp;хорошем настроении. Также мужчина всегда ищет в&nbsp;игровых полях числа, связанные с&nbsp;значимыми для него датами. В&nbsp;выигрышном билете, например, было число 21&nbsp;&mdash; его день рождения.",
      name: "Денис \nКондратов",
      sum: "1 000 000 ₽",
      sign: "Выигрыш"
    },
    {
      id: "11",
      photo: "images/winners/11",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Некоторое время хлопал глазами&raquo;",
      history: "Денис предпочитает участвовать в&nbsp;числовых лотереях и&nbsp;анализирует архивы тиражей. Но&nbsp;в&nbsp;этот раз он&nbsp;поступил иначе: перед сном купил билет в&nbsp;мобильном приложении &laquo;Столото&raquo;. Через несколько дней ярославец получил СМС-уведомление о&nbsp;выигрыше!",
      name: "Денис \nМильто",
      sum: "загородный дом",
      sign: "Выигрыш"
    },
    {
      id: "12",
      photo: "images/winners/12",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Неужели это произошло наяву?&raquo;",
      history: "Елена участвует в&nbsp;лотереях давно, но&nbsp;не&nbsp;регулярно. Она купила счастливый билет в&nbsp;почтовом отделении, когда отправляла письмо. Женщина смотрела трансляцию розыгрыша тиража по&nbsp;телевизору и&nbsp;испытала яркие эмоции, когда услышала, что победитель из&nbsp;Орловской области!",
      name: "Елена \nМогилевцева",
      sum: "1 000 000 ₽",
      sign: "Выигрыш"
    },
    {
      id: "13",
      photo: "images/winners/13",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Я&nbsp;&mdash; богатый дедушка&raquo;",
      history: "Владимир приобретает лотерейные билеты по&nbsp;праздникам и&nbsp;в&nbsp;значимые для него даты, чаще всего на&nbsp;почте. Мужчина не&nbsp;забудет о&nbsp;сотруднике почтового отделения, продавшем ему счастливый билет&nbsp;&mdash; порадует сладким презентом. Кстати, это лето стало особенным для Владимира: в&nbsp;июле он&nbsp;выиграл в&nbsp;лотерею, а&nbsp;в&nbsp;августе стал дедушкой уже в&nbsp;седьмой раз!",
      name: "Владимир \nПетров",
      sum: "автомобиль",
      sign: "Выигрыш"
    },
    {
      id: "14",
      photo: "images/winners/14",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Моё желание исполнилось&raquo;",
      history: "Год назад Владимир зарегистрировался на&nbsp;сайте &laquo;Столото&raquo;. С&nbsp;тех пор он&nbsp;старается не&nbsp;пропускать еженедельные розыгрыши. Мужчина был с&nbsp;сыном и&nbsp;другом в&nbsp;магазине, когда ему пришло СМС-уведомление о&nbsp;выигрыше. Владимир обрадовался победе как ребёнок!",
      name: "Владимир \nСажин",
      sum: "1 000 000 ₽",
      sign: "Выигрыш"
    },
    {
      id: "15",
      photo: "images/winners/15",
      logo_1: "images/winners/logo/1.svg",
      logo_2: "images/winners/logo/1_m.svg",
      title: "&laquo;Я&nbsp;&mdash; оптимист&raquo;",
      history: "Виктор не&nbsp;стал&nbsp;бы лотерейным победителем, если&nbsp;бы не&nbsp;съездил в&nbsp;гости к&nbsp;другу в&nbsp;город Шахты Ростовской области. Он&nbsp;купил счастливый билет за&nbsp;компанию. Друзья решили посоревноваться, кому больше повезёт.",
      name: "Виктор \nЧернов",
      sum: "загородный дом",
      sign: "Выигрыш"
    }
  ],
  previews: {
    direction: "vertical",
    spaceBetween: 0,
    slidesPerView: 5
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
    tag: "a",
    "data-modal": "#winners-modal"
  }
};

export const statistics = {
  attr: {
    id: "block6"
  },
  title: "Итоги 2020 года \nв «Русском лото»",
  subtitle: "Присоединяйтесь \nк победителям!",
  map:{
    image:{
      list:[
        {
          srcSet:"images/1px.png",
          media:"(max-width:1023px)"
        },
        {
          srcSet:"images/statistics/map.webp",
          type:"iamge/webp"
        }
      ],
      imgAttr:{
        src:"images/statistics/map.png",
        alt:"map"
      }
    }
  },
  salutes: [
    {
      src: "images/statistics/salut-1.svg"
    },
    {
      src: "images/statistics/salut-2.svg"
    }
  ],
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
