const express = require('express');
const cors = require('cors');
const app = express();
const urlModel = require("./models/URL");
const shortId = require('shortId')
var validUrl = require('valid-url')

const mongoose = require('mongoose');
mongoose.connect(
    "mongodb+srv://newuser:ArbelPass@url.golxp.mongodb.net/?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);

app.use(express.json());
app.use(cors());

app.post("/generate", async (req, res) => {
    const urlId = shortId.generate();
    var url = req.body.originalUrl;

    if (validUrl.isUri(url)){
        try {
            res.send(urlId)
        }catch (err) {
            console.log(err)
        }
    } 
    else {
        res.send("Not a valid url - try again")
    }
});

app.post("/insert", async (req, res) => {
    let url = await urlModel.create({
        originalUrl: req.body.originalUrl,
        shortUrl: req.body.shortUrl
    });

    try {
        await url.save()
        res.redirect('/')
    }catch (err) {
        console.log(err)
    }
});

app.get("/read", async (req, res) => {
    urlModel.find({}, (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/:route", async (req, res) => {
    try {
        const url = await urlModel.findOne({shortUrl: req.params.route})
        if(url) {
            url.clicks++
            url.save()
            return res.redirect(url.originalUrl);
        } else {
            return res.status(404).json('No url found')
        }
    } catch(err) {
        res.status(500).json('Server error');
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;    
    await urlModel.findByIdAndRemove(id).exec();
});

app.listen(5000, () => {
    console.log('server running on port 5000')
}); 