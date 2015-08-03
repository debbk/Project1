module.exports = function(grunt) {

	//Configure tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		//Responsive images plugin
		responsive_images: {
			dev: {
				options: {
			 		engine: 'im',
			 		sizes: [
			 		{
			 		width: 300,
			 		quality:50,
			 		suffix: 1
			 		}]
				},
				files: [{
			 		expand: true,
			 		src: ['*.{gif,jpg,png}'],
			 		cwd: 'images_src/',
			 		dest: 'imagesmall/'
				}]
			}
		},

		//Clear out the images directory if it exists
		clean: {
			dev: {
				src: ['imagesmall'],
			},
		},

		//Generate the images directory if it is missing
		mkdir: {
			dev: {
				options: {
					create: ['imagesmall']
				},
			},
		},

		//Copy the "fixed" images that don't go through processing into the images/directory
		copy: {
			dev: {
				files: [{
				expand: true,
          		src: 'images_src/fixed/*.{gif,jpg,png}',
          		dest: 'imagesmall/'
				}]
			},
		},
	});

	//Load plugins
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-copy');

	//Register tasks
	grunt.registerTask('default',['clean', 'mkdir', 'copy', 'responsive_images']);
};