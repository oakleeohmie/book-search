var authTerm = $("#search-authorortitle").val().trim();
var isbnTerm = $("#search-ISBN").val().trim();
var genTerm = $("#search-genre").val().trim();

var nybook = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?"

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
    })
