import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private tts: TextToSpeech) {}

  speak(){

  this.tts.speak('En catchana baby tu dead sa')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
    }
}
