"use strict";

var error_handler = require('../../utils/error_handler');
var duoguoControl = require('./douguo/controller');
var meishijControl = require('./meishij/controller');
var manager = require('./manager');
var async = require('async');

//douguo
async.parallel(
	[
		function (callback) {duoguoControl.getSeeds(callback);},
		function (callback) {duoguoControl.getAnaly(callback);}
	],
	function (err) {
		if (err) {
			error_handler.logError(err);
			return;
		}
		setTimeout(duoguoControl.startSpiderUrl, 1000);
		setTimeout(duoguoControl.startAnalyUrl, 2000);
		setTimeout(duoguoControl.saveRecipes, 0);
		setTimeout(duoguoControl.saveSeeds, 0);
		setTimeout(duoguoControl.saveAnaly, 0);
		setTimeout(duoguoControl.showMessage, 0);
	}
);

//meishij
async.parallel(
	[
		function (callback) {meishijControl.getSeeds(callback);},
		function (callback) {meishijControl.getAnaly(callback);}
	],
	function (err) {
		if (err) {
			error_handler.logError(err);
			return;
		}
		setTimeout(meishijControl.startSpiderUrl, 1500);
		setTimeout(meishijControl.startAnalyUrl, 2500);
		setTimeout(meishijControl.saveRecipes, 1000);
		setTimeout(meishijControl.saveSeeds, 1000);
		setTimeout(meishijControl.saveAnaly, 1000);
		setTimeout(meishijControl.showMessage, 1000);
	}
);


