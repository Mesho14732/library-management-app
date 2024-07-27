User = [
    {
        Name: String,
        Id: String,
        borrowedBooks: Array
    }
]
Book = [
    {
        Title: String,
        Author: String,
        ISBN: String,
        Id: String,
        Borrowed: Boolean
    }
]
Library = [
    {
        Books: Object,
        Members: Object
    }
]