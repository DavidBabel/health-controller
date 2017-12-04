/* @flow */


const healthToCheck = [];

export function addHealthCheck(fctRef) {
  healthToCheck.push(fctRef);
}

export function getHealthChecks() {
  return Promise.all(healthToCheck.map((prom) => {
    return prom();
  }));
}

/**
 * Return a rejected Promise after a given period
 *
 * @param {number} period
 * @returns {Promise}
 */
export function timeout(period: number): Promise<*> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({timeouted: true});
    }, period);
  });
}

/**
 * Return an UP object
 *
 * @param {array} details=[]
 * @returns {Object}
 */
export function isUp(details: Array<Object> = []) {
  return {health: 'UP', details};
}

/**
 * Return an DOWN object
 *
 * @param {array} details=[]
 * @returns {Object}
 */
export function isDown(details: Array<Object> = []) {
  return {health: 'DOWN', details};
}
