// ==========================================================================
// Project:   Faces - editPage
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Faces */

// This page describes the main user interface for your application.  
Faces.editPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.PanelPane.design({
    
	layout:{centerX:0,centerY:0,width:550,height:200},
	contentView:SC.View.design({
	 childViews: 'promt nameLabel name companyLabel company websiteLabel website pictureLabel picture submitButton'.w(),
	 promt:SC.LabelView.design({
		 layout:{top:12,left:20,height:16,right:20},
		 fontWeight: SC.BOLD_WEIGHT,
		 value:"Add Yourself below"
	 }),
    nameLabel:SC.LabelView.design({
		 layout:{top:40,left:0,height:18,width:120},
		 textAlign: SC.ALIGN_RIGHT,
		 value:"Name"
	 }),
	 name:SC.TextFieldView.design({
	 layout:{top:40,left:140,height:20,width:350},
	 hint:'Name',
	 valueBinding:'Faces.personController.name'
	 }),
	 companyLabel:SC.LabelView.design({
		 layout:{top:70,left:0,height:18,width:120},
		 textAlign: SC.ALIGN_RIGHT,
		 value:"Company"
	 }),
	 company:SC.TextFieldView.design({
		 layout:{top:70,left:140,height:20,width:350},
		 hint:'company',
		 valueBinding:'Faces.personController.company'
	 }),
	 
	  websiteLabel:SC.LabelView.design({
			 layout:{top:100,left:0,height:18,width:120},
			 textAlign: SC.ALIGN_RIGHT,
			 value:"Website"
	 }),
	 website:SC.TextFieldView.design({
		 layout:{top:100,left:140,height:20,width:350},
		 hint:'website',
		 valueBinding:'Faces.personController.website'
	 }),
	  pictureLabel:SC.LabelView.design({
		 layout:{top:130,left:0,height:18,width:120},
		 textAlign: SC.ALIGN_RIGHT,
		 value:"Picture"
	 }),
	 picture:SC.TextFieldView.design({
			 layout:{top:130,left:140,height:20,width:350},
			 hint:'picture',
			 valueBinding:'Faces.personController.picture'
	 }),
	 submitButton:SC.ButtonView.design({
			 layout:{bottom: 15,right:50 ,width:80,height:24 },
			 title:'submit',
			 target:'Faces.peopleController',
			 action:'submitPerson'
	 })
	 })
	 
	})


});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('faces');