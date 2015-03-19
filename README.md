# SPBones
Cut SharePoint's interface down to the bones with a lightweight and simplified responsive user interface template. **SPBones** is a master page template that you can copy into your SharePoint 2013 or Office 365 environment to use as a starting point from which to build your own customizations.

- SPBones is **responsive**
  - Includes the [Bootstrap 3 responsive CSS grid system](http://getbootstrap.com/css/#grid)
  - Includes optimizations to make SharePoint content more mobile friendly
- SPBones is **accessible**
  - Includes semantic HTML5 markup structure
  - Includes simplified HTML for search optimization
- SPBones is **lightweight**
  - Includes minified versions of many default SharePoint CSS files
  - Many default SharePoint styles have been removed to give you a "blank slate" on which to build your own customizations

## Prerequisites
1. Requires SharePoint 2013 (Standard or Enterprise) or Office 365
2. Requires the _Design_ permission level in order to copy files and apply templates
3. We highly recommend using a publishing site collection

SPBones in _not_ intended to serve as a standalone SharePoint template. This template should be used by experienced web designers and SharePoint developers who understand the SharePoint interface customization process. This is not a SharePoint "theme," but rather a building block onto which you can craft your own theme.

## Getting started
The easiest way to get started with **SPBones** is to copy the template files into your SharePoint environment. You can copy these files by mapping a network drive to your SharePoint environment, or by dropping the files into the _All Files_ area of your SharePoint Designer application window.

1. **Copy** the `bones` folder into your SharePoint master page gallery (this should be located at `/_catalogs/masterpage/` within your site collection)
2. **Publish** the copied files using SharePoint Designer or by browsing to the master page gallery within your web browser
3. **Apply** the master page by visiting _Site Settings_, then _Master page_, then by selecting the appropriate master page and clicking on _OK_
  - For on-premises SharePoint 2013 environments, use the `bones.master` master page
  - For Office 365 environments, use the `bones-o365.master` master page

## Template structure
SPBones includes a recommended folder structure for organizing your design assets, such as CSS files, JS files, and images.

- `bones`
  - `img` _Place your design-related image assets here_
  - `script`
    - `main.js` _Place your custom scripts here_
  - `style`
    - `core` _Contains minified SharePoint CSS files_
    - `bones.css` _SPBones optimizations, normalize.css, and bootstrap.css_
    - `main.css` _Place your custom CSS styles here_

You can extend this template structure to include web fonts, video, or even SharePoint Content Search web part display templates.

### Renaming your template
It's generally recommended to rename your master page after adding it to your site collection. When renaming your template, be sure to update all references within your master page to the new folder name.

1. Rename the `bones` folder
2. Rename the `bones.master` file (or `bones-o365.master` if you are using Office 365)
3. Inside your newly renamed master page file, update all references to the `bones` folder to match the new folder name you created in step #1 (we recommend using _find/replace_ to replace each instance of `/_catalogs/masterpage/bones/`)

## Grid system
SPBones uses the [Bootstrap 3 responsive CSS grid system](http://getbootstrap.com/css/#grid). This is a highly configurable and flexible CSS grid system that allows you to easily build mobile-first master page and page layout templates. Read more about this grid system and see examples on the Bootstrap documentation page, [here](http://getbootstrap.com/css/#grid).

#### SharePoint collaboration sites
We recommend that you use SPBones only with the **publishing** site collection template. While SharePoint collaboration sites (like the team site) offer some great functionality, the truth is that they were not built to be highly customizable or mobile-friendly.

The features available on a publishing site collection (like page layouts) are crucial requirements for making your SharePoint content mobile-friendly. This is unfortunate, but it's the hand that Microsoft has dealt us.

#### What about team sites?
It's not all bad news! The _publishing_ requirement doesn't mean you can't use your team sites. It simply means that your team sites need to be created as or converted to publishing sites. There are no features within the team site template that can't be added to a publishing site. Simply activate the "Team Collaboration Lists" site feature on any publishing site to enable tasks, issue lists, announcements, and calendars.

#### SharePoint is not entirely customizable
Some features of the SharePoint interface are more customizable than others. While SharePoint makes it extremely easy to drop a list view web part into any page, the truth is that these web parts are built using HTML tables, which don't respond well to smaller screen sizes. Whenever possible, make use of the features of SharePoint that are customizable to ensure the best mobile experience for your users.

Using a combination of master pages, page layouts, and content search web parts, you can build nearly anything while retaining a mobile-friendly user experience. This often means avoiding some out-of-the-box features of SharePoint, and re-creating their functionality using the elements of SharePoint that allow you to utilize HTML templates or XSL styleseheets.

## Browser support
SPBones was written to be accessible on all browsers that the SharePoint 2013/Office 365 products officially support. In general, this includes late versions of Chrome, Firefox, Safari, Android, iOS, and Internet Explorer version 8 and later. SPBones uses a CDN-hosted version of [respond.js](https://github.com/scottjehl/Respond) and [html5shiv.js](https://github.com/aFarkas/html5shiv) to add media query and HTML5 support to IE8.