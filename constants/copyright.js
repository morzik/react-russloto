export const intro = {
  title: "Джекпот",
  text: "Выигрывает каждый третий билет",
  subtitle: "50 загородных домов",
  prize: "от <span>500 000 000 ₽</span>",
  mark: {
    text: "Попробуйте \nновые тиражи \n«Русского лото!»"
  },
  button: {
    tag: "a",
    text: "Купить билет",
    attr: {
      href: "https://www.stotlo.ru",
      target: "_blank"
    }
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
