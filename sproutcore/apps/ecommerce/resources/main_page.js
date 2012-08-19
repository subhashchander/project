	// ==========================================================================
	// Project:   Ecommerce - mainPage
	// Copyright: @2012 My Company, Inc.
	// ==========================================================================
	/*globals Ecommerce */

	// This page describes the main user interface for your application.  
	Ecommerce.mainPage = SC.Page.design({

		mainPane: SC.MainPane.design({
			childViews: 'mainView'.w(),
			mainView: SC.View.design({
				layout: {top: 5, right: 5, bottom: 5, left: 5},
				childViews: 'list cart'.w(), 
				list: SC.ScrollView.design({
					layout: { left:100,top:20,height:500,width:300 },
					contentView: SC.ListView.design({
						layout: {top: 5,left: 5},
						contentValueKey: 'name',
						contentBinding: SC.Binding.oneWay('Ecommerce.categoryController.arrangedObjects'),
						selectionBinding: 'Ecommerce.categoryController.selection',
						target:'Ecommerce.selectedItemController',
						action:'subhash'

					})
				}),
			    cart: SC.View.extend({
					layout: { left: 450, right: 20, top: 20, bottom: 20,height:500 },
					childViews:'lbl grid orderButton'.w(),
					lbl: SC.LabelView.design({
						layout:{top:0,left:10,width:200, height:30},
						value: "_shoppingCart".loc(),
						fontWeight: SC.BOLD_WEIGHT
					}),

					grid:SC.ScrollView.design({
						layout: { left:0,top:30,height:400,right:0 },
						contentView:SC.GridView.design({
							layout:{top:0,left:0,right:0,bottom:10},
							backgroundColor: '#fff',
							rowHeight:60,
							columnWidth: 500,
							contentBinding: SC.Binding.oneWay('Ecommerce.orderArrayController.arrangedObjects'),
							selectionBinding: 'Ecommerce.orderArrayController.selection',
							exampleView: Ecommerce.OrderView
						})
					}),

					orderButton:SC.ButtonView.design({
                        layout:{right:50,bottom:5,height:23,width:100},
						title:"_btnSubmit".loc(),
						action:'finaliseOrder',
						target:'Ecommerce.orderArrayController'
					})
				})
			})
        }),
		detailPane: SC.PanelPane.design({

			layout:{centerX:0,centerY:0,width:550,height:400},
			contentView:SC.View.design({
				childViews: 'promt nameLabel name descriptionLabel description priceLabel price itemImage cancelButton submitButton'.w(),

				promt:SC.LabelView.design({
					layout:{top:12,left:20,height:16,right:20},
					fontWeight: SC.BOLD_WEIGHT,
					value:"_lblProductDetails".loc()
				}),
				nameLabel:SC.LabelView.design({
					layout:{top:40,left:0,height:18,width:120},
					textAlign: SC.ALIGN_RIGHT,
					value:"_lblProductName".loc()
				}),
				name:SC.LabelView.design({
					layout:{top:40,left:140,height:20,width:350},
					valueBinding:SC.Binding.oneWay('Ecommerce.selectedItemController.name')
				}),
				descriptionLabel:SC.LabelView.design({
					layout:{top:70,left:0,height:18,width:120},
					textAlign: SC.ALIGN_RIGHT,
					value:"_lblProductDescription".loc()
				}),
				description:SC.LabelView.design({
					layout:{top:70,left:140,height:30,width:350},
					valueBinding:  SC.Binding.oneWay('Ecommerce.selectedItemController.description') 
				}),
				priceLabel:SC.LabelView.design({
					layout:{top:100,left:0,height:18,width:120},
					textAlign: SC.ALIGN_RIGHT,
					value:"_lblProductPrice".loc()
				}),
				price:SC.LabelView.design({
					layout:{top:100,left:140,height:20,width:350},
					valueBinding: SC.Binding.oneWay('Ecommerce.selectedItemController.price') 
				}),
				itemImage: SC.ImageView.extend({
                  layout: { width: 220, height: 220, top: 130, left:140,height:100 },
                  valueBinding: SC.Binding.oneWay('Ecommerce.selectedItemController.image') 
                }),
				cancelButton:SC.ButtonView.design({
					layout:{bottom: 15,right:140 ,width:80,height:24 },
					title:"_btnCancel".loc(),
					target:'Ecommerce.selectedItemController',
					action:'cancelProduct'
				}),
				submitButton:SC.ButtonView.design({
					layout:{bottom: 15,right:50 ,width:80,height:24 },
					title: "_btnAddToCart".loc(),
					target:'Ecommerce.selectedItemController',
					action:'orderProduct'
				})
			})
        }),
		quantityChangePane: SC.PanelPane.design({

			layout:{centerX:0,centerY:0,width:300,height:200},
			contentView:SC.View.design({
				childViews: 'promt quantityLabel quantity cancelButton submitButton'.w(),

				promt:SC.LabelView.design({
					layout:{top:12,left:20,height:16,right:20},
					fontWeight: SC.BOLD_WEIGHT,
					value:"_lblChangeQuantity".loc()
				}),
				quantityLabel:SC.LabelView.design({
					layout:{top:40,left:0,height:18,width:120},
					textAlign: SC.ALIGN_RIGHT,
					value:"_lblProductQuantity".loc()
				}),
				quantity:SC.TextFieldView.design({
					layout:{top:40,left:140,height:20,width:30},
					valueBinding:'Ecommerce.orderArrayController.orderQuantity',
					validator:[ SC.Validator.Number.extend({ }) ,SC.Validator.NotEmpty.extend({})]
				}),
				cancelButton:SC.ButtonView.design({
					layout:{bottom: 15,right:140 ,width:80,height:24 },
					title:"_btnCancel".loc(),
					target:'Ecommerce.orderArrayController',
					action:'cancelQuantityChange'
				}),
				submitButton:SC.ButtonView.design({
					layout:{bottom: 15,right:50 ,width:80,height:24 },
					title:"_btnSave".loc(),
					target:'Ecommerce.orderArrayController',
					action:'saveQuantityChange'
				})
			})
	    })
    });
