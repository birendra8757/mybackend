let axios = require("axios")
let getmemes = async function (req, res) {
        try {
            let options = {
                method: 'get',
                url: 'https://api.imgflip.com/get_memes'
            }
            let result = await axios(options);
            // let data = result.data
            res.status(200).send({ msg: result.data })
        }
        catch (err) {
            // console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }



    
    const memecreate = async function (req, res) {
        try {
          let template = req.query.template_id;
          let text = req.query.text0;
          let text1 = req.query.text1;
          let meme = await axios.post(
            `https://api.imgflip.com/caption_image?template_id=${template}&text0=${text}&text1=${text1}&username=chewie12345&password=meme@123`
          );
          res.status(200).send(meme.data)
        } catch (err) {
          res.status(500).send(err);
        }
      };
    
      module.exports.memecreate=memecreate;
    module.exports.getmemes=getmemes;

    