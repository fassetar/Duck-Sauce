module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
	// concat: {
	  // js: {
		// options: {
		  // separator: ';'
		// },
		// src: [
		  // 'Example/javascript/*.js'
		// ],
		// dest: 'Example/javascripts/main.min.js'
	  // },
	// },
	// uglify: {
	  // options: {
		// mangle: false,
		// compress: true,
	  // },
	  // js: {
		// files: {
		  // 'Example/javascripts/main.min.js': ['Example/javascripts/main.js']
		// }
	  // }
	// },
	// less: {
	  // style: {
		// files: {
		  // "public/css/style.css": "less/style.less"
		// }
	  // }
	// },
	watch: {
	  js: {
		files: ["../Scripts/*.js"],
		//tasks: ['concat:js', 'uglify:js'],
		options: {
		  livereload: true,
		}
	  },
	   css: {
		 files: ['less/*.less'],
		 tasks: ['less:style'],
		 options: {
		   livereload: true,
		 }
	   }
	}
  });
 
  //grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};