import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.

import Card from '@site/src/components/Card';
import CardBody from '@site/src/components/Card/CardBody';
import CardFooter from '@site/src/components/Card/CardFooter';
import CardHeader from '@site/src/components/Card/CardHeader';
import CardImage from '@site/src/components/Card/CardImage';

import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';

library.add(fab, fas); // Add all icons to the library so you can use them without importing them individually.

export default {
  // Re-use the default mapping
  MDXComponents,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage,
  Columns,
  Column,
  FAIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.
};
