'use strict';

const modal = document.querySelector('#modal');
const img = modal.querySelector('img');
const closeBtn = document.querySelector('.closeBtn');
const ul = document.querySelector('ul');

const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
                  <figure>
                      <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                      <figcaption>
                          <h3>${kuva.mediaTitle}</h3>
                      </figcaption>
                  </figure>
              </li>`;
    });
    ul.innerHTML = html;
    init();
  });
};
showImages();


const init = () => {
  const linkit = ul.querySelectorAll('a');
  linkit.forEach((linkki) => {
    linkki.addEventListener('click', (evt) => {
      evt.preventDefault();
      // console.log(evt.currentTarget);
      img.setAttribute('src', evt.currentTarget.href);
      modal.classList.replace('hidden', 'modal');
      modal.style = 'top: '+window.scrollY+'px';
    });
  });
};


closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.replace('modal', 'hidden');
});