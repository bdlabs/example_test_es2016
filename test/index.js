'use strict'

import {expect} from 'chai';


describe("first test", function() {

	it("should add 2 and 2 = 4", function() {
        console.log( expect(2 + 2).to.equal(4) );
    });

    it("FiltrArrayElement correct for char `a`",function(){
    	var FiltrArrayElement = require('../src/FiltrArrayElement');

    	var tablica = [ 'element1', 'mom', 'cat', 'bat', 'car' ];

	  	var wynik = ['cat', 'bat', 'car'];
		expect( FiltrArrayElement.match( tablica, /a/img ) ).to.eql(wynik);
    });

    it("FiltrArrayElement correct for `^c`",function(){
    	var FiltrArrayElement = require('../src/FiltrArrayElement');

    	var tablica = [ 'element1', 'mom', 'cat', 'bat', 'car' ];

	  	var wynik = ['cat', 'car'];
		expect( FiltrArrayElement.match( tablica, /^c/img ) ).to.eql(wynik);
    });

});