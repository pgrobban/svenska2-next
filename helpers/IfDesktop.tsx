import useMediaQuery from '@material-ui/core/useMediaQuery';
import { isArray } from 'lodash';
import React from 'react';
import { getRenderableItems } from './utils';

const IfDesktop: React.FC = ({ children }) => {
  return children;
};

export default IfDesktop;
