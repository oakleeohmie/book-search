$(document).ready(function () {
    var $bookList = $("<ul>");
    var $bookListItem = $("<li class='list-group-item'>");
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
            $bookList.addClass("list-group");
            $("#results-section").append($bookList);
            var author = book.book_author;
            console.log(author)
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
    function updatePage2(bookDataTwo) {
        console.log(bookDataTwo);
        var $bookList = $("<ul>");
        var book2 = bookDataTwo.book;
        $bookList.addClass("list-group");
        var $bookListItem = $("<li class='list-group-item'>");
        $("#results-section").append($bookList);
        var author2 = book2.author;
        console.log(author2)
        if (author2) {
            $bookListItem.append(
                "<span class='label label-primary'>" +
                author2 +
                "</strong>"
            );
        };
        var title2 = book2.title;
        if (title2) {
            console.log(title2);
            $bookListItem.append("<h3>" + title2 + "<h3>");

        };
        var summary2 = book2.critic_reviews[0].snippet;
        if (summary2) {
            console.log(summary2)
            $bookListItem.append("<h6>" + summary2 + "<h6>");
        };
        $bookList.append($bookListItem);
    };
    function clear() {
        $("#results-section").empty();
    };
    function oneAPI() {
        var NYurl = buildNewYorkURL();
        $.ajax({
            url: NYurl,
            method: "GET"
        }).then(updatePage1);
    };
    function twoAPI(event) {
        var DRurl = buildDreambooksURL();
        $.ajax({
            url: DRurl,
            method: "GET"
        }).then(updatePage2);
    };
    $('#run-search').on('click', function (event) {
        event.preventDefault();
        clear();
        oneAPI();
        twoAPI();
    });
});