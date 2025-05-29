const card = document.querySelector('.card__inner');

const input = document.querySelector('.input');

const footer = document.querySelector('footer a');

const head = document.querySelector('.head');

const strategies = [

"Add a Breakdown",
"Choose a musical element and create a doubling layer. This could be textural, a line taken up or down an octave, or something to add weight to a bass line or bass drum",
"Remove one element",
"Insert Silence",
"Save the project with a Track Alternative",
"Create a beginning",
"Create an ending",
"Add a tempo change",
"Add a key change",
"Choose an existing musical part, and process it with 'Scale Quantise' from the Piano Roll",
"Use Automation to create a volume fade in or out. ",
"Choose a musical element and create a layer. This could be textural, or something to add weight to a bass line or bass drum",
"Decorate: use a high-pitched percussive or melodic sound to subtly add a decorative part",
"Add a Bridge",
"Punctuate: add a crash cymbal wherever you feel it would be beneficial",
"Copy a MIDI region and double it with a complementary sound",
"Use an arpeggiator MIDI Effect",
"Add a modulation effect to one of the parts. Use either a Chorus, Flanger or Phaser",
"Add reverb to one element",
"Add Auto Filter to one element",
"Convert a melodic element into a rhythmic element",
"Copy a rhythmic element and change to a pitched instrument",
"Add a tape delay effect to at least one element",
"Add a tape delay effect to at least one element",
"Use an arpeggiator MIDI Effect",
"Choose an existing musical part, and process it with 'Scale Quantise' from the Piano Roll",
"Degrade it! Use one (or more) of Bitcrusher, Overdrive or Distortion plugins. Use this on an individual track, bus or the whole mix",
"Use Automation to create a volume fade in or out",
"Use a pitch effect. Add a pitch shift to an individual track",
"Use an amp simulator on a musical element",
"Wild Card: Miss a go!",
"Wild Card: Choose someone else to have a go out of turn",
"Wild Card: Don’t read this out. Add or remove any musical element you like!",
"Wild Card: Think of a name for the track",
"Wild Card: Change Style (Pick up a Style Card)",
"Wild Card: Change Direction",
"Wild Card: Change Tempo",
"Add more reverb!",
"Add an effect of your choosing",
  "Save the project",

    ""
]

//test font size

// const strategies = ["Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)"]

const randomStrat = () => {
  const strat = strategies[Math.floor(Math.random() * strategies.length)];
  input.innerText = strat;
}

card.addEventListener("click", (e) => {
  card.classList.toggle('is-flipped');
  input.classList.toggle('hide');
  randomStrat();
});

setTimeout(function(){
    footer.style.color = "#FDFBF3";
}, 3000)

footer.addEventListener('mouseover', () => {
    footer.style.color = 'black';
})

footer.addEventListener('mouseout', () => {
    footer.style.color = '#FDFBF3';
})


setInterval(function(){
    head.style.opacity -= 0.1;
}, 3000);

