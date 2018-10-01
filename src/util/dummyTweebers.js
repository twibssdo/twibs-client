import Tweeber from './tweeber';

const tweebers = [];
for (let i = 0; i < 20; i++) {
  tweebers.push(new Tweeber(i));
  tweebers[i].setName('Jane', 'Doe');
}

tweebers[0].setName('Colin', 'McCarthy');
tweebers[1].setName('Will', 'Adamowicz');
tweebers[2].setName('Christopher', 'Washburn');
tweebers[3].setName('Shen-shen', 'Wu');

module.exports = tweebers;