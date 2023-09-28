import User from '../models/User.js';

export const getUser = async (req, res) => {
	try {
		const username = req.params.username;

		const user = await User.find({ username: username }); //Returns as an array

		if (!user.length) {
			// throw new Error('User not found');
			res.send('user not found');
		} else {
			res.status(200).json(...user);
		}
	} catch (error) {
		res.status(404).send('User not found');
	}
};

export const getUserByFirebaseUID = async (req, res) => {
	

	try {
		const firebaseUID = req.query.firebaseUID
		
		const user = await User.find({ firebaseUID: firebaseUID });

		if (!user.length) {
			// throw new Error('User not found');
			res.send('user not found');
		} else {
			res.status(200).json(...user);
		}

	} catch (error) {
		res.status(404).send('User not found');
	}
}

// export const getAllUsers = async (req, res) => {
// 	try {
// 		const allUsers = await User.find();

// 		res.status(200).json(allUsers);
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// };

export const createUser = async (req, res) => {
   
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            firebaseUID: req.body.firebaseUID
        });

       await user.save();

       res.send(user)


    } catch (error) {
        console.log(error);
    }
};
