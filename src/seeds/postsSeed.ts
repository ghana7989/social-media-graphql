import {Prisma, PrismaClient} from '@prisma/client';
const posts = [
	{
		title: 'Post 1',
		content:
			'Nulla do nulla labore consequat ut aute aliquip est. Qui officia et aliqua cillum aliqua. Dolor dolor laborum nulla sint aliqua magna duis deserunt quis laboris fugiat qui ipsum nulla. Ea occaecat anim Lorem dolor ea ad elit nulla in tempor labore et quis. Nulla id voluptate anim sunt Lorem.',
	},
	{
		title: 'Post 2',
		content:
			'Nostrud elit laborum amet Lorem id aliqua nostrud cupidatat laborum eu. Eiusmod reprehenderit quis cupidatat ea quis qui proident id. Fugiat eu cillum fugiat aliquip ut ipsum ullamco ex et ad magna irure aute. Dolor ea quis commodo ex aliqua amet occaecat quis laborum veniam. Officia ea incididunt ex nisi velit ad voluptate quis magna id.',
	},
	{
		title: 'Post 3',
		content:
			'Duis labore exercitation esse officia commodo quis quis sunt laborum et occaecat non. Reprehenderit dolore do excepteur proident nulla anim qui do esse culpa sint veniam quis aliquip. Aute deserunt aliquip mollit consectetur velit. Nostrud adipisicing nisi qui fugiat incididunt cupidatat elit est ullamco eu sit voluptate ut.',
	},
	{
		title: 'Post 4',
		content:
			'Et dolor quis cupidatat culpa officia aute exercitation occaecat minim pariatur commodo laborum veniam magna. Ea pariatur minim velit reprehenderit laboris cillum proident enim non sit. Labore mollit consequat aute nisi officia irure tempor culpa occaecat consectetur ipsum. In do incididunt ex id labore excepteur laboris sint elit fugiat. Laboris consectetur non sint fugiat deserunt ea. Et dolor occaecat qui sit ipsum non labore in veniam est.',
	},
	{
		title: 'Post 5',
		content:
			'Commodo non et nostrud ad velit veniam mollit. Sint ullamco quis duis mollit cillum exercitation cupidatat sunt voluptate pariatur. Voluptate occaecat dolor laboris nisi ea irure velit aute tempor. Reprehenderit et incididunt nulla exercitation minim eiusmod ut proident enim anim qui cillum voluptate.',
	},
	{
		title: 'Post 6',
		content:
			'Reprehenderit elit culpa irure ullamco. Deserunt dolor et ad irure aliquip commodo cillum. Amet occaecat nostrud fugiat eiusmod deserunt enim dolor veniam laboris. Dolore laborum exercitation labore in adipisicing ea est officia elit.',
	},
	{
		title: 'Post 7',
		content:
			'Aliquip ex ullamco in deserunt quis mollit eu. In incididunt excepteur ipsum voluptate qui voluptate nulla incididunt veniam. Magna laborum in in elit eiusmod elit officia ex ex cillum.',
	},
	{
		title: 'Post 8',
		content:
			'Mollit tempor pariatur ea qui ullamco ea commodo Lorem velit enim aliquip reprehenderit ex. Exercitation amet id mollit pariatur consequat dolor aliquip. Esse voluptate elit in do do do aute sint exercitation duis. In veniam adipisicing quis tempor. Aliqua cillum id occaecat ipsum eu id reprehenderit sit quis sit.',
	},
	{
		title: 'Post 9',
		content:
			'Aliqua incididunt nulla ut duis velit exercitation nulla Lorem ipsum consectetur fugiat consectetur enim. Elit excepteur proident adipisicing velit labore laborum aliqua. Fugiat est nisi ex ea do. Ipsum sunt nisi velit ipsum. Aliqua non eiusmod irure sint ea ea excepteur laboris laborum labore dolor magna aute tempor.',
	},
	{
		title: 'Post 10',
		content:
			'Minim fugiat dolore ex ipsum ad proident ut sit culpa elit elit anim dolore deserunt. Esse amet esse officia proident minim commodo duis voluptate Lorem. Ex cillum dolor exercitation sunt nisi duis officia.',
	},
	{
		title: 'Post 11',
		content:
			'Adipisicing voluptate aliqua aliquip anim sunt occaecat eu enim exercitation. Duis consequat amet laboris consequat sunt laboris id id adipisicing in commodo culpa dolor. Magna ipsum Lorem ea aliqua mollit amet veniam exercitation. Non cillum cillum pariatur exercitation laborum veniam ut quis minim proident incididunt proident aliquip.',
	},
	{
		title: 'Post 12',
		content:
			'Non ullamco eu consequat deserunt excepteur. Eu nostrud ex nisi enim. Quis qui id nisi quis ullamco esse enim in est.',
	},
];

const postsSeed = async () => {
	try {
		const prisma = new PrismaClient({
			log: ['query', 'info', 'warn', 'error'],
			errorFormat: 'pretty',
		});

		await Promise.all(
			posts.map(post =>
				prisma.post.create({
					data: {
						...post,
						authorId: 1,
					},
				}),
			),
		);
		console.log('Seeding success!');
	} catch (err) {
		console.log(err);
	}
};
postsSeed();
