
    const { Where } = require("sequelize/types/utils");
const { User } = require("../DB_connection");

 const postUser = async (req, res) => {
    try {
    const { email, password } = req.body;

    if (email && password) {
       
            const [alreadycreated,newlyCreated] = await User.findOrCreate({where:{ email: email, password: password }});
            res.status(201).json(user);
       
    } else {
        res.status(400).json({ error: "Faltan datos" });
    }

} catch (error) {
    res.status(500).json({ error: error.message });
}
};

module.exports = postUser
