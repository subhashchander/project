// ==========================================================================
// Project:   Faces.personController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Faces.personController = SC.ObjectController.create(
/** @scope Faces.personController.prototype */ {

  contentBinding:'Faces.peopleController.selection',
  //contentBindingDefaule: SC.Binding.single(),
  visitWebsite:function(){
  window.location( this.get('content').get('website'));
  }

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('faces');