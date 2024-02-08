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
			notifications: [
				{ text: 'Admin je prihvatio vasu porudzbinu 5.', seen: true },
				{ text: 'Admin je odbio vasu porudzbinu 6.', seen: true },
				{ text: 'Admin je prihvatio vasu porudzbinu 4.', seen: true },
				{ text: 'Admin je prihvatio vasu porudzbinu 1.', seen: true },
				{ text: 'Admin je odbio vasu porudzbinu 2.', seen: true },
				{ text: 'Admin je prihvatio vasu porudzbinu 3.', seen: true },
			],
			orders: [
				{
					userId: 1,
					articles: [
						{ name: 'Coko torta', imgSrc: 'choco', quantity: 12, price: '1230' },
						{ name: 'Plazmalina', imgSrc: 'strawberry', quantity: 1, price: '700' },
						{ name: 'Švarcvald', imgSrc: 'svarcvald', quantity: 1, price: '1450' },
						{ name: 'Cheesecake', imgSrc: 'cheesecake', quantity: 3, price: '500' },
					],
					status: 'rejected',
					number: 6,
				},
				{
					userId: 1,
					articles: [
						{ name: 'Coko torta', imgSrc: 'choco', quantity: 1, price: '1230' },
						{ name: 'Švarcvald', imgSrc: 'svarcvald', quantity: 2, price: '1450' },
						{ name: 'Voćna Šeherezada', imgSrc: 'strawberry', quantity: 1, price: '556' },
						{ name: 'Cheesecake', imgSrc: 'cheesecake', quantity: 3, price: '500' },
						{ name: 'Jastuk kolač', imgSrc: 'jastuk', quantity: 2, price: '400' },
					],
					status: 'approved',
					number: 5,
				},
				{
					userId: 1,
					articles: [
						{ name: 'Coko torta', imgSrc: 'choco', quantity: 1, price: '1230' },
						{ name: 'Plazmalina', imgSrc: 'strawberry', quantity: 1, price: '700' },
					],
					status: 'approved',
					number: 4,
				},
				{
					userId: 1,
					articles: [{ name: 'Jastuk kolač', imgSrc: 'jastuk', quantity: 77, price: '400' }],
					status: 'approved',
					number: 3,
				},
				{
					userId: 1,
					articles: [
						{ name: 'Švarcvald', imgSrc: 'svarcvald', quantity: 1, price: '1450' },
						{ name: 'Coko torta', imgSrc: 'choco', quantity: 2, price: '1230' },
					],
					status: 'rejected',
					number: 2,
				},
				{
					userId: 1,
					articles: [
						{ name: 'Coko torta', imgSrc: 'choco', quantity: 1, price: '1230' },
						{ name: 'Plazmalina', imgSrc: 'strawberry', quantity: 1, price: '700' },
						{ name: 'Jastuk kolač', imgSrc: 'jastuk', quantity: 5, price: '400' },
					],
					status: 'approved',
					number: 1,
				},
			],
		},
		{
			id: 2,
			name: 'Marko',
			lastName: 'Vitiz',
			email: 'vm233168m@student.etf.bg.ac.rs',
			phone: '061234567891',
			address: 'Bulevar Kralja Aleksandra',
			username: 'manager',
			password: 'manager',
			role: 'manager',
			notifications: [],
			orders: [],
		},
	],
	promotions: [],
	cakes: [
		{
			header: 'Coko torta',
			content: 'mleko\njaja\nsecer\nskrob\nkako\ncokolada\nmaslac',
			description:
				'Jedna predivna velika i bogata torta od čokolade i malina. \n\nIzvanredna kombinacija mekih kako korica sa lešnikom, čokoladnog krema i želea od malina koji osvežava samu kombinaciju i čini tortu laganijom. \n\nOdlična torta za svaku priliku, posebno rodjendane jer je velika, visoka i bogata kremom.',
			imgSrc: 'choco',
			type: 'CAKE',
			price: '1230',
			id: 1707340316484,
			comments: [
				{ date: '2024-02-08T10:33:13.440Z', comment: 'novi komentar!', user: 'Marko' },
				{ date: '2024-02-07T21:44:19.642Z', comment: 'Sjajna torta', user: 'Marko' },
			],
		},
		{
			header: 'Plazmalina',
			content: '200 gr kisele pavlake\n200 ml slatke pavlake\n150 gr mlevenog plazma keksa\n100 ml mleka',
			description:
				'Plazmalina je naša najtraženija torta.\n\nJedinstsvena kombinacija korica od belanaca, dva fila sa plazma keksom i maline. Čvrsta i bogata torta, iako ima maline može da ide pod fondan.',
			imgSrc: 'strawberry',
			type: 'CAKE',
			price: '700',
			id: 1707340862850,
			comments: [],
		},
		{
			header: 'Švarcvald',
			content: '7 jaja\n7 kašika šećera\n7 kašika brašna\n50 ml ulja\n3 kašike kakaoa\n5 gr praška za pecivo',
			description: 'Izvanredna kombinacija višanja i čokolade uz kakao korice, sve obogaćeno slatkom pavlakom.',
			imgSrc: 'svarcvald',
			type: 'CAKE',
			price: '1450',
			id: 1707341168359,
			comments: [],
		},
		{
			header: 'Voćna Šeherezada',
			content:
				'1l mleka\n3 pudinga od vanile\n5 kašika kristal šećera\n150 gr margarina ili maslaca\n100 gr šećera u prahu\n500 gr slatke pavlake\n600 gr malina ili voća po izboru\n1 pakovanje turskog keksa',
			description:
				'Originalnu Šeherezadu smo malo prepravili da bi dobili fantastični letnju ukus koji osvežava, a pri tom nismo uložili mnogo vremena i “kuvanja” na visokim letnjim temperaturama pa zato umesto letnja Šeherezada može da nosi naziv i letnja. \n\nVoće može da bude po izboru, mi smo ovaj put iskombinovali maline jer nam one daju kiselkastu osvežavajuću notu.',
			imgSrc: 'strawberry',
			type: 'CAKE',
			price: '556',
			id: 1707341462323,
			comments: [],
		},
		{
			header: 'Jastuk kolač',
			content:
				'4 žumanca\n4 kašike šećera\n100 ml mleka\n100 ml ulja\n180 g brašna ili 8 punih kašika\n2 pune kašike kakaa',
			description:
				'Mek, sočan, ne mnogo skup kolač, koji se brzo i lako pravi. Ukus je kombinacija kakao biskvita i nadeva od sira koji se peku zajedno. \n\nJa pripadam ne ljubiteljima sira u slatkim kombinacijama, ali u ovoj je on odlično uklopljen u ostatak kolača i da ne znate da se sir nikada ne biste ni rekli da ga ima.',
			imgSrc: 'jastuk',
			type: 'COOKIE',
			price: '400',
			id: 1707341774745,
			comments: [{ date: '2024-02-07T22:44:16.784Z', comment: 'Jako ukusno!', user: 'Marko' }],
		},
		{
			header: 'Cheesecake',
			content: '400 gr krem sira – bilo koji neslani\n100 gr šećera u prahu\n500 ml slatke pavlake',
			description:
				'Majska poslastica, cheesecake sa jagodama! Stvarno mi je žao što jagode ne traju cele godine, pa da uživamo u njima, a ne samo nekoliko nedelja. \n\nŠta je, tu je, iskoristimo ih maksimalno dok su ovako sveže i preukusne. Blago kiselkasti ukus želea od jagoda osvežava ovu kombinaciju kore od keksa i  belog dela, od sira i slatke pavlake.',
			imgSrc: 'cheesecake',
			type: 'COOKIE',
			price: '500',
			id: 1707342449310,
			comments: [],
		},
		{
			header: 'Cupavci',
			content:
				'3 jaja\n10 jušnih žlica kristal šećera (220 g)\n13 jušnih žlica ulja (180 ml)\n16 jušnih žlica brašna (300 g)\n100 ml mlijeka',
			description: 'Starincki Cupavci sa kokosom i cokoladom: Biskvit mekan kao duša',
			imgSrc: 'jastuk',
			type: 'COOKIE',
			price: '700',
			id: 1707388645371,
			comments: [],
		},
	],
	orders: [
		{
			userId: 1,
			articles: [
				{ name: 'Coko torta', imgSrc: 'choco', quantity: 12, price: '1230' },
				{ name: 'Plazmalina', imgSrc: 'strawberry', quantity: 1, price: '700' },
				{ name: 'Švarcvald', imgSrc: 'svarcvald', quantity: 1, price: '1450' },
				{ name: 'Cheesecake', imgSrc: 'cheesecake', quantity: 3, price: '500' },
			],
			status: 'rejected',
			number: 6,
		},
		{
			userId: 1,
			articles: [
				{ name: 'Coko torta', imgSrc: 'choco', quantity: 1, price: '1230' },
				{ name: 'Švarcvald', imgSrc: 'svarcvald', quantity: 2, price: '1450' },
				{ name: 'Voćna Šeherezada', imgSrc: 'strawberry', quantity: 1, price: '556' },
				{ name: 'Cheesecake', imgSrc: 'cheesecake', quantity: 3, price: '500' },
				{ name: 'Jastuk kolač', imgSrc: 'jastuk', quantity: 2, price: '400' },
			],
			status: 'approved',
			number: 5,
		},
		{
			userId: 1,
			articles: [
				{ name: 'Coko torta', imgSrc: 'choco', quantity: 1, price: '1230' },
				{ name: 'Plazmalina', imgSrc: 'strawberry', quantity: 1, price: '700' },
			],
			status: 'approved',
			number: 4,
		},
		{
			userId: 1,
			articles: [{ name: 'Jastuk kolač', imgSrc: 'jastuk', quantity: 77, price: '400' }],
			status: 'approved',
			number: 3,
		},
		{
			userId: 1,
			articles: [
				{ name: 'Švarcvald', imgSrc: 'svarcvald', quantity: 1, price: '1450' },
				{ name: 'Coko torta', imgSrc: 'choco', quantity: 2, price: '1230' },
			],
			status: 'rejected',
			number: 2,
		},
		{
			userId: 1,
			articles: [
				{ name: 'Coko torta', imgSrc: 'choco', quantity: 1, price: '1230' },
				{ name: 'Plazmalina', imgSrc: 'strawberry', quantity: 1, price: '700' },
				{ name: 'Jastuk kolač', imgSrc: 'jastuk', quantity: 5, price: '400' },
			],
			status: 'approved',
			number: 1,
		},
	],
	loggedInUser: 2,
}
