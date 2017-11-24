import {assert} from 'chai';

import {isUp, isDown, timeout} from '../lib/services/healthcheck.service';

describe('health check service', () => {

  it('shoud return UP', () => {

    assert.isOk(isUp());
    assert.equal(isUp().health, 'UP');
  });

  it('shoud return DOWN', () => {

    assert.isOk(isDown());
    assert.equal(isDown().health, 'DOWN');
  });

  it('shoud timeout after period', (done) => {
    timeout(5).catch(() => done());
  });

});
