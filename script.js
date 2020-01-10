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
    console.log(bookData)
    var book = bookData.results[0];
    var $bookList = $("<ul>");
    $bookList.addClass("list-group");
    $("#results-section").append($bookList);
    var title = book.book_title;
    console.log(title)
    var $bookListItem = $("<li class='list-group-item bookTitle'>");
    if (title) {
        $bookListItem.append(
            "<span class='label label-primary'>" +
            title +
            "</strong>"
        );
    };

}
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
