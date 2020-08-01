
const synth = new Tone.Synth().toDestination();

const data = [
  { note: "F#4", dur: "4n" },
  { note: "D4", dur: "4n" },
  { note: "A3", dur: "4n" },
  { note: "D4", dur: "4n" },
  { note: "E4", dur: "4n" },
  { note: "A4", dur: "8n" },
  { note: "A4", dur: "4n" },
  null,
  { note: "E4", dur: "4n" },
  { note: "F#4", dur: "4n" },
  { note: "E4", dur: "4n" },
  { note: "A3", dur: "4n" },
  { note: "D4", dur: "8n" },
];

const seq = new Tone.Sequence((time, { note, dur }) => {
  synth.triggerAttackRelease(note, dur, time);
}, data, "4n").start(0);
seq.loop = false;

document.getElementById("playButton").addEventListener('click', async () => {
  await Tone.start()
  Tone.Transport.start();

  document.getElementById("playButton").setAttribute("disabled", true);
});