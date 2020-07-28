import $ from 'jquery';

const modals = $('.header__modal-container');
const itemBtns = $('.category-menu');
let activeModal;

$(document).click(function (e) {
    if (activeModal && !$.contains(e.target, activeModal)) {
        activeModal.fadeOut();
        activeModal = null;
    }
});

itemBtns.click(function (e) {
    const categoryId = $(this).attr('data-category-id');
    const targetModal = $(`.header__modal-container[data-category-id='${categoryId}']`);
    if(!targetModal.is(activeModal)){
        modals.fadeOut();
        targetModal.fadeIn();
        activeModal = targetModal;
    }
    e.stopPropagation();
});