// ==========================================================================
// Project:   Faces.peopleController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Faces */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Faces.peopleController = SC.ArrayController.create(
/** @scope Faces.peopleController.prototype */ {
    orderBy: 'name',
	
	submitPerson:function(){
		Faces.getPath('editPage.mainPane').remove();
		//Faces.personController.get('content').commitRecord();
		return YES;
	
	},
	addPerson:function(){
			var person = Faces.store.createRecord(Faces.Person,{
								name:"",
								company:"",
								website:"",
								picture:""
								});	
			this.invokeLater(function(){
			Faces.peopleController.selectObject(person);
			Faces.getPath('editPage.mainPane').append();
	      });
		  return YES;
	}
	
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('faces');