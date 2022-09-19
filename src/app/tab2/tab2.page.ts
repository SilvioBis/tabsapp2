import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pedidos',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Pizza',
        role: 'destructive',
        icon: 'pizza-outline',
        data: {        
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Bebida',
        icon: 'beer-outline',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}


