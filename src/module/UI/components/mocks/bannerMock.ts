export type Banner = {
  thumbnail_Url: string;
  title: string;
  category: string;
  description: string;
  isInDestaque: boolean;
};

export const bannerMock: Banner[] = [
  {
    thumbnail_Url:
      "https://variety.com/wp-content/uploads/2020/12/blade-runner-2049-image.jpg?w=1000&h=563&crop=1",
    title: "Blade Runner",
    category: "Sci-Fi",
    description:
      "Blade Runner é uma clássica obra de ficção científica que retrata um futuro distópico, acompanhando um policial encarregado de caçar androides rebeldes",
    isInDestaque: true,
  },
  {
    thumbnail_Url:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie1CRHXJpVVzRa1BWRtwpmhqm5p3_DE78_J-SIpqZM41usrRf32mzdJACKZcnw6vM7-AwlkRY3kgeD-Og4Yh3CBNZEW6A7sq5PUY1lcL3ZdwpPZCM1vIGEQBNr7I1GVlA0AfVfsB5AutY/s1600/Jumanji-Welcome-to-the-Jungle-2017-Poster-jumanji-40796280-1000-662.jpg",
    title: "Jumanji",
    category: "Aventura",
    description:
      "Quatro adolescentes de castigo na escola encontram o console, escolhem seus avatares e são sugados para dentro de uma floresta tropical.",
    isInDestaque: false,
  },
  {
    thumbnail_Url:
      "https://rollingstone.com.br/wp-content/uploads/2024/01/velozes-furiosos-10-ganha-data-de-estreia-nas-plataformas-digitais-foto-divulgacaouniversal-pictures.jpg",
    title: "Velozes e Furiosos 10",
    category: "Corrida",
    description:
      "Velozes & Furiosos 10 mostra Dominic Toretto enfrentando Dante Reyes, um novo e letal inimigo. Dante é filho do traficante Hernan Reyes, derrotado pelo grupo no quinto filme no Rio de Janeiro, e busca vingança para destruir a família de Toretto",
    isInDestaque: false,
  },
  {
    thumbnail_Url:
      "https://cinepop.com.br/wp-content/uploads/2026/01/panico7_1-1024x598.jpg",
    title: "Panico 7",
    category: "Terror",
    description:
      "Marca o retorno triunfal de Sidney Prescott (Neve Campbell) e é dirigido por Kevin Williamson, o criador original da saga. A trama foca no novo perverso ataque de um Ghostface na pacata cidade onde Sidney tenta proteger sua família e sua filha.",
    isInDestaque: false,
  },
];
