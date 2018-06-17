import { Injectable, Pipe } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http, URLSearchParams } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  youtubeURL:string = "https://www.googleapis.com/youtube/v3";
  apikey:string = "AIzaSyDTTGmUQuldSAEL9d-KxXNW7ueZgkYp3kw";
  //Esto es del profesor, yo no tengo lista para sacar esto
  otro:string = "UCuaPTYj15JSkETGnEseaFFg";
  uploads:string = "UUuaPTYj15JSkETGnEseaFFg";
  nextPageToken:string = "";

  constructor( public http:Http) { }

  getVideos() {
    
    let url = `${ this.youtubeURL }/playlistItems`;
    let params = new URLSearchParams();

    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.uploads);
    params.set('key', this.apikey);

    if (this.nextPageToken) {
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get( url, {search: params} )
          .pipe(map( res => {
            this.nextPageToken = res.json().nextPageToken;
            let videos:any[]=[];
            for (let video of res.json().items) {
              let snippet = video.snippet;
              videos.push (snippet);
            }
            return videos;
          }))
  } 
}
