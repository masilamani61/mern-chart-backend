const express=require('express')
const router=express.Router()
const chart=require('./model')
const socketio=require('socket.io')
const app=express()
const http=require('http')
const server=http.createServer(app)
const io=socketio(server)

router.get('/get',async(req,res)=>{
    try{
        const ans=await chart.findById('64b91bb90c8ef7fffdccedce')
        res.send(ans)

    }
    catch(err){
        res.send(err)
    }
})

router.put('/add',async(req,res)=>{

    const dvalue=req.body.data
    const group=req.body.group
    console.log(dvalue,group)
    try{
    const ans=await chart.findById('64b91bb90c8ef7fffdccedce')
    
    if (ans){
        if (group=='mpc'){
        ans.mpc.data.push(dvalue)
    

        await ans.save()
        }
        else if (group=='mec'){
            
        ans.mec.data.push(dvalue)
        ans.save()
        }
        else if (group=='bipc'){
            ans.bipc.data.push(dvalue)
            ans.save()
        }
    }
    res.send(ans)
}
catch(err){
    console.log(err)
}
})
router.delete('/delete/:id',async(req,res)=>{
    const id=req.params
    try{
        await chart.findByIdAndDelete(id)
        res.send('deleted')
    }
    catch{}
})

module.exports=router