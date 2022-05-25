const {Router}= require('express')
const router= Router();

router.get('/', async(req,res)=>{
// const info= await axios.get(/)
res.send('activity')
})
module.exports =router;