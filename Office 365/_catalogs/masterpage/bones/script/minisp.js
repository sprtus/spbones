/*! minisp.js v1.0 | MIT License | https://github.com/oldrivercreative/spbones */
function minisp(path){
	
	// files to replace
	var files = ['corev15.css','controls15.css','searchv15.css','aclinv.css','controls.css','forms.css','pagelayouts15.css','editmode15.css','wpeditmodev4.css','page-layouts-21.css','edit-mode-21.css','portal.css','storefront.css','socialdata.css','survey.css','search.css','termstoremanager.css'];
	
	// get <head>
	var head = document.getElementsByTagName('head')[0].innerHTML;
	
	// [minisp] comment present?
	if(head.indexOf('[minisp]') > -1 && head.indexOf('[/minisp]') > -1){
		
		// get each css <link> rendered by SharePoint
		var links = head.substring(head.indexOf('[minisp]')+8, head.indexOf('[/minisp]')).split('\n');
		
		// loop through each css <link>
		for(var i = 0; i < links.length; i++){
			
			// match found?
			var match = false;
			
			// loop through each replacement css file
			for(var j = 0; j < files.length; j++){
				
				// does sharepoint css file match our replacement file?
				if(links[i].toLowerCase().indexOf('/' + files[j]) > -1 || links[i].toLowerCase().indexOf('/corev15-') > -1 && files[j] == 'corev15.css'){
					
					// match found, write new link to <head>
					document.write('<link rel="stylesheet" type="text/css" href="' + path + files[j] + '" />');
					match = true;
					break;
					
				}
				
			}
			
			// no match, write original css link to <head>
			if(!match){
				document.write(links[i]);
			}
			
		}
		
	}
	
}
