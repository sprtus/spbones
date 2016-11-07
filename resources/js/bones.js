/**
 *
 * SPBones v2.0 | MIT License | https://github.com/oldrivercreative/spbones
 * 
 * Create an object that contains important information regarding the current
 * SharePoint site, web, page, and user. This object is especially useful when
 * building REST applications and web parts.
 *
 */

module.exports = {

  // form digest
  digest: document.getElementById('__REQUESTDIGEST').value,

  // current host
  host: {
    env: _spPageContextInfo.env,
    farm: _spPageContextInfo.farmLabel,
    name: window.location.host,
    protocol: window.location.protocol,
    url: window.location.protocol + '//' + window.location.host,
  },

  // current list
  list: {
    id: _spPageContextInfo.listId,
    title: _spPageContextInfo.listTitle,
    url: _spPageContextInfo.listUrl,
  },

  // current page
  page: {
    editmode: document.getElementById('MSOLayout_InDesignMode').value == '1',
    id: _spPageContextInfo.pageItemId,
    language: _spPageContextInfo.currentLanguage,
    physical: _spPageContextInfo.serverRequestPath,
    title: document.title,
  },

  // current site collection
  sitecollection: {
    id: _spPageContextInfo.siteId,
    relative: _spPageContextInfo.siteServerRelativeUrl.replace(/^\/|\/$/g, ''),
    url: _spPageContextInfo.siteAbsoluteUrl.replace(/^\/|\/$/g, ''),
  },

  // current user
  user: {
    id: _spPageContextInfo.userId,
    key: _spPageContextInfo.systemUserKey,
    name: _spPageContextInfo.userDisplayName,
  },

  // current web
  web: {
    id: _spPageContextInfo.webId,
    logo: _spPageContextInfo.webLogoUrl,
    relative: _spPageContextInfo.webServerRelativeUrl.replace(/^\/|\/$/g, ''),
    title: _spPageContextInfo.webTitle,
    url: _spPageContextInfo.webAbsoluteUrl.replace(/^\/|\/$/g, ''),
  },

};
