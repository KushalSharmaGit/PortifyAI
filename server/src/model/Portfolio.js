const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  name: { type: String, required: true },
  role: { type: String, default: "" },
  bio: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  phone: { type: String, default: "" },
  location: { type: String, default: "" },
  website: { type: String, default: "" },
  twitter: { type: String, default: "" },
  github: { type: String, default: "" },
  linkedin: { type: String, default: "" },
  approch: { type: String, default: "" },
  skills: { type: [String], default: [] },
  interests: { type: [String], default: [] },
  experience: [{
    company: String,
    position: String,
    location: String,
    startDate: Date,
    endDate: Date,
    description: String
  }],
  education: [{
    institution: String,
    degree: String,
    field: String,
    startDate: Date,
    endDate: Date,
    description: String
  }],
  projects: [{
    title: String,
    link: String,
    technologies: String,
    description:String,
  }]
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
