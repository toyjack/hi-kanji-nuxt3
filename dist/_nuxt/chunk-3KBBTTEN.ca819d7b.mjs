import{k as i}from"./chunk-7YKIH5A2.7ad4d380.mjs";import{a5 as o,ad as t}from"./entry.50cc3343.mjs";var s=o(),a=class extends i{constructor(e){super(e)}create(){this.setConfig("helpDialogue"),super.create(),this.openCommand=t.SHOW_HELP_DIALOGUE,this.closeCommand=t.HIDE_HELP_DIALOGUE,this.extensionHost.subscribe(this.openCommand,()=>{this.open()}),this.extensionHost.subscribe(this.closeCommand,()=>{this.close()}),this.$title=s('<div role="heading" class="heading"></div>'),this.$content.append(this.$title),this.$scroll=s('<div class="scroll"></div>'),this.$content.append(this.$scroll),this.$message=s("<p></p>"),this.$scroll.append(this.$message),this.$title.text(this.content.title),this.$message.html(this.content.text),this.$message.targetBlank(),this.$element.hide()}resize(){super.resize()}};export{a as n};