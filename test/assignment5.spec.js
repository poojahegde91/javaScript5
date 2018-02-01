//Test Case for Assignment5.
const expect = require("chai").expect;
const sinon = require('sinon');
const readline = require("readline");
const index = require("../index");

describe("Test the createInterface method of readline", function() {
  it("should be called only once", function() {
    let spyCreateInterface = sinon.spy(readline, 'createInterface');
    index.exec();
    readline.createInterface.restore();
    sinon.assert.calledOnce(spyCreateInterface);
  });
});
describe("Test the on() method of readline interface for line event", function() {
  it("should be called", function() {
    let stub = sinon.stub(readline.Interface.prototype, 'on');
    index.exec();
    sinon.assert.called(stub);
    readline.Interface.prototype.on.restore();
    sinon.assert.calledWith(stub, "line");
  });
});

describe('Assignment5 - Test code for correct output', function() {
  it ('Test whether the output of data is array or not', function(done) {
    expect(Array.isArray(index.countries)).to.deep.equal(true);
    done();
  });
   
  it ('Matches the desired output of object values as per given input test case', function(done) {
    expect(index.countries[0]).to.have.property('countryname', "Argentina");
	expect(index.countries[0]).to.have.property('area', 2766890);
	expect(index.countries[0].populationData).to.have.members([
40.79,
41.26,
41.73,
42.2,
42.64,
43.1
]);
	expect(index.countries[0].gdpData).to.have.members([
461.65,
558.68,
607.6,
622.05,
543.06,
578.71
]);
	expect(index.countries[0].gdpincomeData).to.have.members([
11318.2,
13540.01,
14559.04,
14739.6,
12735.6,
13428.32
]);
	expect(index.countries[0].gdppppData).to.have.members([
784.28,
867.6,
890.67,
931.3,
951,
964.28
]);
	done();
  });
});