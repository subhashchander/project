// ==========================================================================
// Project:   Ecommerce.Category
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Ecommerce.Category = SC.Record.extend(
/** @scope Ecommerce.Category.prototype */ {
  name: SC.Record.attr(String),
  products: SC.Record.toMany("Ecommerce.Product", {
    inverse: "category", isMaster: YES
  }),
  treeItemIsExpanded: NO,
  treeItemChildren: function(){
    return this.get("products");
  }.property(),

}) ;
