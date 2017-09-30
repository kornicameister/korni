import React from 'react';
import { routeNode } from 'react-router5';

const HomePage = () => <p>Home page with router</p>;
export default routeNode('home')(HomePage);
