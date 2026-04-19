export const content = {
  pt: {
    nav: {
      about: "Sobre",
      menu: "Menu",
      reviews: "Avaliações",
      contact: "Contacto",
      reserve: "Reservar",
    },
    hero: {
      overline: "Águeda, Portugal",
      title: "Wine Village",
      subtitle: "Petiscaria em Águeda",
      tagline: "Vinhos \u2022 Petiscos \u2022 Sabores Autênticos",
      cta_menu: "Ver Menu",
      cta_reserve: "Fazer Reserva",
      rating: "4.5",
      reviews: "273 avaliações Google",
    },
    about: {
      overline: "A Nossa História",
      title: "Onde o Vinho Encontra a Tradição",
      text1:
        "No coração de Águeda, o Wine Village é um refúgio acolhedor onde a tradição portuguesa se encontra com a sofisticação moderna. A nossa petiscaria é reconhecida pela extensa carta de vinhos portugueses e pelos nossos risotos de cogumelos artesanais.",
      text2:
        "Com um ambiente casualmente elegante e um serviço atencioso, cada visita transforma-se numa experiência gastronómica memorável. Perfeito para jantares a dois, encontros de amigos ou celebrações especiais.",
      highlight: "Reconhecido pela nossa extensa carta de vinhos e pelos nossos risotos de cogumelos artesanais",
    },
    menu: {
      overline: "A Nossa Carta",
      title: "Menu",
      categories: {
        starters: "Entradas",
        mains: "Pratos Principais",
        risottos: "Risotos Especiais",
        desserts: "Sobremesas",
        drinks: "Bebidas",
      },
    },
    reviews: {
      overline: "O Que Dizem de Nós",
      title: "Avaliações",
      subtitle: "273 avaliações no Google Maps",
      badge: "4.5 estrelas",
    },
    location: {
      overline: "Visite-nos",
      title: "Localização & Contacto",
      address: "R. Eng. Júlio Portela n\u00b0111, 3750-158 Águeda",
      phone: "234 064 340",
      schedule_title: "Horário",
      schedule: "Segunda a Sábado a partir das 12:00",
      closed: "Domingo: Encerrado",
      reserve_note: "Reservas recomendadas para jantar",
      services_title: "Serviços",
      services: [
        "Comer no local",
        "Take away",
        "Estacionamento gratuito",
        "Acessível a cadeiras de rodas",
        "Cadeiras altas para crianças",
        "Bar no local",
        "Cartões e NFC aceites",
      ],
    },
    footer: {
      tagline: "Petiscaria em Águeda \u2022 Desde sempre, sabores autênticos",
      hours_title: "Horário de Funcionamento",
      hours: [
        { day: "Segunda - Sexta", time: "12:00 - 23:00" },
        { day: "Sábado", time: "12:00 - 00:00" },
        { day: "Domingo", time: "Encerrado" },
      ],
      reserve_cta: "Reservas Recomendadas para Jantar",
      download_title: "Download do Website",
      download_btn: "Descarregar Ficheiro HTML",
      download_note: "Clique para guardar o ficheiro e fazer deploy",
      rights: "Todos os direitos reservados",
      payment: "Cartões de crédito, débito e NFC aceites",
    },
  },
  en: {
    nav: {
      about: "About",
      menu: "Menu",
      reviews: "Reviews",
      contact: "Contact",
      reserve: "Reserve",
    },
    hero: {
      overline: "Águeda, Portugal",
      title: "Wine Village",
      subtitle: "Portuguese Tapas in Águeda",
      tagline: "Wines \u2022 Tapas \u2022 Authentic Flavours",
      cta_menu: "View Menu",
      cta_reserve: "Make Reservation",
      rating: "4.5",
      reviews: "273 Google Reviews",
    },
    about: {
      overline: "Our Story",
      title: "Where Wine Meets Tradition",
      text1:
        "In the heart of Águeda, Wine Village is a cozy haven where Portuguese tradition meets modern sophistication. Our petiscaria is renowned for its extensive Portuguese wine list and artisanal mushroom risottos.",
      text2:
        "With a casually elegant atmosphere and attentive service, every visit becomes a memorable dining experience. Perfect for romantic dinners, gatherings with friends, or special celebrations.",
      highlight: "Renowned for our extensive wine selection and artisanal mushroom risottos",
    },
    menu: {
      overline: "Our Selection",
      title: "Menu",
      categories: {
        starters: "Starters",
        mains: "Main Courses",
        risottos: "Signature Risottos",
        desserts: "Desserts",
        drinks: "Beverages",
      },
    },
    reviews: {
      overline: "What They Say",
      title: "Reviews",
      subtitle: "273 reviews on Google Maps",
      badge: "4.5 stars",
    },
    location: {
      overline: "Visit Us",
      title: "Location & Contact",
      address: "R. Eng. Júlio Portela n\u00b0111, 3750-158 Águeda",
      phone: "234 064 340",
      schedule_title: "Opening Hours",
      schedule: "Monday to Saturday from 12:00 PM",
      closed: "Sunday: Closed",
      reserve_note: "Reservations recommended for dinner",
      services_title: "Services",
      services: [
        "Dine-in",
        "Takeaway",
        "Free street parking",
        "Wheelchair accessible",
        "High chairs for children",
        "Bar on premises",
        "Cards & NFC accepted",
      ],
    },
    footer: {
      tagline: "Portuguese Tapas in Águeda \u2022 Always authentic flavours",
      hours_title: "Opening Hours",
      hours: [
        { day: "Monday - Friday", time: "12:00 - 23:00" },
        { day: "Saturday", time: "12:00 - 00:00" },
        { day: "Sunday", time: "Closed" },
      ],
      reserve_cta: "Reservations Recommended for Dinner",
      download_title: "Download Website",
      download_btn: "Download HTML File",
      download_note: "Click to save the file and deploy",
      rights: "All rights reserved",
      payment: "Credit cards, debit cards and NFC payments accepted",
    },
  },
};

export const menuItems = {
  starters: [
    {
      id: "cogumelos-recheados",
      name: { pt: "Cogumelos Recheados", en: "Stuffed Mushrooms" },
      desc: {
        pt: "Cogumelos frescos recheados com queijo e ervas aromáticas",
        en: "Fresh mushrooms stuffed with cheese and aromatic herbs",
      },
      image: "https://images.pexels.com/photos/10359397/pexels-photo-10359397.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "batata-brava",
      name: { pt: "Batata Brava", en: "Spicy Potatoes" },
      desc: {
        pt: "Batatas crocantes com molho picante artesanal",
        en: "Crispy potatoes with artisanal spicy sauce",
      },
      image: "https://images.pexels.com/photos/28490816/pexels-photo-28490816.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "ameijoa-bulhao-pato",
      name: { pt: "Amêijoa à Bulhão Pato", en: "Clams Bulhão Pato" },
      desc: {
        pt: "Amêijoas frescas com alho, coentros e azeite",
        en: "Fresh clams with garlic, coriander and olive oil",
      },
      image: "https://images.pexels.com/photos/12173354/pexels-photo-12173354.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "sopa-cogumelos",
      name: { pt: "Sopa de Cogumelos", en: "Mushroom Soup" },
      desc: {
        pt: "Sopa cremosa de cogumelos frescos da estação",
        en: "Creamy fresh seasonal mushroom soup",
      },
      image: "https://images.pexels.com/photos/29653179/pexels-photo-29653179.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
  mains: [
    {
      id: "ovos-rotos",
      name: { pt: "Ovos Rotos", en: "Broken Eggs" },
      desc: {
        pt: "Ovos estrelados sobre batatas fritas e presunto",
        en: "Fried eggs over crispy potatoes and ham",
      },
      image: "https://images.unsplash.com/photo-1608039839583-5eac014f24b0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600",
    },
    {
      id: "picanha",
      name: { pt: "Picanha", en: "Picanha Steak" },
      desc: {
        pt: "Picanha grelhada no ponto, acompanhada de legumes",
        en: "Grilled picanha steak with seasonal vegetables",
      },
      image: "https://images.pexels.com/photos/20896463/pexels-photo-20896463.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "choco-frito",
      name: { pt: "Choco Frito", en: "Fried Cuttlefish" },
      desc: {
        pt: "Choco frito crocante com limão e salada",
        en: "Crispy fried cuttlefish with lemon and salad",
      },
      image: "https://images.pexels.com/photos/13677427/pexels-photo-13677427.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "chicken-wings",
      name: { pt: "Chicken Wings", en: "Chicken Wings" },
      desc: {
        pt: "Asas de frango marinadas e grelhadas na perfeição",
        en: "Marinated chicken wings grilled to perfection",
      },
      image: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600",
    },
  ],
  risottos: [
    {
      id: "risotto-cogumelos",
      name: { pt: "Risotto de Cogumelos", en: "Mushroom Risotto" },
      desc: {
        pt: "O nosso prato estrela \u2014 risoto cremoso com cogumelos frescos e parmesão",
        en: "Our star dish \u2014 creamy risotto with fresh mushrooms and parmesan",
      },
      image: "https://images.pexels.com/photos/11190139/pexels-photo-11190139.jpeg?auto=compress&cs=tinysrgb&w=600",
      star: true,
    },
    {
      id: "risotto-legumes",
      name: { pt: "Risotto de Legumes", en: "Vegetable Risotto" },
      desc: {
        pt: "Risoto cremoso com legumes frescos da estação",
        en: "Creamy risotto with fresh seasonal vegetables",
      },
      image: "https://images.unsplash.com/photo-1623067173902-ee323884a53c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600",
    },
    {
      id: "pasta-pesto",
      name: { pt: "Pasta de Pesto", en: "Pesto Pasta" },
      desc: {
        pt: "Massa fresca com pesto artesanal de manjericão",
        en: "Fresh pasta with artisanal basil pesto",
      },
      image: "https://images.unsplash.com/photo-1757221254415-6e2f57550caa?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600",
    },
  ],
  desserts: [
    {
      id: "petit-gateau",
      name: { pt: "Petit Gateaux", en: "Chocolate Lava Cake" },
      desc: {
        pt: "Bolo de chocolate com centro fundido e gelado de baunilha",
        en: "Chocolate cake with molten center and vanilla ice cream",
      },
      image: "https://images.pexels.com/photos/33674414/pexels-photo-33674414.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "crepe-avela",
      name: { pt: "Crepe com Gelado de Avelã", en: "Crepe with Hazelnut Ice Cream" },
      desc: {
        pt: "Crepe quente com gelado artesanal de avelã",
        en: "Warm crepe with artisanal hazelnut ice cream",
      },
      image: "https://images.pexels.com/photos/31314185/pexels-photo-31314185.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "eton-mess",
      name: { pt: "Eton Mess", en: "Eton Mess" },
      desc: {
        pt: "Merengue, frutos vermelhos e chantilly",
        en: "Meringue, berries and whipped cream",
      },
      image: "https://images.pexels.com/photos/34552000/pexels-photo-34552000.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
  drinks: [
    {
      id: "sangria-maracuja",
      name: { pt: "Sangria de Maracujá", en: "Passion Fruit Sangria" },
      desc: {
        pt: "A nossa sangria artesanal com maracujá fresco \u2014 favorita dos clientes",
        en: "Our artisanal sangria with fresh passion fruit \u2014 customer favourite",
      },
      image: "https://images.unsplash.com/photo-1618688224904-0b77adb7d178?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=600",
      star: true,
    },
    {
      id: "vinhos",
      name: { pt: "Carta de Vinhos Portugueses", en: "Portuguese Wine Selection" },
      desc: {
        pt: "Extensa seleção de vinhos portugueses premium",
        en: "Extensive selection of premium Portuguese wines",
      },
      image: "https://images.pexels.com/photos/5004027/pexels-photo-5004027.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
};

export const reviewsData = [
  {
    name: "Maria S.",
    rating: 5,
    text: {
      pt: "Local muito agradável para jantar, sossegado e o atendimento é bom. Comemos a massa de pesto e o risotto de cogumelos, ambos deliciosos.",
      en: "Very nice place for dinner, quiet and the service is good. We had the pesto pasta and mushroom risotto, both delicious.",
    },
  },
  {
    name: "João P.",
    rating: 5,
    text: {
      pt: "Fascinado! Recomendo vivamente, a comida é qualquer coisa de extraordinário, ambiente fisicamente acolhedor.",
      en: "Fascinated! I highly recommend, the food is extraordinary, the atmosphere is physically welcoming.",
    },
  },
  {
    name: "Ana R.",
    rating: 5,
    text: {
      pt: "Excelente local para um jantar, boa comida, excelentes vinhos, tudo muito bom. Preço justo para a qualidade.",
      en: "Excellent place for dinner, good food, excellent wines, everything very good. Fair price for the quality.",
    },
  },
  {
    name: "Pedro M.",
    rating: 5,
    text: {
      pt: "O risotto de cogumelos é simplesmente o melhor que já comi. A sangria de maracujá é obrigatória!",
      en: "The mushroom risotto is simply the best I've ever had. The passion fruit sangria is a must!",
    },
  },
];

export const images = {
  hero: "https://images.pexels.com/photos/5083907/pexels-photo-5083907.jpeg?auto=compress&cs=tinysrgb&w=1920",
  about: "https://images.unsplash.com/photo-1722307036188-57649793ddcf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800",
};
