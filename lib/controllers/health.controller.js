/* @flow */
import {Router} from 'express';
import {timeout, isUp, isDown, getHealthChecks} from '../services/healthcheck.service';

const router = Router();
export {router as default};

router.get('/', async (req: Object, res: Object) => {
  try {
    const details = await Promise.race([
      timeout(1000),
      getHealthChecks()
    ]);

    if (!res.headersSent) {
      res.json(isUp(details));
    }
  } catch (details) {
    if (!res.headersSent) {
      res.status(503).json(isDown([details]));
    }
  }
});
