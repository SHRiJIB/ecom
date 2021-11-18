const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

const signin = async (req, res) => {
	const { email, password } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(400).json({ message: 'User does not exists.' });
		}
		const isCorrectPassword = await bcrypt.compare(password, existingUser.password);
		if (!isCorrectPassword) {
			return res.status(400).json({ message: 'Password is not correct.' });
		}

		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			process.env.SECRET,
			{ expiresIn: '1h' }
		);
		res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong.' });
	}
};
const signup = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User with this email already exists.' });
		}
		const hashedPassword = await bcrypt.hash(password, 12);
		const user = new User({
			name: `${firstName} ${lastName}`,
			email,
			password: hashedPassword,
		});
		await user.save();
		const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET, {
			expiresIn: '1h',
		});
		res.status(200).json({ result: user, token });
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong.' });
	}
};

module.exports = { signin, signup };
