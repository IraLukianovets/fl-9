const defaultImagesCount = 9;
let data;

$(document).ready(function() {
    loadData(function () { 
        loadDefaultImages();
        loadProfile();
        initImageHandlers();
        initModalArrows();
    });
});

function loadData(callback) {
    $.get('data/media.json', function(response) {
        data = response;
        callback();
    });
}

function loadDefaultImages() {
    let cardsContainer = $('.cards');
    for(let i = 0; i < defaultImagesCount; ++i) {
        cardsContainer.append(getCard(data.media[i]));
    }
};

function getCard(cardData) {
    let cardElement = $(document.createElement('div'));
    cardElement.addClass('card');
    cardElement.attr('tabindex', 0);
    cardElement.data('id', cardData.id)

    let image = $(document.createElement('img'));
    image.addClass('image');
    image.attr('src',cardData.display_url);
    cardElement.append(image);

    return cardElement;
}

function loadImageDetails(image) { 
    $('.modal').data('id', image.id);
    $('.image-view').find('img').attr('src', image.display_url);
    $('.card-description').html(`<b>${data.username}</b> ${image.edge_media_to_caption}`);
 }

function initImageHandlers() {
    $('.card').click(function() {
        let cardId = $(this).data('id');
        let cardDetails = data.media.find(elem => elem.id == cardId);

        loadImageDetails(cardDetails);
        showCardDetailsModal();
    });
};

function showCardDetailsModal() {
    $('#image-view-modal').css('display', 'flex');
    $('body').addClass('modal-open');
}

function closeCardDetailsModal() {
    $('.modal').hide();
    $('body').removeClass('modal-open');
}

function initModalArrows() {
    $('.right-arrow').click(function() {
        loadNextImage();
    });

    $('.left-arrow').click(function() {
        loadPrevImage();
    });
}

function loadNextImage() {
    let currentImageId = getCurrentImageId();
    let nextImageId = ++currentImageId;

    let nextImage = data.media.find(elem => elem.id == nextImageId);

    if(nextImage) {
        loadImageDetails(nextImage);
    }
}

function loadPrevImage() {
    let currentImageId = getCurrentImageId();
    let prevImageId = --currentImageId;

    let prevImage = data.media.find(elem => elem.id == prevImageId);

    if(prevImage) {
        loadImageDetails(prevImage);
    }
}

function getCurrentImageId() {
    return parseInt($('.modal').data('id'));
}

function loadProfile() {
    $('.profile-img').attr('src', data.profile_pic_url);
    $('.profile-name').text(data.username);
}

function loadMoreImages() {
    let startIndex = 12;
    let endIndex = 18;
    let cardsContainer = $('.cards');
    for(let i = startIndex; i < endIndex; ++i) {
        cardsContainer.append(getCard(data.media[i]));
    }
    initImageHandlers();
};

/*
function createLikeItem() {
    let likeElement = $(document.createElement('li'));
    likeElement.addClass('like');
    commentElement.innerText = `<span>${cardData.edge_liked_by.count}</span>`;
    return likeElement;
}

function createCommentItem(cardData) {
    let commentElement = $(document.createElement('li'));
    commentElement.addClass('comment');
    commentElement.innerText = `<span>${cardData.edge_media_to_comment.count}</span>`;
    return commentElement;

}
*/

