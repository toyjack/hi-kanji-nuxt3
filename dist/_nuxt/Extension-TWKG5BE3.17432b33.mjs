import{Q as m,O as v,_ as l,Z as s,S as c,$ as d,a0 as f,aj as P}from"./entry.cc194de1.mjs";import{i as E}from"./chunk-CHPN5XCG.c959e8fd.mjs";import{A as B}from"./chunk-PFNWY3RH.a21c9813.mjs";import{y as w}from"./chunk-RQD6ZDXZ.f7b64d36.mjs";import"./chunk-2SUYJOML.5227eb76.mjs";import{Y as D,t as I,X as C,e as A,Z as L,n as T,a as O}from"./chunk-7YKIH5A2.1bf302a1.mjs";import{H,G as R}from"./IIIFContentHandler-JCX6SYFT.5a124759.mjs";var S=class extends w{constructor(e){super(e)}create(){this.setConfig("downloadDialogue"),super.create()}open(e){super.open(e),this.addEntireFileDownloadOptions(),this.$downloadOptions.find("li:visible").length?this.$noneAvailable.hide():this.$noneAvailable.show(),this.resize()}isDownloadOptionAvailable(e){return super.isDownloadOptionAvailable(e)}},p=class{},n=p;n.namespace="pdfExtension.",n.PDF_LOADED=p.namespace+"pdfLoaded",n.PAGE_INDEX_CHANGE=p.namespace+"pageIndexChange",n.SEARCH=p.namespace+"search";var h=m(),N=class extends A{constructor(e){super(e),this._lastMediaUri=null,this._maxScale=5,this._minScale=.7,this._nextButtonEnabled=!1,this._pageIndex=1,this._pageIndexPending=null,this._pageRendering=!1,this._pdfDoc=null,this._pdfjsLib=null,this._prevButtonEnabled=!1,this._scale=.7}create(){this.setConfig("pdfCenterPanel"),super.create(),this._$pdfContainer=h('<div class="pdfContainer"></div>'),this._$canvas=h("<canvas></canvas>"),this._$progress=h('<progress max="100" value="0"></progress>'),this._canvas=this._$canvas[0],this._ctx=this._canvas.getContext("2d"),this._$prevButton=h('<div class="btn prev" tabindex="0"></div>'),this._$nextButton=h('<div class="btn next" tabindex="0"></div>'),this._$zoomInButton=h('<div class="btn zoomIn" tabindex="0"></div>'),this._$zoomOutButton=h('<div class="btn zoomOut" tabindex="0"></div>'),d.getBool(this.extension.data.config.options.usePdfJs,!1)&&(this.$content.append(this._$progress),this.$content.append(this._$prevButton),this.$content.append(this._$nextButton),this.$content.append(this._$zoomInButton),this.$content.append(this._$zoomOutButton)),this._$pdfContainer.append(this._$canvas),this.$content.prepend(this._$pdfContainer),this.extensionHost.subscribe(s.OPEN_EXTERNAL_RESOURCE,e=>{this.openMedia(e)}),this.extensionHost.subscribe(s.FIRST,()=>{!this._pdfDoc||(this._pageIndex=1,this._queueRenderPage(this._pageIndex))}),this.extensionHost.subscribe(s.PREV,()=>{!this._pdfDoc||this._pageIndex<=1||(this._pageIndex--,this._queueRenderPage(this._pageIndex))}),this.extensionHost.subscribe(s.NEXT,()=>{!this._pdfDoc||this._pageIndex>=this._pdfDoc.numPages||(this._pageIndex++,this._queueRenderPage(this._pageIndex))}),this.extensionHost.subscribe(s.LAST,()=>{!this._pdfDoc||(this._pageIndex=this._pdfDoc.numPages,this._queueRenderPage(this._pageIndex))}),this.extensionHost.subscribe(s.CANVAS_INDEX_CHANGE,()=>{!this._pdfDoc||(this._pageIndex=1,this._queueRenderPage(this._pageIndex))}),this.extensionHost.subscribe(n.SEARCH,e=>{!this._pdfDoc||e<1||e>this._pdfDoc.numPages||(this._pageIndex=e,this._queueRenderPage(this._pageIndex))}),this._$prevButton.onPressed(e=>{e.preventDefault(),this._prevButtonEnabled&&this.extensionHost.publish(s.PREV)}),this.disablePrevButton(),this._$nextButton.onPressed(e=>{e.preventDefault(),this._nextButtonEnabled&&this.extensionHost.publish(s.NEXT)}),this.disableNextButton(),this._$zoomInButton.onPressed(e=>{e.preventDefault();let t=this._scale+.5;t<this._maxScale?this._scale=t:this._scale=this._maxScale,this._render(this._pageIndex)}),this._$zoomOutButton.onPressed(e=>{e.preventDefault();let t=this._scale-.5;t>this._minScale?this._scale=t:this._scale=this._minScale,this._render(this._pageIndex)})}disablePrevButton(){this._prevButtonEnabled=!1,this._$prevButton.addClass("disabled")}enablePrevButton(){this._prevButtonEnabled=!0,this._$prevButton.removeClass("disabled")}hidePrevButton(){this.disablePrevButton(),this._$prevButton.hide()}showPrevButton(){this.enablePrevButton(),this._$prevButton.show()}disableNextButton(){this._nextButtonEnabled=!1,this._$nextButton.addClass("disabled")}enableNextButton(){this._nextButtonEnabled=!0,this._$nextButton.removeClass("disabled")}hideNextButton(){this.disableNextButton(),this._$nextButton.hide()}showNextButton(){this.enableNextButton(),this._$nextButton.show()}async openMedia(e){await this.extension.getExternalResources(e);let t=null,a=this.extension.helper.getCurrentCanvas(),o=this.extension.getMediaFormats(a),u=a.id;if(o&&o.length?t=o[0].id:t=a.id,t!==this._lastMediaUri){if(this._lastMediaUri=t,!d.getBool(this.extension.data.config.options.usePdfJs,!1))window.PDFObject=await l(()=>import("./pdfobject-RVTYN2PB.f2490bf8.mjs"),["_nuxt/pdfobject-RVTYN2PB.f2490bf8.mjs","_nuxt/entry.cc194de1.mjs","_nuxt/entry.a877e1a1.css"]),window.PDFObject.embed(u,".pdfContainer",{id:"PDF"});else{this._pdfjsLib?(this._$progress[0].setAttribute("value","0"),this._$progress.show(),this._$canvas.hide()):(await P(["//mozilla.github.io/pdf.js/build/pdf.js"]),this._pdfjsLib=window["pdfjs-dist/build/pdf"],this._pdfjsLib.GlobalWorkerOptions.workerSrc="//mozilla.github.io/pdf.js/build/pdf.worker.js");let b={url:t,withCredentials:a.externalResource.isAccessControlled()},g=this._pdfjsLib.getDocument(b);g.onProgress=r=>{let _=r.loaded/r.total*100;this._$progress[0].setAttribute("value",String(_)),_===100&&(this._$progress.hide(),this._$canvas.show())},g.promise.then(r=>{this._pdfDoc=r,this._render(this._pageIndex),this.extensionHost.publish(n.PDF_LOADED,r)})}this.extensionHost.publish(c.EXTERNAL_RESOURCE_OPENED),this.extensionHost.publish(c.LOAD)}}_render(e){if(!d.getBool(this.extension.data.config.options.usePdfJs,!1))return;this._pageRendering=!0,this._$zoomOutButton.enable(),this._$zoomInButton.enable();let t=this._scale-.5,a=this._scale+.5;t<this._minScale&&this._$zoomOutButton.disable(),a>this._maxScale&&this._$zoomInButton.disable(),this._pdfDoc.getPage(e).then(o=>{this._renderTask&&this._renderTask.cancel(),this._viewport=o.getViewport({scale:this._scale}),this._canvas.height=this._viewport.height,this._canvas.width=this._viewport.width;let u={canvasContext:this._ctx,viewport:this._viewport};this._renderTask=o.render(u),this._renderTask.promise.then(()=>{this.extensionHost.publish(n.PAGE_INDEX_CHANGE,this._pageIndex),this._pageRendering=!1,this._pageIndexPending!==null&&(this._render(this._pageIndexPending),this._pageIndexPending=null),this._pageIndex===1?this.disablePrevButton():this.enablePrevButton(),this._pageIndex===this._pdfDoc.numPages?this.disableNextButton():this.enableNextButton()}).catch(b=>{})})}_queueRenderPage(e){this._pageRendering?this._pageIndexPending=e:this._render(e)}resize(){super.resize(),this._$pdfContainer.width(this.$content.width()),this._$pdfContainer.height(this.$content.height()),this._$progress.css("top",this.$content.height()/2-this._$progress.height()/2),this._$progress.css("left",this.$content.width()/2-this._$progress.width()/2),this._$prevButton.css({top:(this.$content.height()-this._$prevButton.height())/2,left:this._$prevButton.horizontalMargins()}),this._$nextButton.css({top:(this.$content.height()-this._$nextButton.height())/2,left:this.$content.width()-(this._$nextButton.width()+this._$nextButton.horizontalMargins())}),this._viewport&&this._render(this._pageIndex)}},i=m(),y=class extends L{constructor(e){super(e),this.firstButtonEnabled=!1,this.lastButtonEnabled=!1,this.nextButtonEnabled=!1,this.prevButtonEnabled=!1,this._pageIndex=0,this._pdfDoc=null}create(){this.setConfig("pdfHeaderPanel"),super.create(),this.extensionHost.subscribe(n.PAGE_INDEX_CHANGE,e=>{this._pageIndex=e,this.render()}),this.extensionHost.subscribe(n.PDF_LOADED,e=>{this._pdfDoc=e}),this.$prevOptions=i('<div class="prevOptions"></div>'),this.$centerOptions.append(this.$prevOptions),this.$firstButton=i(`
          <button class="btn imageBtn first" tabindex="0" title="${this.content.first}">
            <i class="uv-icon-first" aria-hidden="true"></i>
            <span class="sr-only">${this.content.first}</span>
          </button>
        `),this.$prevOptions.append(this.$firstButton),this.$firstButton.disable(),this.$prevButton=i(`
          <button class="btn imageBtn prev" tabindex="0" title="${this.content.previous}">
            <i class="uv-icon-prev" aria-hidden="true"></i>
            <span class="sr-only">${this.content.previous}</span>
          </button>
        `),this.$prevOptions.append(this.$prevButton),this.$prevButton.disable(),this.$search=i('<div class="search"></div>'),this.$centerOptions.append(this.$search),this.$searchText=i('<input class="searchText" maxlength="50" type="text" tabindex="0" aria-label="'+this.content.pageSearchLabel+'"/>'),this.$search.append(this.$searchText),this.$total=i('<span class="total"></span>'),this.$search.append(this.$total),this.$searchButton=i('<a class="go btn btn-primary" tabindex="0">'+this.content.go+"</a>"),this.$search.append(this.$searchButton),this.$searchButton.disable(),this.$nextOptions=i('<div class="nextOptions"></div>'),this.$centerOptions.append(this.$nextOptions),this.$nextButton=i(`
          <button class="btn imageBtn next" tabindex="0" title="${this.content.next}">
            <i class="uv-icon-next" aria-hidden="true"></i>
            <span class="sr-only">${this.content.next}</span>
          </button>
        `),this.$nextOptions.append(this.$nextButton),this.$nextButton.disable(),this.$lastButton=i(`
          <button class="btn imageBtn last" tabindex="0" title="${this.content.last}">
            <i class="uv-icon-last" aria-hidden="true"></i>
            <span class="sr-only">${this.content.last}</span>
          </button>
        `),this.$nextOptions.append(this.$lastButton),this.$lastButton.disable(),this.$firstButton.onPressed(()=>{this.extensionHost.publish(s.FIRST)}),this.$prevButton.onPressed(()=>{this.extensionHost.publish(s.PREV)}),this.$nextButton.onPressed(()=>{this.extensionHost.publish(s.NEXT)}),this.$lastButton.onPressed(()=>{this.extensionHost.publish(s.LAST)}),this.$searchText.onEnter(()=>{this.$searchText.blur(),this.search(this.$searchText.val())}),this.$searchText.click(function(){i(this).select()}),this.$searchButton.onPressed(()=>{this.search(this.$searchText.val())})}render(){this._pdfDoc.numPages===1?this.$centerOptions.hide():this.$centerOptions.show(),this.$searchText.val(this._pageIndex);let e=this.content.of;this.$total.html(f.format(e,this._pdfDoc.numPages.toString())),this.$searchButton.enable(),this._pageIndex===1?(this.$firstButton.disable(),this.$prevButton.disable()):(this.$firstButton.enable(),this.$prevButton.enable()),this._pageIndex===this._pdfDoc.numPages?(this.$lastButton.disable(),this.$nextButton.disable()):(this.$lastButton.enable(),this.$nextButton.enable())}search(e){if(!e){this.extension.showMessage(this.content.emptyValue);return}let t=parseInt(this.$searchText.val(),10);if(isNaN(t)){this.extension.showMessage(this.extension.data.config.modules.genericDialogue.content.invalidNumber);return}this.extensionHost.publish(n.SEARCH,t)}resize(){super.resize()}},k=class extends T{constructor(e){super(e)}create(){this.setConfig("settingsDialogue"),super.create()}},F=class extends O{constructor(e){super(e)}create(){this.setConfig("shareDialogue"),super.create()}update(){super.update(),this.code=this.extension.getEmbedScript(this.options.embedTemplate,this.currentWidth,this.currentHeight),this.$code.val(this.code)}resize(){super.resize()}},z=v(H()),M=v(R()),G={authAPIVersion:1,bookmarkThumbHeight:150,bookmarkThumbWidth:90,dropEnabled:!0,footerPanelEnabled:!0,headerPanelEnabled:!0,limitLocales:!1,openTemplate:"http://universalviewer.io?manifest={0}",pessimisticAccessControl:!1,rightPanelEnabled:!0,theme:"uv-en-GB-theme",usePdfJs:!0},V={shareDialogue:{options:{embedTemplate:'<iframe src="{0}" width="{1}" height="{2}" allowfullscreen frameborder="0"></iframe>'},content:{customSize:"custom",embed:"Embed",embedInstructions:"To embed this item in your own website, copy and paste the code below.",height:"Height",iiif:"IIIF Manifest",share:"Share",shareInstructions:"To share this item, copy the URL below.",size:"Size:",width:"Width"}},footerPanel:{options:{bookmarkEnabled:!1,embedEnabled:!1,feedbackEnabled:!1,minimiseButtons:!0,openEnabled:!1,shareEnabled:!0},content:{bookmark:"Add to bookmarks",download:"Download",embed:"Embed",exitFullScreen:"Exit Full Screen",feedback:"Feedback",fullScreen:"Full Screen",moreInfo:"More Information",open:"Open",share:"Share"}},genericDialogue:{content:{ok:"OK"}},headerPanel:{content:{close:"Close",help:"Help"}},helpDialogue:{content:{text:"placeholder text",title:"Help"}},moreInfoRightPanel:{options:{canvasDisplayOrder:"",canvasExclude:"",copyToClipboardEnabled:!1,manifestDisplayOrder:"",manifestExclude:"",panelAnimationDuration:250,panelCollapsedWidth:30,panelExpandedWidth:255,panelOpen:!1,rtlLanguageCodes:"ar, ara, dv, div, he, heb, ur, urd",showAllLanguages:!1,textLimit:4,textLimitType:"lines"},content:{attribution:"Attribution",collapse:"Collapse Information",collapseFull:"Collapse Gallery",description:"Description",expand:"Expand Information",expandFull:"Expand Gallery",holdingText:"Your module goes here!",less:"less",license:"License",logo:"Logo",more:"more",noData:"No data to display",page:"Page",title:"More Information",manifestHeader:"About the item",canvasHeader:"About the image",copyToClipboard:"Copy to clipboard",copiedToClipboard:"Copied to clipboard"}},pdfCenterPanel:{options:{titleEnabled:!1},content:{attribution:"Attribution"}},resourcesLeftPanel:{options:{elideCount:40,galleryThumbHeight:320,galleryThumbWidth:200,oneColThumbHeight:320,oneColThumbWidth:200,pageModeEnabled:!0,panelAnimationDuration:250,panelCollapsedWidth:30,panelExpandedWidth:255,panelOpen:!0,thumbsEnabled:!0,thumbsExtraHeight:8,thumbsImageFadeInDuration:300,thumbsLoadRange:15,treeEnabled:!0,twoColThumbHeight:150,twoColThumbWidth:90}},dialogue:{content:{close:"Close"}},downloadDialogue:{content:{download:"Download",entireFileAsOriginal:"Entire file",noneAvailable:"No download options are available.",preview:"Preview",title:"Download"}},pdfHeaderPanel:{content:{emptyValue:"Please enter a value",first:"First",go:"Go",last:"Last",next:"Next",of:"of {0}",previous:"Previous"}},loginDialogue:{content:{login:"Login",cancel:"Cancel"}},settingsDialogue:{content:{locale:"Locale",pagingEnabled:"Two Page View",reducedMotion:"Reduce motion (disables animations)",preserveViewport:"Preserve Zoom",title:"Settings",website:"<a href='https://github.com/universalviewer/universalviewer'>more info</a>"}},contentLeftPanel:{}},j={label:"English (GB)",locales:[{name:"cy-GB",label:"Cymraeg"},{name:"en-GB",label:"English (GB)"},{name:"fr-FR",label:"Fran\xE7ais (FR)"},{name:"pl-PL",label:"Polski"},{name:"sv-SE",label:"Svenska"}]},X={authCORSError:"Your browser does not support CORS, please upgrade to view this content.",authorisationFailedMessage:"Your log-in attempt did not appear to be successful. Please try again.",degradedResourceMessage:"Please log in to view at full quality.",degradedResourceLogin:"log in",forbiddenResourceMessage:"Your current access rights are insufficient to view this image",mediaViewer:"Media Viewer",skipToDownload:"Skip to downloads and alternative formats"},x={options:G,modules:V,localisation:j,content:X},Q=class extends D{constructor(){super(...arguments),this.defaultConfig=x,this.locales={"en-GB":x,"cy-GB":()=>l(()=>import("./cy-GB-WWDYYBGX.e0978ab8.mjs"),["_nuxt/cy-GB-WWDYYBGX.e0978ab8.mjs","_nuxt/entry.cc194de1.mjs","_nuxt/entry.a877e1a1.css"]),"fr-FR":()=>l(()=>import("./fr-FR-Y4OU6ZBH.674054a1.mjs"),["_nuxt/fr-FR-Y4OU6ZBH.674054a1.mjs","_nuxt/entry.cc194de1.mjs","_nuxt/entry.a877e1a1.css"]),"pl-PL":()=>l(()=>import("./pl-PL-UQWPTAG2.0ca2b9fc.mjs"),["_nuxt/pl-PL-UQWPTAG2.0ca2b9fc.mjs","_nuxt/entry.cc194de1.mjs","_nuxt/entry.a877e1a1.css"]),"sv-SE":()=>l(()=>import("./sv-SE-QMXBFALH.c8ea1587.mjs"),["_nuxt/sv-SE-QMXBFALH.c8ea1587.mjs","_nuxt/entry.cc194de1.mjs","_nuxt/entry.a877e1a1.css"])}}create(){super.create(),this.extensionHost.subscribe(s.CANVAS_INDEX_CHANGE,e=>{this.viewCanvas(e)}),this.extensionHost.subscribe(s.THUMB_SELECTED,e=>{this.extensionHost.publish(s.CANVAS_INDEX_CHANGE,e.index)}),this.extensionHost.subscribe(s.LEFTPANEL_EXPAND_FULL_START,()=>{this.shell.$centerPanel.hide(),this.shell.$rightPanel.hide()}),this.extensionHost.subscribe(s.LEFTPANEL_COLLAPSE_FULL_FINISH,()=>{this.shell.$centerPanel.show(),this.shell.$rightPanel.show(),this.resize()}),this.extensionHost.subscribe(c.EXIT_FULLSCREEN,()=>{setTimeout(()=>{this.resize()},10)})}render(){super.render()}isHeaderPanelEnabled(){return super.isHeaderPanelEnabled()&&d.getBool(this.data.config.options.usePdfJs,!0)}createModules(){super.createModules(),this.isHeaderPanelEnabled()?this.headerPanel=new y(this.shell.$headerPanel):this.shell.$headerPanel.hide(),this.isLeftPanelEnabled()&&(this.leftPanel=new B(this.shell.$leftPanel)),this.centerPanel=new N(this.shell.$centerPanel),this.isRightPanelEnabled()&&(this.rightPanel=new I(this.shell.$rightPanel)),this.isFooterPanelEnabled()?this.footerPanel=new C(this.shell.$footerPanel):this.shell.$footerPanel.hide(),this.$downloadDialogue=$('<div class="overlay download" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$downloadDialogue),this.downloadDialogue=new S(this.$downloadDialogue),this.$shareDialogue=$('<div class="overlay share" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$shareDialogue),this.shareDialogue=new F(this.$shareDialogue),this.$settingsDialogue=$('<div class="overlay settings" aria-hidden="true"></div>'),this.shell.$overlays.append(this.$settingsDialogue),this.settingsDialogue=new k(this.$settingsDialogue),this.isLeftPanelEnabled()&&this.leftPanel.init(),this.isRightPanelEnabled()&&this.rightPanel.init()}bookmark(){super.bookmark();let e=this.helper.getCurrentCanvas(),t=new E;t.index=this.helper.canvasIndex,t.label=M.LanguageMap.getValue(e.getLabel()),t.thumb=e.getProperty("thumbnail"),t.title=this.helper.getLabel(),t.trackingLabel=window.trackingLabel,t.type=z.ExternalResourceType.DOCUMENT,this.fire(s.BOOKMARK,t)}dependencyLoaded(e,t){e===0&&(window.PDFObject=t)}getEmbedScript(e,t,a){let o=`${this.getAppUri()}#?manifest=${this.helper.manifestUri}&c=${this.helper.collectionIndex}&m=${this.helper.manifestIndex}&cv=${this.helper.canvasIndex}`;return f.format(e,o,t.toString(),a.toString())}};export{Q as default};
