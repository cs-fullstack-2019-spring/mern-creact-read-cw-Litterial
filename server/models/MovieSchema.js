var zangoose=require('mongoose');
var schema=zangoose.Schema;
var movieModel=new schema(
    {
        //model schema for movies
        movie_name:
            {
                type:String,
                required:true,
            },
        movie_genre: {
            type:String,
            required:true,
        },
        actors:{
            main_actor:String,
            main_actriss:String,
            support_actor:String,
            support_actriss:String
        }

    });






module.exports=zangoose.model('Big Movie',movieModel);