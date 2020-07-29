import $ from 'jquery';

const openModal = $('.category-phone');
const itemHover = $('.toptitle__modal');
const shadow = $('.header__shadow');

openModal.hover(function () {
    itemHover.css("display", "block");
    openModal.css("background-color","#5db975");
    shadow.css("display","initial");
}, function () {
    itemHover.css("display", "none");
    openModal.css("background-color","#34a853");
    shadow.css("display", "none");
});