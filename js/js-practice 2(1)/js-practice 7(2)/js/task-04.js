// Зробити рендер розмітки
// Підключити бібліотеку lazysizes
// https://afarkas.github.io/lazysizes/index.html
// Та оптимізувати процес підгрузки
// Підвантажувати спочатку заглушку, а потім картинку

const images = [
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_lights_wide.jpg",
      alt: "The Woods",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
      alt: "Cinque Terre",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Mountains and fjords",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Northern Lights",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
      alt: "Nature and sunrise",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Snowy Mountains",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_lights_wide.jpg",
      alt: "The Woods",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
      alt: "Cinque Terre",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Mountains and fjords",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Northern Lights",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
      alt: "Nature and sunrise",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Snowy Mountains",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_lights_wide.jpg",
      alt: "The Woods",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
      alt: "Cinque Terre",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Mountains and fjords",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Northern Lights",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_5terre_wide.jpg",
      alt: "Nature and sunrise",
    },
    {
      plug: "../plug.gif",
      original: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      alt: "Snowy Mountains",
    },
  ];
  