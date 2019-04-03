const chai = require('chai');
const sinonExpress = require('sinon-express-mock');
const proxyquire = require('proxyquire');

let mockReq = sinonExpress.mockReq;
let mockRes = sinonExpress.mockRes;

const expect = chai.expect;


const reportMetric = () => {
    return new Promise((resolve, reject) => {
        resolve({})
    })
}

const req = mockReq();
const res = mockRes();

chai.use(require('sinon-chai'));

describe('Metrics Controller', () => {
    it('Should response 201', (done) => {
      unitPath = '../../controllers/Metrics';
      unitServices = {
        '../actions': {
          reportMetric
        } 
      }
      unit = proxyquire(unitPath, unitServices);
      unit.createMetric(req, res)
      setTimeout(() => {
          expect(res.status).to.be.calledOnceWith(201)
          expect(res.json).to.be.calledOnce
          done()
      }, 0)
    });
})