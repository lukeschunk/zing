//
var synthNoSidechain = new Tone.Player("./loops/synth-pad-naked.mp3").toMaster();
synthNoSidechain.loop = true;

var synth = new Tone.Player("./loops/synth-pad.mp3").toMaster();
synth.loop = true;

var kick = new Tone.Player("./loops/kick.mp3").toMaster();
kick.loop = true;
var drums = new Tone.Player("./loops/drums.mp3").toMaster();
drums.loop = true;

var bass = new Tone.Player("./loops/bass.mp3").toMaster();
bass.loop = true;

var rain = new Tone.Player("./loops/rain.mp3").toMaster();
rain.loop = true;

Tone.Buffer.on('load', function(){
    // synthNoSidechain.start();
    // synth.start();
    // kick.start();
    // drums.start();
    // rain.start();
    // bass.start();
})
