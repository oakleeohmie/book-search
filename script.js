function buildNewYorkURL() {
    var authTerm = $("#search-author").val().trim();
    var titleTerm = $("#search-title").val().trim();
    var isbnTerm = $("#search-ISBN").val().trim();
    var nyBook = "https://api.nytimes.com/svc/books/v3/reviews.json?"
    var url = nyBook + "author=" + authTerm + "&title=" + titleTerm + "&isbn=" + isbnTerm + "&api-key=Elscl5JmJnrLqqoCMZB0BAkVXEoApHOU";
    return (url);
};
function buildDreambooksURL() {
    var authTerm = $("#search-author").val().trim();
    var titleTerm = $("#search-title").val().trim();
    var genTerm = $("#search-genre").val().trim();
    var dreamBooks = "http://idreambooks.com/api/books/reviews.json?"
    var url = dreamBooks + "q=" + authTerm + titleTerm + "&slug=" + genTerm + "&key=4a62088f871d332635a4513570e122bae72bf036";
    return (url);
};
function updatePage1(bookData) {
    for (i = 0; i < bookData.results.length; i++) {
        console.log(bookData)
        var book = bookData.results[i];
        var $bookList = $("<ul>");
        $bookList.addClass("list-group");
        $("#results-section").append($bookList);
        var author = book.book_author;
        console.log(author)
        var $bookListItem = $("<li class='list-group-item'>");
        if (author) {
            $bookListItem.append(
                "<span class='label label-primary'>" +
                author +
                "</strong>"
            );
        };
        var title = book.book_title;
        if (title) {
            console.log(title);
            $bookListItem.append("<h3>" + title + "<h3>");

        };
        var summary = book.summary;
        if (summary) {
            $bookListItem.append("<h6>" + summary + "<h6>");
        };
        var isbn = book.isbn13;
        if (isbn) {
            $bookListItem.append("<p> ISBN: " + isbn + " <p>");
        };
        $bookList.append($bookListItem);
    };
};
function updatePage2(bookData2) {
    for (i = 0; i < bookData2.GoodreadsResponse.search.results.work.best_book.length; i++) {
        console.log(bookData2)
        var book2 = bookData2.GoodreadsResponse.search.results.work.best_book[i];
        var $bookList = $("<ul>");
        $bookList.addClass("list-group");
        $("#results-section").append($bookList);
        var author = book2.author.name;
        console.log(author)
        var $bookListItem = $("<li class='list-group-item'>");
        if (author) {
            $bookListItem.append(
                "<span class='label label-primary'>" +
                author +
                "</strong>"
            );
        };
        var title = book2.title;
        if (title) {
            console.log(title);
            $bookListItem.append("<h3>" + title + "<h3>");

        };
    };
};
function clear() {
    $("#results-section").empty();
};
$('#run-search').on('click', function (event) {
    event.preventDefault();
    clear();
    var NYurl = buildNewYorkURL();
    $.ajax({
        url: NYurl,
        method: "GET"
    }).then(updatePage1);
});
$('#run-search').on('click', function (event) {
    event.preventDefault();
    clear();
    var GRurl = buildGoodreadsURL();
    $.ajax({
        url: GRurl,
        method: "GET"
    }).then(updatePage2);
});