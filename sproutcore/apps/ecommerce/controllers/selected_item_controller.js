  // ==========================================================================
  // Project:   Ecommerce.selectedItemController
  // Copyright: @2012 My Company, Inc.
  // ==========================================================================
  /*globals Ecommerce */

  /** @class

    (Document Your Controller Here)

    @extends SC.ObjectController
    */
    Ecommerce.selectedItemController = SC.ObjectController.create({
      /** @scope Ecommerce.selectedItemController.prototype */ 

      contentBinding: SC.Binding.single('Ecommerce.categoryController.selection'),
      subhash:function(){
        var record = this.get("content");
        if(record.isProduct) {
            Ecommerce.getPath('mainPage.detailPane').append();
        }		
        return YES;
      },
      orderProduct:function(){
        var record ,order,quantity;
        record = this.get("content");
        quantity=1;
        if(record.isProduct){
          if(parseInt(record.get("quantity")) ===0){
            SC.AlertPane.error({
              description: "_outOfStockMsg".loc() ,
              buttons: [
              { title: "_btnOk".loc() }
              ]
            })
          }
          else{
            Ecommerce.getPath('mainPage.detailPane').remove();
            order = Ecommerce.orderArrayController.getOrderByProduct(parseInt(record.get('guid')));
            if(order){ 
              quantity = parseInt(order.get('quantity'));      
              order.set("quantity",quantity+1);             
            }
            else{
              Ecommerce.store.createRecord(Ecommerce.Order, {
                "name": record.get("name"),
                "description": record.get("description"),
                "price": record.get("price"),
                "productId": record.get('guid'),
                "orderId": SC.DateTime.create(),
                "quantity": quantity
              });
            }
            record.set('quantity',parseInt(record.get('quantity'))-1 );
          }
        }		
        return YES;
      },
      cancelProduct:function(){
        Ecommerce.getPath('mainPage.detailPane').remove();	         
        return YES;
      }		  

    }) ;
