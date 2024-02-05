export const mockState = {
	users: [
		{
			id: 1,
			name: 'Marko',
			lastName: 'Vitiz',
			email: 'vm233168m@student.etf.bg.ac.rs',
			phone: '061234567891',
			address: 'Bulevar Kralja Aleksandra',
			username: 'vita',
			password: 'vita',
			role: 'user',
			notifications: [],
			orders: [
				{
					userId: 1,
					articles: [
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 2, price: 320 },
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 3, price: 320 },
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 4, price: 320 },
					],
					status: 'pending',
					number: 195,
				},
				{
					userId: 1,
					articles: [
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 2, price: 320 },
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 3, price: 320 },
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 4, price: 320 },
					],
					status: 'pending',
					number: 192,
				},
				{
					userId: 1,
					articles: [
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 2, price: 320 },
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 3, price: 320 },
						{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 4, price: 320 },
					],
					status: 'rejected',
					number: 193,
				},
			],
		},
	],
	promotions: [],
	cakes: [
		{
			id: 1,
			header: 'Cheesecake',
			content: 'Mleko, keks, ostalo....\nnije ni bitno toliko',
			description: 'Neodoljivi kolač od sira još od vremena stare Grčke očarava slatkoljupce širom sveta.',
			imgSrc: 'cheesecake',
			type: 'COOKIE',
			price: '200',
			comments: [],
		},
	],
	orders: [
		{
			userId: 1,
			articles: [
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 2, price: 320 },
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 3, price: 320 },
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 4, price: 320 },
			],
			status: 'pending',
			number: 195,
		},
		{
			userId: 1,
			articles: [
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 2, price: 320 },
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 3, price: 320 },
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 4, price: 320 },
			],
			status: 'pending',
			number: 192,
		},
		{
			userId: 1,
			articles: [
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 2, price: 320 },
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 3, price: 320 },
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 4, price: 320 },
			],
			status: 'rejected',
			number: 193,
		},
		{
			articles: [
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 2, price: 320 },
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 3, price: 320 },
				{ name: 'CIZ KEJK', imgSrc: 'cheesecake', quantity: 4, price: 320 },
			],
			status: 'approved',
			number: 194,
		},
	],
	loggedInUser: 1,
}
