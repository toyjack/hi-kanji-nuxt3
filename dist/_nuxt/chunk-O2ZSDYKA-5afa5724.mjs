import{E as u}from"./chunk-VVWTEMUP-e9d05752.mjs";import{i as p}from"./chunk-P2U3GQ3L-e6410a9a.mjs";import{H as d,G as c}from"./IIIFContentHandler-2D2CUZM6-4294b090.mjs";import{D as r,G as m,U as b,M as h}from"./entry-c293202b.mjs";var g=class extends u{create(){this.setConfig("resourcesLeftPanel"),super.create()}},o=r(d()),w=r(c()),s=m(),f=class extends p{constructor(e){super(e)}create(){this.setConfig("resourcesLeftPanel"),super.create(),this.setTitle(this.content.title),this.$tabsContent=s('<div class="tabsContent"></div>'),this.$main.append(this.$tabsContent),this.$views=s('<div class="views"></div>'),this.$tabsContent.append(this.$views),this.$thumbsView=s('<div class="thumbsView"></div>'),this.$views.append(this.$thumbsView),this.$resourcesView=s('<div class="resourcesView"></div>'),this.$resources=s("<ul></ul>"),this.$resourcesView.append(this.$resources),this.$views.append(this.$resourcesView),this.thumbsView=new g(this.$thumbsView),this.dataBind()}dataBind(){this.dataBindThumbsView();let e=this.extension.helper.getCurrentCanvas().getResources();e.length===0&&this.$resourcesView.hide();for(let i=0;i<e.length;i++){let t=e[i].getResource();if(t){let n=w.LanguageMap.getValue(t.getLabel());if(n){let a=b.simplifyMimeType(t.getFormat().toString()),l=s('<li><a href="'+t.id+'" target="_blank">'+n+" ("+a+")</li>");this.$resources.append(l)}}}}dataBindThumbsView(){if(!this.thumbsView)return;let e,i,t=this.extension.helper.getViewingDirection();t&&(t===o.ViewingDirection.LEFT_TO_RIGHT||t===o.ViewingDirection.RIGHT_TO_LEFT)?(e=this.config.options.twoColThumbWidth,i=this.config.options.twoColThumbHeight):(e=this.config.options.oneColThumbWidth,i=this.config.options.oneColThumbHeight),typeof e=="undefined"&&(e=100),typeof i=="undefined"&&(i=100),this.thumbsView.thumbs=this.extension.helper.getThumbs(e,i),this.thumbsView.thumbs.length<2&&this.$thumbsView.hide(),this.thumbsView.databind()}expandFullStart(){super.expandFullStart(),this.extensionHost.publish(h.LEFTPANEL_EXPAND_FULL_START)}expandFullFinish(){super.expandFullFinish(),this.extensionHost.publish(h.LEFTPANEL_EXPAND_FULL_FINISH)}collapseFullStart(){super.collapseFullStart(),this.extensionHost.publish(h.LEFTPANEL_COLLAPSE_FULL_START)}collapseFullFinish(){super.collapseFullFinish(),this.extensionHost.publish(h.LEFTPANEL_COLLAPSE_FULL_FINISH)}resize(){super.resize(),this.$views.height(this.$main.height()),this.$resources.height(this.$main.height())}};export{f as v};