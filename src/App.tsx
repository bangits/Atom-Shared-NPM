import { AlertContainer, DialogProvider } from '@atom/design-system';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { AtomCommonProvider } from './atom-common';
import { ALERT_CLOSE_DELAY } from './configs';
import { LoadingServiceComponent, NetworkErrorComponent } from './view';

const App = () => {
  return (
    <AtomCommonProvider initializeLanguage>
      <LoadingServiceComponent />
      <AlertContainer autoCloseDelay={ALERT_CLOSE_DELAY} autoClose />
      <NetworkErrorComponent />

      <DialogProvider />
    </AtomCommonProvider>
  );
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: () => document.getElementById('application:@atom/common'),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  rootComponent: App
});

export const { bootstrap, mount, unmount } = lifecycles;
