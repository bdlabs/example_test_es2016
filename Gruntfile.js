module.exports = function(grunt) {

  	// Example configuration
	grunt.initConfig({
		// karma: {
		//     options: {
		//         configFile: 'karma.conf.js',
		//      //   files: ['test/**/*.js']
		//     },

		//     continuous: {
		//         logLevel:  'INFO',
		//         singleRun: true,
		//     }
		// },
		karma: {
		  unit: {
		    options: {
		      configFile: 'karma.conf.js',
		      //logLevel:  'INFO'
		    }
		  }
		},
	  jasmine: {
	    pivotal: {
	      	src: 'test/**/*.js',
	      	options: {
	      		helpers: [
					"./node_modules/babel-register/lib/node.js"
				],
	      		template: require('grunt-template-jasmine-requirejs'),
	      		// specs : 'src/**/*.js',
	        //     templateOptions: {
	        //         requireConfig: {
	        //                 baseUrl: ''
	        //         }
	        //     }
	  		}
	    }
	  }
	});


	//grunt.loadNpmTasks('grunt-template-jasmine-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('test', ['karma:unit']);
	//grunt.registerTask('test', ['jasmine']);

};


