import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Component } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private tts: TextToSpeech, private clipboard: Clipboard) {}

  public textToSpeak: string =
    "Oh Djadja y'a pas moyen Djaja, en catchana baby tu dead ça";
  public speed: number = 1;
  public lang = 'fr-Fr';
  speak() {
    console.log('speed', this.speed, this.textToSpeak);
    this.tts
      .speak({
        text: this.textToSpeak,
        locale: this.lang,
        rate: this.speed,
      })
      .then(() => console.log('speed', this.speed, this.textToSpeak))
      .catch((reason: any) => console.log(reason));
  }

  shutUp(){
    this.tts
      .speak('');
  }

  clip() {
    this.clipboard.copy('Hello djaja');

    this.clipboard.paste().then(
      (resolve: string) => {
        this.textToSpeak = resolve;
        console.log("resolve", this.textToSpeak);
      },
      (reject: string) => {
        alert('Clipboard Error: ' + reject);
      }
    );
  }


}
