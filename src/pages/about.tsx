import React from 'react';
import { routeNode } from 'react-router5';

const AboutPage = () => <p>About page with router</p>;
export default routeNode('about')(AboutPage);
