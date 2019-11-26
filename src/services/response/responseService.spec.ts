import { expect } from 'chai';
import 'mocha';
import chai from 'chai';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import { ResponseService } from './responseService';
import { mockResponse } from 'mock-req-res';

describe('responseService', () => {
  const resService = new ResponseService();
  const mockData = {
    _id: '0000',
    name: 'Test 1'
  };
  const res = mockResponse();

  describe('when the success create function is called', () => {
    resService.successFind(res, mockData);

    it('should set the response status', () => {
      expect(res.status).to.have.been.calledWith(200);
    });

    it('should return the response in json', () => {
      expect(res.json).to.have.been.calledWith({
        status: 'success',
        data: { ...mockData }
      });
    });
  });

  describe('when the success create function is called', () => {
    resService.successCreate(res, mockData);

    it('should set the response status', () => {
      expect(res.status).to.have.been.calledWith(201);
    });

    it('should return the response in json', () => {
      expect(res.json).to.have.been.calledWith({
        status: 'success',
        data: { ...mockData }
      });
    });
  });

  describe('when the success delete function is called', () => {
    resService.successDelete(res);

    it('should set the response status', () => {
      expect(res.status).to.have.been.calledWith(204);
    });
  });
});
