const express = require('express')
const router = express.Router()
const data = {imgURL:'/img/background/home.jpg', title:'Galatasaray', subTitle:`İlklerin ve Enlerin Takımı`}
const {join} = require('path');
const Contents = require(join(__dirname, '..', 'model', 'content.js'))


router.get('/', async(req, res)=>{
   let contents = await Contents.find();
   contents = contents.reverse()
   res.render('site/index', {
      headerData:data,
      contents: contents.map(item=>item.toJSON())
   })
})
   

module.exports = router