import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-ar-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
