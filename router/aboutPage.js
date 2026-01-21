const express = require('express')
const router = express.Router()
const data = {imgURL:'/img/background/about.jpg', title:'Galatasaray', subTitle:`Şanlı Tarihimiz`}


router.get('/', (req, res)=>{
   res.render('site/about', {
      headerData:data
   })
})



module.exports = router