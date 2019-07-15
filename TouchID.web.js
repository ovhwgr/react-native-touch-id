/**
 * @providesModule TouchID
 * @flow
 */
'use strict';

/**
 * Web Wrapper
 */

export default {
  isSupported(config) {
    return new Promise(reject => {
      return reject(createError('TouchID is not supported on web'));
    });
  },

  authenticate() {
    return new Promise((resolve, reject) => {
      return reject(createError('TouchID is not supported on web'));
    });
  }
};

function createError(error) {
  return new Error(error);
}
