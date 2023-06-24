import Router from 'next/router';
import NProgress from 'nprogress';
import { FC } from 'react';

import 'nprogress/nprogress.css';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 500,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const ProgressBar: FC = () => {
  return null;
};

export default ProgressBar;
