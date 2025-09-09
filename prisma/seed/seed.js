import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    console.log("Iniciando o seed...");

    await prisma.house.deleteMany({});

        // Criação de casas
    const stark = await prisma.house.create({
        data: {
                name: "Stark",
                bannerUrl: "https://example.com/stark.jpg",
                bannerAlt: "Lobo cinza em fundo branco",
                realm: "O Norte",
                slogan: "O Inverno Está Chegando",
                history:
                    "A Casa Stark é uma das mais antigas e nobres casas de Westeros, conhecida por sua honra e lealdade. Eles governam o Norte a partir de Winterfell e são famosos por seu lema 'O Inverno Está Chegando'.",
            },
    });
    const lannister = await prisma.house.create({
        data: {
                name: "Lannister",
                bannerUrl: "https://example.com/lannister.jpg",
                bannerAlt: "Leão dourado em fundo vermelho",
                realm: "As Terras Ocidentais",
                slogan: "Ouça-me Rugir!",
                history:
                    "A Casa Lannister é uma das casas mais ricas e poderosas de Westeros, conhecida por sua astúcia e ambição. Eles governam as Terras Ocidentais a partir de Rochedo Casterly e são famosos por seu lema 'Ouça-me Rugir!'."
            },
    });
    const targaryen = await prisma.house.create({
        data: {
                name: "Targaryen",
                bannerUrl: "https://example.com/targaryen.jpg",
                bannerAlt: "Dragão vermelho de três cabeças em fundo preto",
                realm: "Ponta Tempestade",
                slogan: "Fogo e Sangue",
                history:
                    "A Casa Targaryen é uma casa nobre de origem valiriana, conhecida por seus dragões e sua linhagem real. Eles governaram Westeros por quase 300 anos antes de serem derrubados na Rebelião de Robert.",
            },
    });
    const baratheon = await prisma.house.create({
        data: {
                name: "Baratheon",
                bannerUrl: "https://example.com/baratheon.jpg",
                bannerAlt: "Cervo coroado dourado em fundo preto",
                realm: "As Terras da Tempestade",
                slogan: "Nossa é a Fúria",
                history:
                    "A Casa Baratheon é uma casa nobre de Westeros, conhecida por sua força e bravura. Eles governam as Terras da Tempestade a partir de Ponta Tempestade e são famosos por seu lema 'Nossa é a Fúria'.",
            },
    });

    //Personagens 
    const per = [
        {
            "name": "Eddard Stark",
            "houseId": stark.id,
            "atributo": "força"
        },
        {
            "name": "Catelyn Stark",
            "houseId": stark.id,
        },
        {
            "name": "Robb Stark",
            "houseId": stark.id,
        },
        {
            "name": "Sansa Stark",
            "houseId": stark.id,
        },
        {
            "name": "Arya Stark",
            "houseId": stark.id,
        },
        {
            "name": "Bran Stark",
            "houseId": stark.id,
        },
        {
            "name": "Rickon Stark",
            "houseId": stark.id,
        },
        {
            "name": "Tywin Lannister",
            "houseId": lannister.id,
        },
        {
            "name": "Cersei Lannister",
            "houseId": lannister.id,
        },
        {
            "name": "Jaime Lannister",
            "houseId": lannister.id,
        },
        {
            "name": "Tyrion Lannister",
            "houseId": lannister.id,
        },
    ]

    per.map(async (p) => {
        await prisma.character.create({
            data: p
        })
    })

    const jonSnow = await prisma.character.create({
        data: {
            name: "Jon Snow",
            houseId: stark.id,
            role: "Protagonista",
            description:
                "Jon Snow é o filho bastardo de Eddard Stark, criado em Winterfell. Ele se junta à Patrulha da Noite e eventualmente se torna seu Lorde Comandante. Jon é conhecido por sua honra, coragem e liderança.",
            imageUrl: "https://example.com/jonsnow.jpg",
        },
    });

    const tyrionLannister = await prisma.character.create({
        data: {
            name: "Tyrion Lannister",
            houseId: lannister.id,
            role: "Protagonista",
            description:
                "Tyrion Lannister, também conhecido como 'O Imp', é o filho mais novo de Tywin Lannister. Apesar de ser desprezado por sua família devido à sua estatura, Tyrion é inteligente, astuto e possui um senso de humor afiado.",
            imageUrl: "https://example.com/tyrion.jpg",
        },
    });

    console.log("Casas criadas. Inserindo cards...");

    // Cards para NBA Legends
    const nbaCards = await Promise.all([
        prisma.card.create({
            data: {
                name: "Michael Jordan",
                rarity: "Ultra Rare",
                attackPoints: 9800,
                defensePoints: 9200,
                imageUrl: "https://example.com/jordan.jpg",
                collectionId: nbaLegends.id,
            },
        }),
        prisma.card.create({
            data: {
                name: "LeBron James",
                rarity: "Ultra Rare",
                attackPoints: 9700,
                defensePoints: 9500,
                imageUrl: "https://example.com/lebron.jpg",
                collectionId: nbaLegends.id,
            },
        }),
        prisma.card.create({
            data: {
                name: "Kobe Bryant",
                rarity: "Ultra Rare",
                attackPoints: 9600,
                defensePoints: 9300,
                imageUrl: "https://example.com/kobe.jpg",
                collectionId: nbaLegends.id,
            },
        }),
        prisma.card.create({
            data: {
                name: "Magic Johnson",
                rarity: "Super Rare",
                attackPoints: 9400,
                defensePoints: 8700,
                imageUrl: "https://example.com/magic.jpg",
                collectionId: nbaLegends.id,
            },
        }),
        prisma.card.create({
            data: {
                name: "Larry Bird",
                rarity: "Super Rare",
                attackPoints: 9300,
                defensePoints: 8800,
                imageUrl: "https://example.com/bird.jpg",
                collectionId: nbaLegends.id,
            },
        }),
        prisma.card.create({
            data: {
                name: "Shaquille O'Neal",
                rarity: "Super Rare",
                attackPoints: 9500,
                defensePoints: 9400,
                imageUrl: "https://example.com/shaq.jpg",
                collectionId: nbaLegends.id,
            },
        }),
        prisma.card.create({
            data: {
                name: "Stephen Curry",
                rarity: "Rare",
                attackPoints: 9200,
                defensePoints: 8500,
                imageUrl: "https://example.com/curry.jpg",
                collectionId: nbaLegends.id,
            },
        }),
        prisma.card.create({
            data: {
                name: "Kevin Durant",
                rarity: "Rare",
                attackPoints: 9300,
                defensePoints: 8600,
                imageUrl: "https://example.com/durant.jpg",
                collectionId: nbaLegends.id,
            },
        }),
    ]);

    console.log(`Seed concluído! Criadas ${await prisma.house.count()} casas.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
