const books = {
    title: "Half of a yellow Sun", 
    description: "Historical Fiction", 
    numberOfPages: 256,  
    author: "Eze Chioma",
    reading: true,
    toggleReadingStatus: function(){
        if(books.reading === false){
            books.reading = true
        } else {
            books.reading = false
        }
    }
}
books.toggleReadingStatus()
console.log(books)