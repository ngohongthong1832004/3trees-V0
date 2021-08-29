"use strict";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var logIn = $('.onclick__logIn');
var logOut = $('.onclick__logOut');
var modal = $('.modal');
var modal2 = $('.modal2');
var modalface = $('.modal__overlay');
var modalface2 = $('.modal__overlay2');
var modalbody = $('.modal__body');
var btnback = $('.auth-from-back');
var btnback2 = $('.auth-from-back2');
var btntoggle = $('.auth-from__switch-btn');
var btntoggle2 = $('.auth-from__switch-btn2');
var listrender = $('.listapp');

logIn.onclick = function () {
  modal.classList.add('open');
  modal.classList.remove('modal');
};

logOut.onclick = function () {
  modal2.classList.add('open');
  modal2.classList.remove('modal2');
};

modalface.onclick = function () {
  modal.classList.remove('open');
  modal.classList.add('modal');
};

modalface2.onclick = function () {
  modal2.classList.remove('open');
  modal2.classList.add('modal2');
};

btnback.onclick = function () {
  modal.classList.remove('open');
  modal.classList.add('modal');
};

btnback2.onclick = function () {
  modal2.classList.remove('open');
  modal2.classList.add('modal2');
};

btntoggle.onclick = function () {
  modal.classList.remove('open');
  modal.classList.add('modal');
  modal2.classList.add('open');
  modal2.classList.remove('modal2');
};

btntoggle2.onclick = function () {
  modal2.classList.remove('open');
  modal2.classList.add('modal2');
  modal.classList.add('open');
  modal.classList.remove('modal');
};

var app = {
  list: [{
    name: 'bach diep phi',
    url: '(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
    oldcost: '10238998320',
    newcost: '37901228',
    home: 'can tho',
    city: 'thanh pho can tho',
    percent: '77%'
  }, {
    name: 'bach diep phi',
    url: '(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
    oldcost: '10238998320',
    newcost: '37901228',
    home: 'can tho',
    city: 'thanh pho can tho',
    percent: '77%'
  }, {
    name: 'bach diep phi',
    url: '(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
    oldcost: '10238998320',
    newcost: '37901228',
    home: 'can tho',
    city: 'thanh pho can tho',
    percent: '77%'
  }, {
    name: 'bach diep phi',
    url: '(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
    oldcost: '10238998320',
    newcost: '37901228',
    home: 'can tho',
    city: 'thanh pho can tho',
    percent: '77%'
  }, {
    name: 'bach diep phi',
    url: '(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mUn46IcAEjvfveZyVuAS6EvMEuR8WcnyRQ&usqp=CAU)',
    oldcost: '10238998320',
    newcost: '37901228',
    home: 'can tho',
    city: 'thanh pho can tho',
    percent: '77%'
  }]
};

function render() {
  console.log('123');
}