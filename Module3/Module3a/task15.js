const books =  [
    {
      title: "Half of a yellow Sun", 
      description: "Historical Fiction", 
      numberOfPages: 256,  
      author: "Eze Chioma",
      reading: true
   },
   {
    title: "Rich Dad Poor Dad", 
    description: "Personal Finance", 
    numberOfPages: 600,  
    author: "Robert T Kiyosaki",
    reading: false
  },
  {
    title: "Gifted Hands", 
    description: "Nonfiction", 
    numberOfPages: 240,  
    author: "Ben Carson",
    reading: true
  },
  {
    title: "Smart Money Woman", 
    description: "Business & Economics", 
    numberOfPages: 300,  
    author: "Arese Ugwu",
    reading: true
  },
  {
    title: "The Purpose Driven Life", 
    description: "Bible Study", 
    numberOfPages: 450,  
    author: "Rick Warren",
    reading: false
  }
  
];

// for(let book = 0; book < books.length; book = book+1) {
//     if(books[book].reading === true) {
//         console.log(books[book])
// }
// };

for(let book = 0; book < books.length; book++) {
    if(books[book].reading === true) {
        console.log(books[book])
}
};
