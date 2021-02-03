import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit{
  constructor(private tts: TextToSpeech, private clipboard: Clipboard, private storage: Storage) {



  }

  public textToSpeak: string =
    "Oh Djadja y'a pas moyen Djaja, en catchana baby tu dead ça";
  public speed: number;
  public lang: any;
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

  shutUp() {
    this.tts.speak('');
  }

  clip() {
    this.clipboard.copy('Hello djaja');

    this.clipboard.paste().then(
      (resolve: string) => {
        this.textToSpeak = resolve;
        console.log('resolve', this.textToSpeak);
      },
      (reject: string) => {
        alert('Clipboard Error: ' + reject);
      }
    );
  }

  setLang(){
    this.storage.set('lang', this.lang);

  }

  setSpeed(){
    this.storage.set('speed', this.speed);
    console.log("speed", this.speed);
  }

  async getParams(){
    const speed = await this.storage.get("speed");
    this.speed = speed ?? 1;
    const lang = await this.storage.get("lang");
    this.lang = lang ?? 'fr-FR';
  }
  ngOnInit(): void {
    this.getParams();
  }
}
