// dependencies
const spsave = require('spsave').spsave

// load env.js configuration file
const env = require('./env')

// configuration options
const config = {
  siteUrl: env.site,
  checkin: false,
  checkinType: 2,
  checkinMessage: `Automatic deployment via SPBones`
}
delete env.site

// file options
const files = {
  glob: '_catalogs/**/*.*',
  base: '_catalogs',
  folder: '_catalogs'
}

// deploy
spsave(config, env, files).then(function(){
  console.log(`Deploy to SharePoint complete`)
}).catch(function(err){
  console.log(`Error while deploying to SharePoint: ${err}`)
})
