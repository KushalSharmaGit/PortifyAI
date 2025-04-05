const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
  portfolioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio', required: true },
  domain: { type: String, default: "" },
}, { timestamps: true });

const Domain = mongoose.model('Domain', DomainSchema);

module.exports = Domain;
