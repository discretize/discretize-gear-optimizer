import React from 'react';
import { useSelector } from 'react-redux';
import { getPageTitle } from '../../state/slices/controlsSlice';

function PageTitle() {
  const pageTitle = useSelector(getPageTitle);
  document.title = pageTitle;
  return null;
}

export default React.memo(PageTitle);
