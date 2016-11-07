// dependencies
const gulp = require('gulp');
const propeller = require('gulp-propeller');
const propellersp = require('propeller-sharepoint');

gulp.task('default', function(){

  // add sharepoint deployer to propeller
  propeller.extend(propellersp);

  // run propeller tasks
  propeller.run().deploy('o365');

});
