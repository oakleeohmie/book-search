function buildQueryURL() {
    var authTerm = $("#search-authorortitle").val().trim();
    var isbnTerm = $("#search-ISBN").val().trim();
    var genTerm = $("#search-genre").val().trim();
    var goodReads = "https://www.goodreads.com/search.xml?"
    var nyBook = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?"

    var url = nyBook + "author=" + authTerm + "&isbn=" + isbnTerm + "&genre=" + genTerm + "&api-key=Elscl5JmJnrLqqoCMZB0BAkVXEoApHOU";
    return (url);
};
function clear() {
    $("#results-section").empty();
};
$('#run-search').on('click', function (event) {
    event.preventDefault();
    clear();
    var url = buildQueryURL();
    $.ajax({
        url: url,
        method: "GET"
    }).then(updatePage)