// scripts.js

// ORIGINAL

/* 

import company form 'configuration'
import year form 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message
*/

import { company, year } from './configuration.js';

document.addEventListener("DOMContentLoaded", function() {
  const message = '© ' + company + ' (' + year + ')';
  document.querySelector('footer').innerText = message;
});