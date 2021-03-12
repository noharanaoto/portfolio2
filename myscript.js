let HslPick = {
  template:`
  <div class="hsl">
  <div class="hslpanel" :style="{ backgroundColor: panelHSL}"></div>

  <div class="hsltext">
    <label class="huename" for="hueBar">色相</label>
    <label class="hueval" for="hueBar">{{ hueIn }}</label>
  </div>
  <input id="hueBar" class="hueBar" type="range" min="0" max="360" step="1" v-model="hueIn" />

  <div class="hsltext">
    <label class="saturationname" for="saturationBar">彩度</label>
    <label class="saturationval" for="saturationBar">{{ saturationIn }}</label>
  </div>
  <input id="saturationBar" type="range" min="0" max="100" step="1" 
  v-model="saturationIn" :style="{ background: saturationHSL}" />

  <div class="hsltext">
    <label class="lightnessname" for="lightnessBar">明度</label>
    <label class="lightnessval" for="lightnessBar">{{ lightnessIn }}</label>
  </div>
  <input id="lightnessBar" type="range" min="0" max="100" step="1" 
  v-model="lightnessIn" :style="{ background: lightnessHSL}" />
</div>
  `,
  data: function(){
    return{
      hueIn: 100,
      saturationIn: 50,
      lightnessIn: 50
    }
  },
  computed: {
    panelHSL: function(){
        return `hsl(${this.hueIn}, ${this.saturationIn}%, ${this.lightnessIn}%)`;
      },
    saturationHSL: function(){
        return `linear-gradient(to right,`+`hsl(${this.hueIn}, 0%, 50%)`+`,`+`hsl(${this.hueIn}, 100%, 50%)`+`)`;
    },
    lightnessHSL: function(){
      return `linear-gradient(to right,`
      +`hsl(${this.hueIn}, 100%, 0%)`+`,`+`hsl(${this.hueIn}, 100%, 50%)`+`,`+`hsl(${this.hueIn}, 100%, 100%)`+`)`;
    },
  },
}

let RgbPick = {
  template:`
  <div class="rgb">
  <div class="rgbpanel" :style="{backgroundColor: panelColor}">
    <div class="colorCode"><p>{{ colorCode }}</p></div>
  </div>
  <div class="rgbtext">
    <label for="red">red</label>
    <label for="red">{{ red }}</label>
  </div>
  <input id="red" type="range" min="0" max="255" v-model="red" :style="{background: redBar}">

  <div class="rgbtext">
    <label for="green">green</label>
    <label for="green">{{ green }}</label>
  </div>
  <input id="green" type="range" min="0" max="255" v-model="green" :style="{background: greenBar}">
  
  <div class="rgbtext">
    <label for="blue">blue</label>
    <label for="blue">{{ blue }}</label>
  </div>
  <input id="blue" type="range" min="0" max="255" v-model="blue" :style="{background: blueBar}">
  </div>
  `,
  data: function(){
    return{
      red: 100,
      green: 100,
      blue: 100
    }
  },
  computed: {
    panelColor: function() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
    colorCode: function() {
      let r = Number(this.red).toString(16).toUpperCase();
      let g = Number(this.green).toString(16).toUpperCase();
      let b = Number(this.blue).toString(16).toUpperCase();
      return '#'+r+g+b;
    },
    redBar: function() {
      let percent = this.red*100/255;
      return `linear-gradient(to right,red `+ percent +`%,#fff `+ percent +`%)`;
    },
    greenBar: function() {
      let percent = this.green*100/255;
      return `linear-gradient(to right,green `+ percent +`%,#fff `+ percent +`%)`;
    },
    blueBar: function() {
      let percent = this.blue*100/255;
      return `linear-gradient(to right,blue `+ percent +`%,#fff `+ percent +`%)`;
    },
  },
}

let all = new Vue({
    el: '#all',
    components: {
      'hsl-pick': HslPick,
      'rgb-pick': RgbPick
    },
    data: {
      ActiveBtn: false,
      isActive: 'D',
    },
    methods: {
        change: function(num){
          this.isActive = num
        }
    },
  })
