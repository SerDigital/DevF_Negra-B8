const chai = require('chai');
const sinonExpress = require('sinon-express-mock');
const proxyquire = require('proxiquire');

let mockReq = sinonExpress.mockReq;
let mockRes = sinonExpress.mockRes;

const expect = chai.expect;



const createMetric = () => {
    return new Promise((resolve, reject) => {
        resolve({})
    })
}

const req = mockReq();
const res = mockRes();

chai.use(require('sinon-chai'));

describe('User Controller', () => {
    it('Should response 200', (done) => {
      unitPath = '../../controllers/Metrics';
      unitServices = {
        '../actions': {
          reportMetric
        } 
      }
      unit = proxyquire(unitPath, unitServices);
      unit.getUsers(req, res)
      setTimeout(() => {
          expect(res.status).to.be.calledOnceWith(200)
          expect(res.json).to.be.calledOnce
          done()
      }, 0)
    });
})