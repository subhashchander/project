// ==========================================================================
// Project:   Ecommerce.productController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Ecommerce.productController = SC.ArrayController.create(
/** @scope Ecommerce.productController.prototype */ {
  getProduct: function(prodId){
    var product = Ecommerce.store.find(SC.Query.local(Ecommerce.Product,"guid = {id}", {
	    id: prodId,
	    orderBy: "name ASC"
	  })).firstObject();
    return product;
   }
            
}) ;
