const monggose=require('mongoose')

const cahrtsschema=new monggose.Schema({
    mpc:{
        data:[{
            type:Number
        }]
    },
    bipc:{
        data:[{
            type:Number
        }]
    },
    mec:{
        data:[{
            type:Number
        }]
    },
     
})
  
   

const chartmodel=monggose.model('chartmodel',cahrtsschema)
module.exports=chartmodel