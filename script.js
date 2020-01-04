var authTerm = $("#search-authorortitle").val().trim();
var isbnTerm = $("#search-ISBN").val().trim();
var genTerm = $("#search-genre").val().trim();

var nybook = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?"