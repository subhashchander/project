// ==========================================================================
// Project:   Ecommerce.Product
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Ecommerce.Product = SC.Record.extend(
/** @scope Ecommerce.Product.prototype */ {
  name: SC.Record.attr(String),
  description: SC.Record.attr(String),
  price: SC.Record.attr(Number),
  quantity: SC.Record.attr(Number),
  category: SC.Record.toOne("Ecommerce.Category", {
     inverse: "products", isMaster: NO
  }),
 //Custom code here
  treeItemIsExpanded: NO,
  isProduct: function(){return YES;},
  treeItemChildren: function(){
    return null;
  }.property('guid').cacheable()
 

}) ;
