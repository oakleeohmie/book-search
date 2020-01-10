var authTerm = $("#search-author").val().trim();
var isbnTerm = $("#search-ISBN").val().trim();
var genTerm = $("#search-genre").val().trim();

function buildNewYorkURL() {
    var nyBook = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?"
    var url = nyBook + "author=" + authTerm + "&api-key=Elscl5JmJnrLqqoCMZB0BAkVXEoApHOU";
    return (url);
};
function buildGoodReadsURL() {
    var goodReads = "https://www.goodreads.com/search.xml?"
    var url = goodReads + "q=" + authTerm + "&key=506nRRgeF7qmVFcKIaro9g";
    return (url);
};
function updatePage() {
    var results = $("#results-section")

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
