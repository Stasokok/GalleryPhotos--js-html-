import { createElem } from "./createElem.js";

export const createCartPhoto = (data) => {
    const card = createElem('li', {
        className: 'card'
    });

    const cardItem = createElem('a', {
        id: data.id,
        className: 'grid-item',
        href: `page.html?photo=${data.id}`
    });

    const photo = new Image();
    photo.width = "200";
    photo.src = data.urls.small;
    photo.alt = data.alt_description;

    const author = createElem('a', {
        className: 'card__author',
        href: data.user.links.html
    });
 

    const avatarAutor = new Image();
    avatarAutor.className = 'author__photo';
    avatarAutor.src = data.user.profile_image.medium;
    avatarAutor.width = '32';
    avatarAutor.height = '32';
    avatarAutor.alt = data.user.bio;
    avatarAutor.title = data.user.username;

    author.append(avatarAutor);

    const likeBtn = createElem('button', {
        className: 'card__photo-like',
        textContent: data.likes
    });
 

    const downloadLink = createElem('a', {
        className: 'card__download',
        href: data.links.download,
        download: true,
        target: '_blank'
    });


    cardItem.append(photo, author, likeBtn, downloadLink);
    card.append(cardItem);


    return card;
};
