import React from 'react';
import ReactDom from 'react-dom';

import router from './router';

const container = document.getElementById('container');

ReactDom.render(router, container)
