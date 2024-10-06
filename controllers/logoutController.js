const User = require('../model/User');
 
const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies; 
    if (!cookies?.jwt) {
        console.log('no cookies jwt') //todo rem
        return res.sendStatus(204) // No content 
        }
     const refreshToken = cookies.jwt;

    // is refreshToken in db?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true });
        console.log('User not found')
        return res.sendStatus(204); // No content
    }
    
    // Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save(); // store back to mongoDB
    console.log(result); // todo remove in production 

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true }); // secure: true - only serves on https
    res.sendStatus(204);
}

module.exports = { handleLogout };