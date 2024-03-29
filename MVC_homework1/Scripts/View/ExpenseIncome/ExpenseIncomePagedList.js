﻿$(function () {

    fetchPage(getPage());


});
function getPage() {
    var page = window.location.hash
        ? window.location.hash.slice(1)
        : 1;
    return page;
}
function checkInsert() {

        var page = window.location.hash
            ? window.location.hash.slice(1)
            : 1;
    var result = $("[data-iscreate]").data("iscreate");
    if (result === "True") {
        fetchPage(1);
    }
    
}


var fetchPage = function (page) {

    
    var pagedPartialUrl = $("[data-listsource]").data("listsource");

    $.get(pagedPartialUrl, { page: page }, function (data) {

        window.location.hash = page;

        $('[data-listsource]').html(data);

        $("[data-listsource] .pagination li a").each(function (i, item) {
            var hyperLinkUrl = $(item).attr('href');
            if (typeof hyperLinkUrl !== 'undefined' && hyperLinkUrl !== false) {
                var pageNumber = $(item).attr('href').replace(pagedPartialUrl+'?page=', '');;
                $(item).attr('href', '#').click(function (event) {
                    event.preventDefault();
                    $(event.target).attr('href');
                    fetchPage(pageNumber);
                });
            }
        });
    });
};