i18next.init({
  resources: {
    ru: {
      translation: {
        "navbar.call": "Связаться",
        "menu.company": "Компания",
        "menu.products": "Продукты",
        "menu.articles": "Статьи",
        "menu.solutions": "Решения",
        "menu.contacts": "Контакты",
        "nav.tel": "0 (800) 00-00-00",
        "nav.call": "Связаться",
        "button.ua": "Ua",
        "button.ru": "Ru",
        "connect.button":"Связаться",
        "main.section": "Главная секция",
        "main.title": "Meltem",
        "main.subtitle": "Meltem – это качественное вентиляционное оборудование от немецкого завода.",
        "main.product": "Продукция",
        "main.product_title": "Вентилятор центробежный",
        "main.product_subtitle": "Meltem V-II 30-N",
        "main.details": "Детальнее",
        "footer.message": "Используя этот сайт, вы соглашаетесь на обработку файлов cookies.",
        "footer.agree": "Согласен"
      },
    },
    ua: {
      translation: {
        "navbar.call": "Зв'язатися",
        "menu.company": "Компанія",
        "menu.products": "Продукції",
        "menu.articles": "Статті",
        "menu.solutions": "Рішення",
        "menu.contacts": "Контакти",
        "nav.tel": "0 (800) 00-00-00",
        "nav.call": "Зв'язатись",
        "button.ua": "Ua",
        "button.ru": "Ru",
        "connect.button":"Зв'язатись",
        "main.section": "Головний розділ",
        "main.title": "Meltem",
        "main.subtitle": "Meltem - це якісне вентиляційне обладнання від німецького заводу.",
        "main.product": "Продукція",
        "main.product_title": "Центробіжний вентилятор",
        "main.product_subtitle": "Meltem V-II 30-N",
        "main.details": "Детальніше",
        "footer.message": "Використовуючи цей сайт, ви даєте згоду на обробку файлів cookies.",
        "footer.agree": "Згоден"
      },
    },
  },
});
document.addEventListener("DOMContentLoaded", function () {
  // Обработчики событий для кнопок выбора языка (украинский)
  const uaLanguageButtons = document.querySelectorAll(".ua-language");
  uaLanguageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      i18next.changeLanguage("ua");
      translatePage(); // Переводим страницу после смены языка
    });
  });

  // Обработчики событий для кнопок выбора языка (русский)
  const ruLanguageButtons = document.querySelectorAll(".ru-language");
  ruLanguageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      i18next.changeLanguage("ru");
      translatePage(); // Переводим страницу после смены языка
    });
  });

  function translatePage() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      element.textContent = i18next.t(key);
    });
  }
});
