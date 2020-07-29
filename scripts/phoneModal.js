import $ from 'jquery';

const openModal = $('.category-phone');
const itemHover = $('.toptitle__modal');
const shadow = $('.header__shadow');

openModal.mouseenter(function () {
    itemHover.css("display", "block");
    openModal.css("background-color", "#5db975");
    shadow.css("display", "initial");
});

openModal.mouseleave(function (e) {
    const leaveTarget = e.toElement || e.relatedTarget;
    if ($(leaveTarget).is(itemHover) || $.contains(itemHover, $(leaveTarget))) {
        return;
    }
    hideModal();
});

itemHover.mouseleave(function(){
    hideModal();
});

function hideModal(){
    itemHover.css("display", "none");
    openModal.css("background-color", "#34a853");
    shadow.css("display", "none");
}