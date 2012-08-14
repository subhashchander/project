// ==========================================================================
// Project:   Faces.FaceView
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Faces.FaceView = SC.View.extend(
/** @scope Faces.FaceView.prototype */ {

  contentDisplayProperties: 'name company website picture'.w(),
  render: function(context,firstTime){
    var content = this.get('content');
    var  name = content.get('name');
	var  company = content.get('company');
	var  website = content.get('website');
	var  picture = content.get('picture');
	  
	  context=context.begin('div').addClass('face-bottom-overlay').push('');
	  context=context.begin('div').addClass('face-name').push(name).end();
	  context=context.begin('div').addClass('face-company').push(company).end();
	  context=context.end();
	  if(picture){
	  context=context.begin('div').addClass('face-background').push('<img src="'+picture+'" alt="" class="stretch" />').end();
	  }   
	  arguments.callee.base.apply(this,arguments);
  
  }

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('faces');