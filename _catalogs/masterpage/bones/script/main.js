/*! main.js | Place your custom script into this file */

// bones data
var bones = {
	
	// get site
	site: {
	    host: window.location.protocol + '//' + window.location.host,
	    collection: {
	        url: _spPageContextInfo.siteAbsoluteUrl.replace(/^\/|\/$/g, ''),
	        relative: _spPageContextInfo.siteServerRelativeUrl.replace(/^\/|\/$/g, '')
	    },
	    web: {
	        url: _spPageContextInfo.webAbsoluteUrl.replace(/^\/|\/$/g, ''),
	        relative: _spPageContextInfo.webServerRelativeUrl.replace(/^\/|\/$/g, ''),
	        title: _spPageContextInfo.webTitle,
	        logo: _spPageContextInfo.webLogoUrl
	    }
	},

    // get page
	page: {
        id: _spPageContextInfo.pageItemId,
        physical: _spPageContextInfo.serverRequestPath,
        title: _spPageContextInfo.webTitle,
        language: _spPageContextInfo.currentLanguage,
        editmode: $('#MSOLayout_InDesignMode').val() == '1'
	},
	
	// get user
	user: {
	    id: _spPageContextInfo.userId,
        key: _spPageContextInfo.systemUserKey
	},
	
	// form digest
	digest: $('#__REQUESTDIGEST').val()
	
};