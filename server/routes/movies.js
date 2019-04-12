var fedex = require('express');
var get_router=fedex.Router();
var Movie=require('../models/MovieSchema');

get_router.route('/')
    .get((req,res)=>
{
    Movie.find({},(err,results)=>     //finds all movies
    {
        err? res.send(err):res.send(results);
    });
})
    .post((req,res)=>
{
     Movie.create(req.body,(err,results)=>   //creates movies
     {
         err ? res.send(err): res.send(results)
     })
});












module.exports=get_router;