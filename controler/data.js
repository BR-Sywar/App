const data = require ("../model/data")



exports.data = async (req,res) => {

   
    
     try{

        const data = await data.find({}).sort({createdAt:-1});

        console.log(data);

     
        res.status(200).json({message:" data" , response : data})


     }
     catch (error) {
        res.status(400).json(error)
        console.log(error);
    }

  
    }

