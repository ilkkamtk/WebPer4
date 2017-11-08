'use strict';

const lisaa = document.querySelector('#lisaa');
lisaa.addEventListener('click', (evt) => {
  document.querySelector('p').classList.add('punainen');
});



const p = document.querySelector('p:nth-child(2)');
const vaihda = document.querySelector('#vaihda');
vaihda.addEventListener('click', (evt) => {
  if (p.classList.contains('sininen')) {
    p.classList.replace('sininen', 'punainen');
  } else {
    p.classList.replace('punainen', 'sininen');
  }
});

const toggle = document.querySelector('#toggle');
toggle.addEventListener('click', (evt) => {
  document.querySelector('p:nth-child(3)').classList.toggle('vihrea');
});