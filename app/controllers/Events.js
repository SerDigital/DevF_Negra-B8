const {
    reportEvent
} = require("../actions");


const createEvent = (req, res) => {

    // Tiene como funcionalidad validar la estructura del post.

    reportEvent(req.body).then((event) => {
        res.status(201).json(event);
    }).catch(e=> res.status(400).json(e));


//  req.body.author = req.user._id;
// 	createPost(req.body).then((post) => {
// 		addPostToUser(req.user._id, post._id).then(() => {
// 			res.status(201).json(post);
// 		}).catch(e => res.status(400).json(e));
// 	}).catch(e => res.status(400).json(e));
// };
    
}

module.exports() = {
    createEvent
    
};