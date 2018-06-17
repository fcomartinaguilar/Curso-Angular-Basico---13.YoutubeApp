import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutebe'
})
export class VideoYoutebePipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform(value: string): any {

    let url  = "https://youtube.com/embed/";

    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value);
  }

}


