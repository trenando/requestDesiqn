import $ from 'jquery';

const searchSelectBtn = $('#search-btn');
const searchSelectBlock = $('#selector-block');

searchSelectBtn.click(function (e) {
    searchSelectBlock.fadeToggle();
    e.stopPropagation();
});

searchSelectBlock.find('li').click(function() {
    searchSelectBtn.text($(this).text());
});

$(document).click(function (e) {
    searchSelectBlock.fadeOut();
});