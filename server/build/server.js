'use strict'
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const app = (0, express_1.default)()
// ? the get() method takes as parameters the address the user is accessing (as in from the / of the url onwards) and a function that will be executed when the user accessess the url
app.get('/ads', (req, res) => {
	return res.json([
		{ id: 1, name: 'Anúncio 1' },
		{ id: 2, name: 'Anúncio 2' },
		{ id: 3, name: 'Anúncio 3' },
		{ id: 4, name: 'Anúncio 4' },
		{ id: 5, name: 'Anúncio 5' }
	])
})
app.listen(3000)
