// ==========================================================================
// Project:   Ecommerce.OrderView
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Ecommerce.OrderView = SC.View.extend(
/** @scope Ecommerce.OrderView.prototype */ {

  layout: {left: 10, right:10, bottom:10, width:350, maxWidth: 350, minWidth:200},
 
  childViews: 'quantityChangeButton removeButton name priceLabel price quantityLabel quantity'.w(),
  quantityChangeButton: SC.ButtonView.design({
    layout: { height: 24, bottom:32, right:5, width:120 },
    title: "_btnChangeQuantity".loc(),
    target:'Ecommerce.orderArrayController',
    action:'changeQuantity',
    valueBinding: SC.Binding.oneWay('.parentView.content.orderId')
  }),
  removeButton: SC.ButtonView.design({
    layout: { height: 24, bottom:5, right:5, width:75 },
    title: "_btnRemove".loc(),
    target:'Ecommerce.orderArrayController',
    action:'removeItem',
    valueBinding: SC.Binding.oneWay('.parentView.content.orderId')
  }),
  name: SC.LabelView.design({
    layout: { top:15, left:20, height:16, width:100 },
    valueBinding: SC.Binding.oneWay('.parentView.content.name')
  }),
  priceLabel: SC.LabelView.design({
    layout: { top:15, left:120, height:16, width:50 },
    value: "_lblProductPrice".loc()
  }),
  price: SC.LabelView.design({
    layout: { top:15, left:170, height:16, width:50 },
    valueBinding: SC.Binding.oneWay('.parentView.content.price')
  }),
  quantityLabel: SC.LabelView.design({
    layout: { top:15, left:250, height:16, width:50 },
    value:"_lblProductQuantity".loc()
  }),
  quantity:SC.LabelView.design({
    layout: { top:15, left:300, height:16, width:50 },
    fontWeight: SC.BOLD_WEIGHT,  
    valueBinding: SC.Binding.oneWay('.parentView.content.quantity')
  })

});

