import { Component, OnInit } from '@angular/core';
import { Video} from '../../video/video.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-aside-app',
  templateUrl: './aside-app.component.html',
  styleUrls: ['./aside-app.component.css']
})
export class AsideAppComponent implements OnInit {

bottom_video:Video[]= [new Video(1,"Pitbull3",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","LOL","test6","10.08.2017",200000),
new Video(0,"Pitbull4",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","NICE","test6","10.08.2016",800000),
new Video(0,"Pitbull5",'https://www.youtube.com/embed/UWLr2va3hu0?controls=0&rel=0&enablejsapi=1&modestbranding=1&showinfo=0',"test2","test3","test4","LOL","test6","10.08.2017",5000),]

  constructor() { }

  ngOnInit() {
  }

}
