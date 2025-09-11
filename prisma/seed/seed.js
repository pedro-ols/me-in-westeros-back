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
                realm: "As Terras da Coroa",
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

    const starkCharacters =  await Promise.all([
        prisma.character.create({
        data: {
            name: "Eddard (Ned) Stark",
            houseId: stark.id,
            atributes: [
                {
                    name: "Força",
                    value: 16
                },
                {
                    name: "Inteligência",
                    value: 15
                },
                {
                    name: "Carisma",
                    value: 8
                },
                { 
                    name: "Lealdade",
                    value: 20
                },
                {
                    name: "Coragem",
                    value: 17
                },
                {
                    name: "Influência",
                    value: 18
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles:[
                { name: "Senhor de Winterfell" },
                { name: "Protetor do Norte" },
            ]
        },
        }),
        prisma.character.create({
        data: {
            name: "Catelyn Stark",
            houseId: stark.id,
            atributes: [
                {
                    name: "Força",
                    value: 6
                },
                {
                    name: "Inteligência",
                    value: 8
                },
                {
                    name: "Carisma",
                    value: 13
                },
                { 
                    name: "Lealdade",
                    value: 17
                },
                {
                    name: "Coragem",
                    value: 17
                },
                {
                    name: "Influência",
                    value: 11
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Senhora de Winterfell" }
            ] 
        },
        }),
        prisma.character.create({
        data: {
            name: "Robb Stark",
            houseId: stark.id,
            atributes: [
                {
                    name: "Força",
                    value: 16
                },
                {
                    name: "Inteligência",
                    value: 15
                },
                {
                    name: "Carisma",
                    value: 13
                },
                { 
                    name: "Lealdade",
                    value: 18
                },
                {
                    name: "Coragem",
                    value: 15
                },
                {
                    name: "Influência",
                    value: 14
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Herdeiro de Winterfell" },
                { name: "Rei do Norte" },
                { name: "O Jovem Lobo" }
            ]
        },
        }),
        prisma.character.create({
        data: {
            name: "Jon Snow",
            houseId: stark.id,
            atributes: [
                {
                    name: "Força",
                    value: 14
                },
                {
                    name: "Inteligência",
                    value: 9
                },
                {
                    name: "Carisma",
                    value: 16
                },
                { 
                    name: "Lealdade",
                    value: 16
                },
                {
                    name: "Coragem",
                    value: 18
                },
                {
                    name: "Influência",
                    value: 14
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Lorde Snow" },
                { name: "O bastardo de Ned Stark" },
                { name: "Senhor Comandante da Patrula da Noite" },
                { name: "Rei do Norte" }
            ]
        },
        }),
        prisma.character.create({
        data: {
            name: "Arya Stark",
            houseId: stark.id,
            atributes: [
                {
                    name: "Força",
                    value: 6
                },
                {
                    name: "Inteligência",
                    value: 15
                },
                {
                    name: "Carisma",
                    value: 10
                },
                { 
                    name: "Lealdade",
                    value: 10
                },
                {
                    name: "Coragem",
                    value: 17
                },
                {
                    name: "Influência",
                    value: 4
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Princesa de Winterfell" },
                { name: "Garota sem-rosto" }
            ]
        },
        }),
        prisma.character.create({
        data: {
            name: "Bran Stark",
            houseId: stark.id,
            atributes: [
                {
                    name: "Força",
                    value: 2
                },
                {
                    name: "Inteligência",
                    value: 13
                },
                {
                    name: "Carisma",
                    value: 17
                },
                { 
                    name: "Lealdade",
                    value: 15
                },
                {
                    name: "Coragem",
                    value: 17
                },
                {
                    name: "Influência",
                    value: 5
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Bran, o quebrado" },
                { name: "Príncipe de Winterfell" },
                { name: "O Corvo de Três Olhos" }
            ]
        },
        }),
        prisma.character.create({
        data: {
            name: "Sansa Stark",
            houseId: stark.id,
            atributes: [
                {
                    name: "Força",
                    value: 4
                },
                {
                    name: "Inteligência",
                    value: 11
                },
                {
                    name: "Carisma",
                    value: 19
                },
                { 
                    name: "Lealdade",
                    value: 15
                },
                {
                    name: "Coragem",
                    value: 10
                },
                {
                    name: "Influência",
                    value: 5
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Princesa de Winterfell" },
                { name: "Rainha do Norte" }

        ]
        },
        }),
        prisma.character.create({
        data: {
            name: "Rickon Stark",
            houseId: stark.id,
            atributes: [
                {
                    name: "Força",
                    value: 2
                },
                {
                    name: "Inteligência",
                    value: 13
                },
                {
                    name: "Carisma",
                    value: 17
                },
                { 
                    name: "Lealdade",
                    value: 15
                },
                {
                    name: "Coragem",
                    value: 17
                },
                {
                    name: "Influência",
                    value: 5
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "O Último Stark" }  
            ]
        },
        }),
    ]); 
    const lannisterCharacters =  await Promise.all([
        prisma.character.create({
        data: {
            name: "Tywin Lannister",
            houseId: lannister.id,
            atributes: [
                {
                    name: "Força",
                    value: 12
                },
                {
                    name: "Inteligência",
                    value: 18
                },
                {
                    name: "Carisma",
                    value: 10
                },
                {
                    name: "Lealdade",
                    value: 8
                },
                {
                    name: "Coragem",
                    value: 13
                },
                {
                    name: "Influência",
                    value: 20
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Lorde de Rochedo Casterly" },
                { name: "Mão do Rei" }
            ]   
        },
        }),
        prisma.character.create({
        data: {
            name: "Tyrion Lannister",
            houseId: lannister.id,
            atributes: [
                {
                    name: "Força",
                    value: 6
                },
                {
                    name: "Inteligência",
                    value: 20
                },
                {
                    name: "Carisma",
                    value: 5
                },
                {
                    name: "Lealdade",
                    value: 17
                },
                {
                    name: "Coragem",
                    value: 14
                },
                {
                    name: "Influência",
                    value: 16
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "O duende" },
                { name: "Mão do Rei" }
            ]   
        },
        }),
        
        prisma.character.create({
        data: {
            name: "Cersei Lannister",
            houseId: lannister.id,
            atributes: [
                {
                    name: "Força",
                    value: 7
                },
                {
                    name: "Inteligência",
                    value: 16
                },
                {
                    name: "Carisma",
                    value: 18
                },
                {
                    name: "Lealdade",
                    value: 8
                },
                {   
                    name: "Coragem",
                    value: 9
                },
                {
                    name: "Influência",
                    value: 19
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Rainha dos Sete Reinos" },
                { name: "Rainha Regente" }
            ]
        },
        }),
        prisma.character.create({
        data: {
            name: "Jaime Lannister",
            houseId: lannister.id,
            atributes: [
                {
                    name: "Força",
                    value: 20
                },
                {
                    name: "Inteligência",
                    value: 10
                },
                {

                    name: "Carisma",
                    value: 18
                },  
                {
                    name: "Lealdade",
                    value: 18
                },
                {
                    name: "Coragem",
                    value: 19
                },
                {
                    name: "Influência", 
                    value: 12
                }
            ],
            imageUrl: "https://example.com/jonsnow.jpg",
            titles: [
                { name: "Regicida" },
                { name: "Lorde Comandante da Guarda Real" },
                { name: "O Maneta" }
            ]
        },
        }),
    ]);

    console.log("Casas criadas. Inserindo cards...");

    // const nbaCards = await Promise.all([
    //     prisma.card.create({
    //         data: {
    //             name: "Michael Jordan",
    //             rarity: "Ultra Rare",
    //             attackPoints: 9800,
    //             defensePoints: 9200,
    //             imageUrl: "https://example.com/jordan.jpg",
    //             collectionId: nbaLegends.id,
    //         },
    //     }),
    //     prisma.card.create({
    //         data: {
    //             name: "LeBron James",
    //             rarity: "Ultra Rare",
    //             attackPoints: 9700,
    //             defensePoints: 9500,
    //             imageUrl: "https://example.com/lebron.jpg",
    //             collectionId: nbaLegends.id,
    //         },
    //     }),
    //     prisma.card.create({
    //         data: {
    //             name: "Kobe Bryant",
    //             rarity: "Ultra Rare",
    //             attackPoints: 9600,
    //             defensePoints: 9300,
    //             imageUrl: "https://example.com/kobe.jpg",
    //             collectionId: nbaLegends.id,
    //         },
    //     }),
    //     prisma.card.create({
    //         data: {
    //             name: "Magic Johnson",
    //             rarity: "Super Rare",
    //             attackPoints: 9400,
    //             defensePoints: 8700,
    //             imageUrl: "https://example.com/magic.jpg",
    //             collectionId: nbaLegends.id,
    //         },
    //     }),
    //     prisma.card.create({
    //         data: {
    //             name: "Larry Bird",
    //             rarity: "Super Rare",
    //             attackPoints: 9300,
    //             defensePoints: 8800,
    //             imageUrl: "https://example.com/bird.jpg",
    //             collectionId: nbaLegends.id,
    //         },
    //     }),
    //     prisma.card.create({
    //         data: {
    //             name: "Shaquille O'Neal",
    //             rarity: "Super Rare",
    //             attackPoints: 9500,
    //             defensePoints: 9400,
    //             imageUrl: "https://example.com/shaq.jpg",
    //             collectionId: nbaLegends.id,
    //         },
    //     }),
    //     prisma.card.create({
    //         data: {
    //             name: "Stephen Curry",
    //             rarity: "Rare",
    //             attackPoints: 9200,
    //             defensePoints: 8500,
    //             imageUrl: "https://example.com/curry.jpg",
    //             collectionId: nbaLegends.id,
    //         },
    //     }),
    //     prisma.card.create({
    //         data: {
    //             name: "Kevin Durant",
    //             rarity: "Rare",
    //             attackPoints: 9300,
    //             defensePoints: 8600,
    //             imageUrl: "https://example.com/durant.jpg",
    //             collectionId: nbaLegends.id,
    //         },
    //     }),
    // ]);

    console.log(`Seed concluído! ${await prisma.house.count()} casas e ${await prisma.character.count()} personagens.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
