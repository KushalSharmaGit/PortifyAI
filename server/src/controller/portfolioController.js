const asyncHandler = require("express-async-handler");
const Portfolio = require("../model/Portfolio");
const Domain = require("../model/Domain");

const createPortfolio = asyncHandler ( async (req, res) => {
    const { title, description, name, role, bio, email, phone, location, website, twitter, github, linkedin, approch, skills, interests, experience, education, projects } = req.body;
    const userId = req.user.id;
    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }
    const existingPortfolio = await Portfolio.findOne({ email: req.body.email });

    if (existingPortfolio) {
    return res.status(400).json({ message: "You can only create one Portfolio" });
    }
    const portfolio = await Portfolio.create({ userId, title, description, name, role, bio, email, phone, location, website, twitter, github, linkedin, approch, skills, interests, experience, education, projects });
    if(portfolio){
        res.status(201).json({"message": "Portfolio created successfully"});
    } else {
        res.status(400).json({"message":"Error Creating Portfolio"});
    }
})

const viewPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findById(req.params.id).lean();; 
        res.status(200).json({"portfolio": portfolio});
    } catch (error) {
        console.error("Error fetching portfolio:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const viewDashboard = async (req, res) => {
    try {
        const userId = req.user.id;
        const portfolio = await Portfolio.find({ userId }).select('_id title').lean(); 
        res.status(200).json({"portfolios": portfolio});
    } catch (error) {
        console.error("Error fetching portfolio:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const addDomain = asyncHandler(async (req, res) => {
    const { domain } = req.body;
    console.log(req.body);
    const portfolioId = req.params.id;
    console.log(portfolioId);
    if (!domain || !portfolioId) {
        return res.status(400).json({
            message: "Domain name are required"
        });
    }
    const existingDomain = await Domain.findOne({portfolioId});

    if (existingDomain) {
    return res.status(400).json({ message: "You can only register one domain" });
    }
    const domain_name = await Domain.create({ domain, portfolioId });
    if(domain_name){
        res.status(201).json({"message": "Domain name registered successfully"});
    } else {
        res.status(400).json({"message":"Error registring domain name"});
    }

});

const getDomain = async (req, res) => {
    const domain = req.params.id;
    const portfolioId = await Domain.findOne({domain}).select('portfolioId').lean();
    if(!portfolioId){
        res.status(400)
    }
    console.log(portfolioId);
    res.status(200).json(portfolioId);
}


module.exports = { createPortfolio, viewPortfolio, viewDashboard, addDomain, getDomain };