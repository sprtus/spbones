# SPBones
Cut SharePoint's interface down to the bones with a lightweight and simplified responsive user interface template. **SPBones** is a minimal master page template that you can deploy to your SharePoint 2013, 2016, or Office 365/SharePoint Online environment to use as a starting point from which to build your design customizations.

- SPBones is **modern**
  - Ditch SharePoint Designer and code your design templates in your favorite editor on Windows or macOS
  - Includes [ES6](https://babeljs.io/docs/learn-es2015/) script support, [SASS](http://sass-lang.com/) stylesheets, [Font Awesome](http://fontawesome.io/) iconography, and [Gulp](http://gulpjs.com/) deployments using [Propeller](https://github.com/oldrivercreative/propeller)
  - Many default SharePoint styles have been reset to give you a "blank slate" on which to build your own customizations
- SPBones is **responsive**
  - Includes the [Bootstrap 3 responsive CSS grid system](http://getbootstrap.com/css/#grid)
  - Includes optimizations to make SharePoint content more mobile friendly
- SPBones is **accessible**
  - Includes semantic HTML5 markup structure
  - Includes simplified HTML for search optimization

## Prerequisites
1. Requires **SharePoint Server 2013/2016** (Standard or Enterprise) or **Office 365/SharePoint Online**
2. Requires the **Design** permission level in order to copy files and apply templates
3. We highly recommend using a **publishing** site collection

SPBones in *not* intended to serve as a standalone SharePoint template. This template should be used by web designers and SharePoint developers who understand the SharePoint interface customization process. This is not a SharePoint theme, but rather a building block onto which you can craft your own theme.

## Getting started
The easiest way to get started with **SPBones** is to run the included [Gulp](http://gulpjs.com/) deployment script.

1. After downloading or forking the repository, run `npm update` in the command line to download the required [NPM](https://www.npmjs.com/) modules
2. Open [`propeller.json`](./propeller.json) and change the `connection` settings to reflect the SharePoint environment to which you are deploying
3. **Deploy** files to your SharePoint environment by running `gulp` in the command line
4. **Publish** a major version of all deployed files in the browser
3. **Apply** the master page by visiting *Site Settings*, then *Master page*, then by selecting the appropriate master page and clicking on *OK*
  - For on-premises SharePoint 2013 environments, use the `bones/bones-2013` master page
  - For SharePoint 2016 or Office 365 environments, use the `bones/bones` master page

## Folder structure
SPBones includes a [`_catalogs`](./_catalogs) folder that maps to the matching location in your SharePoint environment. Any files placed into this folder will be deployed when running the deployment script. You can use this folder to deploy master pages, page layouts, design assets, image renditions, and web parts.

### Renaming your template
We generally recommended renaming your template before deploying to SharePoint. When renaming, be sure to update all references to the [`/bones`](./_catalogs/masterpage/bones) folder in your master page.

1. Rename the [`_catalogs/masterpage/bones`](./_catalogs/masterpage/bones) folder
2. Rename the [`bones.master`](./_catalogs/masterpage/bones/bones.master) file (or [`bones-2013.master`](./_catalogs/masterpage/bones/bones-2013.master) if you are using SharePoint 2013)
3. Inside your newly renamed master page file, update all references to the [`bones`](./_catalogs/masterpage/bones) folder to match the new folder name you created in step #1
4. Update the `tasks` area of the [`propeller.json`](./propeller.json) file to ensure compiled files are placed in the appropriate location during deployments

## Grid system
SPBones uses the [Bootstrap 3 responsive CSS grid system](http://getbootstrap.com/css/#grid). This is a highly configurable and flexible CSS grid system that allows you to easily build mobile-first master page and page layout templates. Read more about this grid system and see examples on the Bootstrap documentation page, [here](http://getbootstrap.com/css/#grid).

## Collaboration sites
We recommend that you use SPBones only with the **publishing** site collection template. While SharePoint collaboration sites (like the team site) offer some great functionality, the truth is that they were not built to be highly customizable or mobile-friendly.

The features available on a publishing site collection (like page layouts) are crucial requirements for making your SharePoint content mobile-friendly.

### What about team sites?
It's not all bad news! The *publishing* requirement doesn't mean you can't use your team sites. It simply means that your team sites need to be created as or converted to publishing sites. There are no features within the team site template that can't be added to a publishing site. Simply activate the "Team Collaboration Lists" site feature on any publishing site to enable tasks, issue lists, announcements, and calendars.

## SharePoint is not entirely customizable
Some features of the SharePoint interface are more customizable than others. While SharePoint makes it extremely easy to drop a list view web part into any page, the truth is that these web parts are built using HTML tables, which don't respond well to smaller screen sizes. Whenever possible, make use of the features of SharePoint that are customizable to ensure the best mobile experience for your users.

Using a combination of master pages, page layouts, and content search web parts, you can build nearly anything while retaining a mobile-friendly user experience. This often means avoiding some out-of-the-box features of SharePoint, and re-creating their functionality using the elements of SharePoint that allow you to utilize HTML templates or XSL styleseheets.

## Browser support
SPBones was written to be accessible on all browsers that the SharePoint 2013/2016/Office 365 products officially support. In general, this includes late versions of Chrome, Firefox, Safari, Android, iOS, and Internet Explorer version 8 and later.

# Change History
See all changes in [CHANGELOG.md](./CHANGELOG.md).
