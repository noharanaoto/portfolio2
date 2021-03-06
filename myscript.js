let all = new Vue({
    el: '#all',
    // el: '#hsl',
    data: {
      ActiveBtn: false,
      isActive: 'C',
      hueIn: 100,
      saturationIn: 50,
      lightnessIn: 50,
      red: 100,
      green: 100,
      blue: 100
    },
    methods: {
        change: function(num){
          this.isActive = num
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
      panelColor: function() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`;
      },
      colorCode: function() {
        let r = Number(this.red).toString(16).toUpperCase();
        let g = Number(this.green).toString(16).toUpperCase();
        let b = Number(this.blue).toString(16).toUpperCase();
        return '#'+r+g+b;
      }
    }
  })
