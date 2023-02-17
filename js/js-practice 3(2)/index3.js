// Є масив об'єктів потрібно на перебір виводити лише
// 2 ключі isPublic, rating
// додатково вивести середне число рейтингу

const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["historical prose", "adventure"],
      isPublic: true,
      rating: 8.38,
    },
    {
      title: "Jacques Gluke",
      author: "Author",
      genres: ["adventure"],
      isPublic: false,
      rating: 6.38,
    },
  ];
let meanRating = 0;
for (const book of books) {
    const {isPublic, rating = 0} = book;
    if (isPublic) {
        console.log(`публічне, рейтинг - ${rating}`);
    }
    else {
        console.log(`непублічне, рейтинг - ${rating}`);
    };
    meanRating += rating;
}

console.log('середній рейтинг: ' + meanRating / books.length);