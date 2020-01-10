function buildNewYorkURL() {
    var authTerm = $("#search-author").val().trim();
    var titleTerm = $("#search-title").val().trim();
    var isbnTerm = $("#search-ISBN").val().trim();
    var genTerm = $("#search-genre").val().trim();
    var nyBook = "https://api.nytimes.com/svc/books/v3/reviews.json?"
    var url = nyBook + "author=" + authTerm + "&title=" + titleTerm + "&api-key=Elscl5JmJnrLqqoCMZB0BAkVXEoApHOU";
    return (url);
};
function updatePage(bookData) {
    for (i = 0; i < bookData.results.length; i++) {
        console.log(bookData)
        var book = bookData.results[i];
        var $bookList = $("<ul>");
        $bookList.addClass("list-group");
        $("#results-section").append($bookList);
        var author = book.book_author;
        console.log(author)
        var $bookListItem = $("<li class='list-group-item bookTitle'>");
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
        $bookList.append($bookListItem);
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
    }).then(updatePage);
});