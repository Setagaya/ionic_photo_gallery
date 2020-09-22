import { Component } from '@angular/core';

//// 20200921 Added Start
import { PhotoService } from '../services/photo.service';
//// 20200921 Added End

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //// 20200921 Added Start
  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  //// 20200921 Added End

}
