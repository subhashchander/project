// ==========================================================================
// Project:   Ecommerce.orderArrayController
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Ecommerce.orderArrayController = SC.ArrayController.create(
/** @scope Ecommerce.orderArrayController.prototype */ {

  // TODO: Add your own code here.
  _editingOrder:null,
  orderQuantity:null,
  getOrder: function(orderId){
    var order = Ecommerce.store.find(SC.Query.local(Ecommerce.Order,"orderId = {id}",
    {
      id: orderId,
      orderBy: "name ASC"
    })).firstObject();
    return order;
   },
   getOrderByProduct: function(prodId){
    var order = Ecommerce.store.find(SC.Query.local(Ecommerce.Order,"productId = {id}",
    {
      id: prodId,
      orderBy: "name ASC"
    })).firstObject();
    return order;
   },
  removeItem:function(view){
  	var order,product;
    order = this.getOrder(view.get('value'));
    product= Ecommerce.productController.getProduct(order.get('productId'));
    product.set('quantity', order.get('quantity'));
  	order.destroy();
  	 return YES;
  },
  changeQuantity:function(view){
    var order = this.getOrder(view.get('value'));
    this.set('_editingOrder', order);
    this.set('orderQuantity', parseInt(order.get('quantity')));
    SC.getPath('Ecommerce.mainPage.quantityChangePane').append();
    return YES;
  },
  cancelQuantityChange:function(){
    SC.getPath('Ecommerce.mainPage.quantityChangePane').remove();
    return YES;
  },
  saveQuantityChange:function(){
    var oldQuantity,newQuantity,product;
    oldQuantity = parseInt(this.get('_editingOrder').get('quantity'));
    newQuantity = this.get('orderQuantity');
       
    if(newQuantity===''){
      newQuantity=0;
    }
    newQuantity= parseInt(newQuantity);
    if(newQuantity ===0){
      this._invalidQuantityError();
      return;
    }
    else if(newQuantity > oldQuantity){
      product= Ecommerce.productController.getProduct(this.get('_editingOrder').get('productId'));
        if(parseInt(product.get('quantity')) < (newQuantity-oldQuantity)){
          this._invalidQuantityError( parseInt(product.get('quantity'))+oldQuantity);
          this.get('_editingOrder').set('quantity',oldQuantity);
          return;
        }
        else{
          this._setOrderQuantity(oldQuantity,newQuantity,product);
        }

    }
    else if(newQuantity != oldQuantity){
      product= Ecommerce.productController.getProduct(this.get('_editingOrder').get('productId'));
      this._setOrderQuantity(oldQuantity,newQuantity,product)
    }
   
    SC.getPath('Ecommerce.mainPage.quantityChangePane').remove();
    return YES;
  },
  _setOrderQuantity: function(oldValue,newValue,product){
     var quantityDiff= newValue - oldValue;
     this.get('_editingOrder').set('quantity',newValue);
     product.set("quantity", parseInt(product.get('quantity')) - quantityDiff );
    },
  finaliseOrder:function(){
    var totalAmount = 0;
    var displayDescription = "<div><table><tr><td>"+"_lblProduct".loc()+"</td><td>"+"_lblProductPrice".loc()+"</td><td>"+"_lblProductQuantity".loc()+"</td><td>"+"_lblTotalPrice".loc()+"</td></tr>";
    displayDescription += Ecommerce.orderArrayController.map(function(t) {
                           totalAmount += t.get('quantity')*t.get('price')
                            return "<tr><td>%@</td><td>%@</td><td>%@</td><td>%@</td></tr>".fmt(t.get('name'),t.get('price'),t.get('quantity'),t.get('quantity')*t.get('price')); 
                      }).join('\n');
    displayDescription += "</table></div><div>"+"_lblTotal".loc()+": "+totalAmount+"</div>";

    SC.AlertPane.info({
       message: "_lblOrderDetails".loc(),
      displayDescription: displayDescription,
      buttons: [
        { title: "_btnOk".loc() },
        { title: "_btnCancel".loc()}
      ]
    });
    return YES;
  },
  _invalidQuantityError:function(avialableQuantity){
    var msgDescription="",
     msgCaption=""; 
     if(avialableQuantity > 0 ){
        msgDescription = "_outOfStockDetailedMsg1".loc()+ " "+ avialableQuantity+" "+"_outOfStockDetailedMsg2".loc();
        msgCaption = "_invalidQuantityCaption".loc();
     }
     else {
        msgDescription = "_invalidQuantityMsg".loc();
     }
     
     SC.AlertPane.error({
     description: msgDescription ,
     caption: msgCaption,
     buttons: [
       { title: "_btnOk".loc() }
      ]
   })
  }

}) ;
