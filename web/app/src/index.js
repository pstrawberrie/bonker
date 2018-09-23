/**
 * App Entry
 */

import './public/less/main.less';

import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';

document.addEventListener('DOMContentLoaded', function() {
  render(
    <Router />,
    document.querySelector('#app')
  );
});