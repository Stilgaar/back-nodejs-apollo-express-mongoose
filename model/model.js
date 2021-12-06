// MONGOOSE RESTE LE MEME JE SUPPOSE
// pour le 'cat' la version est bien sur raccourcie, pas d'utilisation de mongoose.Shema

const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String });

module.exports = Cat; 