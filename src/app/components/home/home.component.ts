import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  videos:any[] = [];
  videoSel:any;

  constructor( public _yotubeService:YoutubeService) { 

    this._yotubeService.getVideos()
        .subscribe( videos => {
            this.videos = videos;
        });
  }

  ngOnInit() {
  }

  verVideo ( video:any ) {
    this.videoSel = video;
    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoSel = null;
    $('#exampleModal').modal('hide');
  }

  cargarMas() {
    this._yotubeService.getVideos()
        .subscribe( videos => {
            this.videos.push.apply( this.videos, videos );
        });
  }

}
