import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  await prisma.house.deleteMany({});

  // Criação de casas

  const stark = await prisma.house.create({
    data: {
      name: "Stark",
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_stark.png?raw=true",
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
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_lannister.png?raw=true",
      bannerAlt: "Leão dourado em fundo vermelho",
      realm: "As Terras Ocidentais",
      slogan: "Ouça-me Rugir!",
      history:
        "A Casa Lannister é uma das casas mais ricas e poderosas de Westeros, conhecida por sua astúcia e ambição. Eles governam as Terras Ocidentais a partir de Rochedo Casterly e são famosos por seu lema 'Ouça-me Rugir!'.",
    },
  });
  const targaryen = await prisma.house.create({
    data: {
      name: "Targaryen",
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_targaryen.png?raw=true",
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
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_baratheon.png?raw=true",
      bannerAlt: "Cervo coroado dourado em fundo preto",
      realm: "As Terras da Tempestade",
      slogan: "Nossa é a Fúria",
      history:
        "A Casa Baratheon é uma casa nobre de Westeros, conhecida por sua força e bravura. Eles governam as Terras da Tempestade a partir de Ponta Tempestade e são famosos por seu lema 'Nossa é a Fúria'.",
    },
  });

  const tyrell = await prisma.house.create({
    data: {
      name: "Tyrell",
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_tyrell.png?raw=true",
      bannerAlt: "Rosa dourada em fundo verde",
      realm: "A campina",
      slogan: "Crescer Forte",
      history:
        "A Casa Tyrell é uma das casas mais poderosas de Westeros, conhecida por sua riqueza e influência política. Eles governam o Reach a partir de Jardim de Cima e controlam as terras mais férteis dos Sete Reinos.",
    },
  });

  const arryn = await prisma.house.create({
    data: {
      name: "Arryn",
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_arryn.png?raw=true",
      bannerAlt: "Falcão e lua crescente branco em fundo azul céu",
      realm: "O Vale",
      slogan: "Tão Alto Quanto a Honra",
      history:
        "A Casa Arryn é uma das casas mais antigas e honradas de Westeros. Eles governam o Vale a partir do Ninho da Águia, um castelo considerado inexpugnável nas Montanhas da Lua.",
    },
  });

  const martell = await prisma.house.create({
    data: {
      name: "Martell",
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_martell.png?raw=true",
      bannerAlt: "Sol dourado perfurado por uma lança em fundo laranja",
      realm: "Dorne",
      slogan: "Nunca Dobrado, Nunca Quebrado",
      history:
        "A Casa Martell governa Dorne, a região mais ao sul de Westeros. Conhecidos por sua resistência e independência, foram os últimos a se juntar aos Sete Reinos e mantêm tradições únicas, incluindo a sucessão feminina.",
    },
  });

  const tully = await prisma.house.create({
    data: {
      name: "Tully",
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_tully.png?raw=true",
      bannerAlt: "Truta saltando prateada em fundo azul e vermelho",
      realm: "As Terras Fluviais",
      slogan: "Família, Dever, Honra",
      history:
        "A Casa Tully governa as Terras Fluviais a partir de Correrrio. Conhecidos por sua lealdade e senso de dever, eles controlam uma região estratégica entre os grandes rios de Westeros.",
    },
  });

  const frey = await prisma.house.create({
    data: {
      name: "Frey",
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_frey.png?raw=true",
      bannerAlt: "Torres gêmeas azul em fundo prateado",
      realm: "As Terras Fluviais",
      slogan: "Nós Estamos Juntos",
      history:
        "A Casa Frey controla a passagem estratégica sobre o Rio Tridente através de seu castelo, As Gêmeas. Conhecidos por sua numerosa prole e ressentimentos de longa data contra as casas mais poderosas.",
    },
  });

  const greyjoy = await prisma.house.create({
    data: {
      name: "Greyjoy",
      bannerUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/banners/banner_greyjoy.png?raw=true",
      bannerAlt: "Lula dourada em fundo preto",
      realm: "As Ilhas de Ferro",
      slogan: "Nós Não Semeamos",
      history:
        "A Casa Greyjoy governa as Ilhas de Ferro, um arquipélago de ilhas rochosas habitado por um povo marítimo conhecido como homens de ferro. Eles seguem o Deus Afogado e vivem pela filosofia de 'pagar o preço do ferro'.",
    },
  });

  console.log("Casas criadas. Inserindo personagens...");

  const eddardStark = await prisma.character.create({
    data: {
      name: "Eddard (Ned) Stark",
      houseId: stark.id,
      atributes: [
        { name: "Força", value: 16 },
        { name: "Inteligência", value: 15 },
        { name: "Carisma", value: 8 },
        { name: "Lealdade", value: 20 },
        { name: "Coragem", value: 17 },
        { name: "Influência", value: 18 },
        { name: "Loucura", value: 2 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/eddard_stark.png?raw=true",
      titles: [{ name: "Senhor de Winterfell" }, { name: "Protetor do Norte" }],
    },
  });

  const catelynStark = await prisma.character.create({
    data: {
      name: "Catelyn Stark",
      houseId: stark.id,
      atributes: [
        { name: "Força", value: 6 },
        { name: "Inteligência", value: 8 },
        { name: "Carisma", value: 13 },
        { name: "Lealdade", value: 17 },
        { name: "Coragem", value: 17 },
        { name: "Influência", value: 11 },
        { name: "Loucura", value: 3 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/catelyn_stark.png?raw=true",
      titles: [{ name: "Senhora de Winterfell" }],
    },
  });

  const robbStark = await prisma.character.create({
    data: {
      name: "Robb Stark",
      houseId: stark.id,
      atributes: [
        { name: "Força", value: 16 },
        { name: "Inteligência", value: 15 },
        { name: "Carisma", value: 13 },
        { name: "Lealdade", value: 18 },
        { name: "Coragem", value: 17 },
        { name: "Influência", value: 14 },
        { name: "Loucura", value: 3 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/robb_stark.png?raw=true",
      titles: [
        { name: "Herdeiro de Winterfell" },
        { name: "Rei do Norte" },
        { name: "O Jovem Lobo" },
      ],
    },
  });

  const jonSnow = await prisma.character.create({
    data: {
      name: "Jon Snow",
      houseId: stark.id,
      atributes: [
        { name: "Força", value: 14 },
        { name: "Inteligência", value: 9 },
        { name: "Carisma", value: 16 },
        { name: "Lealdade", value: 16 },
        { name: "Coragem", value: 18 },
        { name: "Influência", value: 14 },
        { name: "Loucura", value: 2 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/jon_snow.png?raw=true",
      titles: [
        { name: "Lorde Snow" },
        { name: "O bastardo de Ned Stark" },
        { name: "Senhor Comandante da Patrula da Noite" },
        { name: "Rei do Norte" },
      ],
    },
  });

  const aryaStark = await prisma.character.create({
    data: {
      name: "Arya Stark",
      houseId: stark.id,
      atributes: [
        { name: "Força", value: 6 },
        { name: "Inteligência", value: 15 },
        { name: "Carisma", value: 10 },
        { name: "Lealdade", value: 10 },
        { name: "Coragem", value: 16 },
        { name: "Influência", value: 4 },
        { name: "Loucura", value: 5 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/arya_stark.png?raw=true",
      titles: [
        { name: "Princesa de Winterfell" },
        { name: "Garota sem-rosto" },
      ],
    },
  });

  const branStark = await prisma.character.create({
    data: {
      name: "Bran Stark",
      houseId: stark.id,
      atributes: [
        { name: "Força", value: 2 },
        { name: "Inteligência", value: 13 },
        { name: "Carisma", value: 17 },
        { name: "Lealdade", value: 15 },
        { name: "Coragem", value: 13 },
        { name: "Influência", value: 5 },
        { name: "Loucura", value: 2 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/bran_stark.png?raw=true",
      titles: [
        { name: "Bran, o quebrado" },
        { name: "Príncipe de Winterfell" },
        { name: "O Corvo de Três Olhos" },
      ],
    },
  });

  const sansaStark = await prisma.character.create({
    data: {
      name: "Sansa Stark",
      houseId: stark.id,
      atributes: [
        { name: "Força", value: 4 },
        { name: "Inteligência", value: 11 },
        { name: "Carisma", value: 19 },
        { name: "Lealdade", value: 15 },
        { name: "Coragem", value: 10 },
        { name: "Influência", value: 5 },
        { name: "Loucura", value: 3 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/sansa_stark.png?raw=true",
      titles: [{ name: "Princesa de Winterfell" }, { name: "Rainha do Norte" }],
    },
  });

  const rickonStark = await prisma.character.create({
    data: {
      name: "Rickon Stark",
      houseId: stark.id,
      atributes: [
        { name: "Força", value: 2 },
        { name: "Inteligência", value: 13 },
        { name: "Carisma", value: 17 },
        { name: "Lealdade", value: 15 },
        { name: "Coragem", value: 17 },
        { name: "Influência", value: 5 },
        { name: "Loucura", value: 0 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/rickon_stark.png?raw=true",
      titles: [{ name: "O Último Stark" }],
    },
  });
  const tywinLannister = await prisma.character.create({
    data: {
      name: "Tywin Lannister",
      houseId: lannister.id,
      atributes: [
        { name: "Força", value: 12 },
        { name: "Inteligência", value: 18 },
        { name: "Carisma", value: 10 },
        { name: "Lealdade", value: 8 },
        { name: "Coragem", value: 13 },
        { name: "Influência", value: 20 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/tywin_lannister.png?raw=true",
      titles: [{ name: "Lorde de Rochedo Casterly" }, { name: "Mão do Rei" }],
    },
  });

  const tyrionLannister = await prisma.character.create({
    data: {
      name: "Tyrion Lannister",
      houseId: lannister.id,
      atributes: [
        { name: "Força", value: 6 },
        { name: "Inteligência", value: 20 },
        { name: "Carisma", value: 5 },
        { name: "Lealdade", value: 17 },
        { name: "Coragem", value: 14 },
        { name: "Influência", value: 16 },
        { name: "Loucura", value: 8 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/tyrion_lannister.png?raw=true",
      titles: [{ name: "O duende" }, { name: "Mão do Rei" }],
    },
  });

  const cerseiLannister = await prisma.character.create({
    data: {
      name: "Cersei Lannister",
      houseId: lannister.id,
      atributes: [
        { name: "Força", value: 7 },
        { name: "Inteligência", value: 16 },
        { name: "Carisma", value: 18 },
        { name: "Lealdade", value: 8 },
        { name: "Coragem", value: 9 },
        { name: "Influência", value: 19 },
        { name: "Loucura", value: 12 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/cersei_lannister.png?raw=true",
      titles: [{ name: "Rainha dos Sete Reinos" }, { name: "Rainha Regente" }],
    },
  });

  const jaimeLannister = await prisma.character.create({
    data: {
      name: "Jaime Lannister",
      houseId: lannister.id,
      atributes: [
        { name: "Força", value: 20 },
        { name: "Inteligência", value: 10 },
        { name: "Carisma", value: 18 },
        { name: "Lealdade", value: 18 },
        { name: "Coragem", value: 19 },
        { name: "Influência", value: 12 },
        { name: "Loucura", value: 6 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/jaime_lannister.png?raw=true",
      titles: [
        { name: "Regicida" },
        { name: "Lorde Comandante da Guarda Real" },
        { name: "O Maneta" },
      ],
    },
  });

  // Personagens da Casa Targaryen
  const daenerysTargaryen = await prisma.character.create({
    data: {
      name: "Daenerys Targaryen",
      houseId: targaryen.id,
      atributes: [
        { name: "Força", value: 8 },
        { name: "Inteligência", value: 16 },
        { name: "Carisma", value: 16 },
        { name: "Lealdade", value: 12 },
        { name: "Coragem", value: 18 },
        { name: "Influência", value: 19 },
        { name: "Loucura", value: 10 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/daenerys_targaryen.png?raw=true",
      titles: [
        { name: "Mãe dos Dragões" },
        { name: "Khaleesi" },
        { name: "Rainha de Meereen" },
        { name: "A Não Queimada" },
      ],
    },
  });

  const viserysTaregaryen = await prisma.character.create({
    data: {
      name: "Viserys Targaryen",
      houseId: targaryen.id,
      atributes: [
        { name: "Força", value: 6 },
        { name: "Inteligência", value: 8 },
        { name: "Carisma", value: 4 },
        { name: "Lealdade", value: 5 },
        { name: "Coragem", value: 3 },
        { name: "Influência", value: 7 },
        { name: "Loucura", value: 18 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/viserys_targaryen.png?raw=true",
      titles: [{ name: "O Rei Mendigo" }, { name: "Último Rei dos Dragões" }],
    },
  });

  const rhaegarTargaryen = await prisma.character.create({
    data: {
      name: "Rhaegar Targaryen",
      houseId: targaryen.id,
      atributes: [
        { name: "Força", value: 16 },
        { name: "Inteligência", value: 15 },
        { name: "Carisma", value: 20 },
        { name: "Lealdade", value: 18 },
        { name: "Coragem", value: 17 },
        { name: "Influência", value: 17 },
        { name: "Loucura", value: 2 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/rhaegar_targaryen.png?raw=true",
      titles: [
        { name: "Príncipe de Dragonstone" },
        { name: "O Último Dragão" },
      ],
    },
  });

  const aemonTargaryen = await prisma.character.create({
    data: {
      name: "Aemon Targaryen",
      houseId: targaryen.id,
      atributes: [
        { name: "Força", value: 3 },
        { name: "Inteligência", value: 19 },
        { name: "Carisma", value: 18 },
        { name: "Lealdade", value: 20 },
        { name: "Coragem", value: 12 },
        { name: "Influência", value: 8 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/aemon_targaryen.png?raw=true",
      titles: [
        { name: "Mestre Aemon" },
        { name: "Aemon, o Dragão" },
      ],
    },
  });

  const aerysTargaryen = await prisma.character.create({
    data: {
      name: "Aerys Targaryen",
      houseId: targaryen.id,
      atributes: [
        { name: "Força", value: 8 },
        { name: "Inteligência", value: 5 },
        { name: "Carisma", value: 2 },
        { name: "Lealdade", value: 5 },
        { name: "Coragem", value: 7 },
        { name: "Influência", value: 13 },
        { name: "Loucura", value: 20 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/aerys_targaryen.png?raw=true",
      titles: [
        { name: "Rei Aerys II Targaryen. Rei dos Ândalos, dos Roinares e dos Primeiros Homens" },
        { name: "O Rei Louco" },
      ],
    },
  });

  // Personagens da Casa Baratheon
  const robertBaratheon = await prisma.character.create({
    data: {
      name: "Robert Baratheon",
      houseId: baratheon.id,
      atributes: [
        { name: "Força", value: 18 },
        { name: "Inteligência", value: 8 },
        { name: "Carisma", value: 15 },
        { name: "Lealdade", value: 12 },
        { name: "Coragem", value: 17 },
        { name: "Influência", value: 20 },
        { name: "Loucura", value: 4 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/robert_baratheon.png?raw=true",
      titles: [
        { name: "Rei Robert Baratheon de Westeros. Rei dos Ândalos, dos Roinares e dos Primeiros Homens" },
        { name: "O Usurpador" },
        { name: "O Assassino de Rhaegar" },
      ],
    },
  });

  const stannisBaratheon = await prisma.character.create({
    data: {
      name: "Stannis Baratheon",
      houseId: baratheon.id,
      atributes: [
        { name: "Força", value: 14 },
        { name: "Inteligência", value: 16 },
        { name: "Carisma", value: 4 },
        { name: "Lealdade", value: 19 },
        { name: "Coragem", value: 18 },
        { name: "Influência", value: 13 },
        { name: "Loucura", value: 2 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/stannis_baratheon.png?raw=true",
      titles: [
        { name: "Senhor de Ponta Tempestade" },
        { name: "Rei Stannis" },
        { name: "Senhor da Luz" },
      ],
    },
  });

  const renlyBaratheon = await prisma.character.create({
    data: {
      name: "Renly Baratheon",
      houseId: baratheon.id,
      atributes: [
        { name: "Força", value: 10 },
        { name: "Inteligência", value: 11 },
        { name: "Carisma", value: 19 },
        { name: "Lealdade", value: 10 },
        { name: "Coragem", value: 13 },
        { name: "Influência", value: 16 },
        { name: "Loucura", value: 8 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/renly_baratheon.png?raw=true",
      titles: [
        { name: "Senhor de Ponta Tempestade" },
        { name: "Rei Renly" },
        { name: "Lorde Renly"}
      ],
    },
  });

  const joffreyBaratheon = await prisma.character.create({
    data: {
      name: "Joffrey Baratheon",
      houseId: baratheon.id,
      atributes: [
        { name: "Força", value: 8 },
        { name: "Inteligência", value: 12 },
        { name: "Carisma", value: 2 },
        { name: "Lealdade", value: 10 },
        { name: "Coragem", value: 6 },
        { name: "Influência", value: 18 },
        { name: "Loucura", value: 18 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/joffrey_baratheon.png?raw=true",
      titles: [
        {
          name: "Rei Joffrey Baratheon de Westeros. Rei dos Ândalos, dos Roinares e dos Primeiros Homens",
        },
        { name: "Joffrey, o cruel" },
      ],
    },
  });
  const tommenBaratheon = await prisma.character.create({
    data: {
      name: "Tommen Baratheon",
      houseId: baratheon.id,
      atributes: [
        { name: "Força", value: 4 },
        { name: "Inteligência", value: 6 },
        { name: "Carisma", value: 8 },
        { name: "Lealdade", value: 10 },
        { name: "Coragem", value: 5 },
        { name: "Influência", value: 12 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/tommen_baratheon.png?raw=true",
      titles: [
        {
          name: "Rei Tommen Baratheon de Westeros. Rei dos Ândalos, dos Roinares e dos Primeiros Homens",
        },
        { name: "Tommen, o fraco" },
      ],
    },
  });
  const myrcellaBaratheon = await prisma.character.create({
    data: {
      name: "Myrcella Baratheon",
        houseId: baratheon.id,
      atributes: [
        { name: "Força", value: 4 },
        { name: "Inteligência", value: 6 },
        { name: "Carisma", value: 15 },
        { name: "Lealdade", value: 10 },
        { name: "Coragem", value: 5 },
        { name: "Influência", value: 12 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/myrcella_baratheon.png?raw=true",
      titles: [
        {
          name: "Princesa Myrcella Baratheon de Westeros. Filha dos Ândalos, dos Roinares e dos Primeiros Homens",
        },
        { name: "Myrcella, a doce" },
      ],
    },
  });

  // Personagens da Casa Tyrell
  const margaeryTyrell = await prisma.character.create({
    data: {
      name: "Margaery Tyrell",
      houseId: tyrell.id,
      atributes: [
        { name: "Força", value: 6 },
        { name: "Inteligência", value: 17 },
        { name: "Carisma", value: 20 },
        { name: "Lealdade", value: 14 },
        { name: "Coragem", value: 12 },
        { name: "Influência", value: 15 },
        { name: "Loucura", value: 2 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/margaery_tyrell.png?raw=true",
      titles: [
        { name: "Rainha dos Sete Reinos" },
        { name: "Rosa de Jardim de Cima" },
      ],
    },
  });

  const lorrasTyrell = await prisma.character.create({
    data: {
      name: "Loras Tyrell",
      houseId: tyrell.id,
      atributes: [
        { name: "Força", value: 18 },
        { name: "Inteligência", value: 10 },
        { name: "Carisma", value: 17 },
        { name: "Lealdade", value: 15 },
        { name: "Coragem", value: 16 },
        { name: "Influência", value: 11 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/loras_tyrell.png?raw=true",
      titles: [
        { name: "Cavaleiro das Flores" },
        { name: "Lorde Comandante da Guarda Real" },
      ],
    },
  });

  const olennaTyrell = await prisma.character.create({
    data: {
      name: "Olenna Tyrell",
      houseId: tyrell.id,
      atributes: [
        { name: "Força", value: 3 },
        { name: "Inteligência", value: 20 },
        { name: "Carisma", value: 16 },
        { name: "Lealdade", value: 18 },
        { name: "Coragem", value: 14 },
        { name: "Influência", value: 19 },
        { name: "Loucura", value: 4 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/olenna_tyrell.png?raw=true",
      titles: [
        { name: "Rainha dos Espinhos" },
        { name: "Senhora de Jardim de Cima" },
      ],
    },
  });

  // Personagens da Casa Arryn
  const jonArryn = await prisma.character.create({
    data: {
      name: "Jon Arryn",
      houseId: arryn.id,
      atributes: [
        { name: "Força", value: 10 },
        { name: "Inteligência", value: 18 },
        { name: "Carisma", value: 14 },
        { name: "Lealdade", value: 19 },
        { name: "Coragem", value: 15 },
        { name: "Influência", value: 12 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/jon_arryn.png?raw=true",
      titles: [
        { name: "Senhor do Vale" },
        { name: "Mão do Rei" },
        { name: "Protetor do Leste" },
      ],
    },
  });

  const lysaArryn = await prisma.character.create({
    data: {
      name: "Lysa Arryn",
      houseId: arryn.id,
      atributes: [
        { name: "Força", value: 4 },
        { name: "Inteligência", value: 8 },
        { name: "Carisma", value: 6 },
        { name: "Lealdade", value: 12 },
        { name: "Coragem", value: 5 },
        { name: "Influência", value: 13 },
        { name: "Loucura", value: 17 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/lysa_arryn.png?raw=true",
      titles: [
        { name: "Senhora do Vale" },
        { name: "Regente do Ninho da Águia" },
      ],
    },
  });

  const robinArryn = await prisma.character.create({
    data: {
      name: "Robin Arryn",
      houseId: arryn.id,
      atributes: [
        { name: "Força", value: 2 },
        { name: "Inteligência", value: 6 },
        { name: "Carisma", value: 4 },
        { name: "Lealdade", value: 8 },
        { name: "Coragem", value: 3 },
        { name: "Influência", value: 12 },
        { name: "Loucura", value: 4 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/robin_arryn.png?raw=true",
      titles: [{ name: "Senhor do Vale" }, { name: "Protetor do Leste" }],
    },
  });

  // Personagens da Casa Martell
  const oberynMartell = await prisma.character.create({
    data: {
      name: "Oberyn Martell",
      houseId: martell.id,
      atributes: [
        { name: "Força", value: 17 },
        { name: "Inteligência", value: 16 },
        { name: "Carisma", value: 18 },
        { name: "Lealdade", value: 15 },
        { name: "Coragem", value: 19 },
        { name: "Influência", value: 14 },
        { name: "Loucura", value: 5 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/oberyn_martell.png?raw=true",
      titles: [{ name: "A Víbora Vermelha" }, { name: "Príncipe de Dorne" }],
    },
  });

  const doranMartell = await prisma.character.create({
    data: {
      name: "Doran Martell",
      houseId: martell.id,
      atributes: [
        { name: "Força", value: 6 },
        { name: "Inteligência", value: 19 },
        { name: "Carisma", value: 12 },
        { name: "Lealdade", value: 17 },
        { name: "Coragem", value: 11 },
        { name: "Influência", value: 16 },
        { name: "Loucura", value: 2 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/doran_martell.png?raw=true",
      titles: [
        { name: "Príncipe de Dorne" },
        { name: "Senhor de Lançassolar" },
      ],
    },
  });

  const elliaMartell = await prisma.character.create({
    data: {
      name: "Ellia Martell",
      houseId: martell.id,
      atributes: [
        { name: "Força", value: 8 },
        { name: "Inteligência", value: 14 },
        { name: "Carisma", value: 16 },
        { name: "Lealdade", value: 18 },
        { name: "Coragem", value: 15 },
        { name: "Influência", value: 8 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/ellaria_sand.png?raw=true",
      titles: [
        { name: "Princesa do trono de ferro" },
      ],
    },
  });

  // Personagens da Casa Tully
  const edmureTully = await prisma.character.create({
    data: {
      name: "Edmure Tully",
      houseId: tully.id,
      atributes: [
        { name: "Força", value: 12 },
        { name: "Inteligência", value: 10 },
        { name: "Carisma", value: 13 },
        { name: "Lealdade", value: 16 },
        { name: "Coragem", value: 14 },
        { name: "Influência", value: 11 },
        { name: "Loucura", value: 3 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/edmure_tully.png?raw=true",
      titles: [
        { name: "Senhor de Correrrio" },
        { name: "Senhor Supremo do Tridente" },
      ],
    },
  });

  const hosterTully = await prisma.character.create({
    data: {
      name: "Hoster Tully",
      houseId: tully.id,
      atributes: [
        { name: "Força", value: 2 },
        { name: "Inteligência", value: 16 },
        { name: "Carisma", value: 14 },
        { name: "Lealdade", value: 18 },
        { name: "Coragem", value: 13 },
        { name: "Influência", value: 15 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/hoster_tully.png?raw=true",
      titles: [
        { name: "Senhor de Correrrio" },
        { name: "Senhor Supremo do Tridente" },
      ],
    },
  });

  const brynndenTully = await prisma.character.create({
    data: {
      name: "Brynden Tully",
      houseId: tully.id,
      atributes: [
        { name: "Força", value: 18 },
        { name: "Inteligência", value: 17 },
        { name: "Carisma", value: 12 },
        { name: "Lealdade", value: 19 },
        { name: "Coragem", value: 18 },
        { name: "Influência", value: 13 },
        { name: "Loucura", value: 2 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/brynden_tully.png?raw=true",
      titles: [{ name: "Peixe Negro" }, { name: "Cavaleiro de Correrrio" }],
    },
  });

  // Personagens da Casa Frey
  const walderFrey = await prisma.character.create({
    data: {
      name: "Walder Frey",
      houseId: frey.id,
      atributes: [
        { name: "Força", value: 4 },
        { name: "Inteligência", value: 12 },
        { name: "Carisma", value: 6 },
        { name: "Lealdade", value: 5 },
        { name: "Coragem", value: 8 },
        { name: "Influência", value: 14 },
        { name: "Loucura", value: 17 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/walder_frey.png?raw=true",
      titles: [
        { name: "Senhor da Travessia" },
        { name: "Senhor das Gêmeas" },
        { name: "O Frey Tardio" },
      ],
    },
  });

  const roslinFrey = await prisma.character.create({
    data: {
      name: "Roslin Frey",
      houseId: frey.id,
      atributes: [
        { name: "Força", value: 5 },
        { name: "Inteligência", value: 10 },
        { name: "Carisma", value: 18 },
        { name: "Lealdade", value: 13 },
        { name: "Coragem", value: 8 },
        { name: "Influência", value: 4 },
        { name: "Loucura", value: 1 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/roslin_frey.png?raw=true",
      titles: [{ name: "Senhora Tully" }, { name: "A bela Roslin" }],
    },
  });

  // Personagens da Casa Greyjoy
  const balonGreyjoy = await prisma.character.create({
    data: {
      name: "Balon Greyjoy",
      houseId: greyjoy.id,
      atributes: [
        { name: "Força", value: 7 },
        { name: "Inteligência", value: 12 },
        { name: "Carisma", value: 4 },
        { name: "Lealdade", value: 8 },
        { name: "Coragem", value: 16 },
        { name: "Influência", value: 15 },
        { name: "Loucura", value: 15 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/balon_greyjoy.png?raw=true",
      titles: [
        { name: "Rei das Ilhas de Ferro" },
        { name: "Senhor das Ilhas de Ferro" },
        { name: "Rei do Sal e da Rocha" },
      ],
    },
  });

  const theonGreyjoy = await prisma.character.create({
    data: {
      name: "Theon Greyjoy",
      houseId: greyjoy.id,
      atributes: [
        { name: "Força", value: 11 },
        { name: "Inteligência", value: 9 },
        { name: "Carisma", value: 8 },
        { name: "Lealdade", value: 6 },
        { name: "Coragem", value: 12 },
        { name: "Influência", value: 7 },
        { name: "Loucura", value: 10 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/theon_greyjoy.png?raw=true",
      titles: [
        { name: "Protegido de Winterfell" },
        { name: "Fedor" },
      ],
    },
  });

  const yaraGreyjoy = await prisma.character.create({
    data: {
      name: "Yara Greyjoy",
      houseId: greyjoy.id,
      atributes: [
        { name: "Força", value: 18 },
        { name: "Inteligência", value: 16 },
        { name: "Carisma", value: 14 },
        { name: "Lealdade", value: 17 },
        { name: "Coragem", value: 18 },
        { name: "Influência", value: 12 },
        { name: "Loucura", value: 3 },
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/yara_greyjoy.png?raw=true",
      titles: [
        { name: "Capitã do Mar Salgado" },
        { name: "Herdeira das Ilhas de Ferro" },
      ],
    },
  });

  const euronGreyjoy = await prisma.character.create({
    data: {
      name: "Euron Greyjoy",
      houseId: greyjoy.id,
      atributes: [
        { name: "Força", value: 14 },
        { name: "Inteligência", value: 12 },
        { name: "Carisma", value: 8 },
        { name: "Lealdade", value: 4 },
        { name: "Coragem", value: 19 },
        { name: "Influência", value: 16 },
        { name: "Loucura", value: 17 }
      ],
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/characters/euron_greyjoy.png?raw=true",
      titles: [
        { name: "Corvo do Olho" },
        { name: "Rei das Ilhas de Ferro" },
        { name: "O Sem Deus" },
      ],
    },
  });

  console.log("Casa e personagens criados, inserindo atores...");

  const actors = await Promise.all([
    prisma.actor.create({
      data: {
        name: "Kit Harington",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/kit_harington.png?raw=true",
        age: 37,
        characterId: jonSnow.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Sean Bean",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/sean_bean.png?raw=true",
        age: 65,
        characterId: eddardStark.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Michelle Fairley",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/michelle_fairley.png?raw=true",
        age: 60,
        characterId: catelynStark.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Richard Madden",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/richard_madden.png?raw=true",
        age: 38,
        characterId: robbStark.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Maisie Williams",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/maisie_williams.png?raw=true",
        age: 27,
        characterId: aryaStark.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Isaac Hempstead Wright",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/isaac_hempstead_wright.png?raw=true",
        age: 25,
        characterId: branStark.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Sophie Turner",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/sophie_turner.png?raw=true",
        age: 28,
        characterId: sansaStark.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Art Parkinson",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/art_parkinson.png?raw=true",
        age: 23,
        characterId: rickonStark.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Charles Dance",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/charles_dance.png?raw=true",
        age: 77,
        characterId: tywinLannister.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Peter Dinklage",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/peter_dinklage.png?raw=true",
        age: 55,
        characterId: tyrionLannister.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Lena Headey",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/lena_headey.png?raw=true",
        age: 51,
        characterId: cerseiLannister.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Nikolaj Coster-Waldau",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/nikolaj_coster_waldau.png?raw=true",
        age: 54,
        characterId: jaimeLannister.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Emilia Clarke",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/emilia_clarke.png?raw=true",
        age: 38,
        characterId: daenerysTargaryen.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Harry Lloyd",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/harry_lloyd.png?raw=true",
        age: 41,
        characterId: viserysTaregaryen.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Wilf Scolding",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/wilf_scolding.png?raw=true",
        age: 34,
        characterId: rhaegarTargaryen.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Peter Vaughan",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/peter_vaughan.png?raw=true",
        age: 93,
        characterId: aemonTargaryen.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "David Rintoul",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/david_rintoul.png?raw=true",
        age: 76,
        characterId: aerysTargaryen.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Mark Addy",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/mark_addy.png?raw=true",
        age: 60,
        characterId: robertBaratheon.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Stephen Dillane",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/stephen_dillane.png?raw=true",
        age: 67,
        characterId: stannisBaratheon.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Gethin Anthony",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/gethin_anthony.png?raw=true",
        age: 40,
        characterId: renlyBaratheon.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Jack Gleeson",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/jack_gleeson.png?raw=true",
        age: 32,
        characterId: joffreyBaratheon.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Dean-Charles Chapman",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/dean_charles_chapman.png?raw=true",
        age: 27,
        characterId: tommenBaratheon.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Nell Tiger Free",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/nell_tiger_free.png?raw=true",
        age: 25,
        characterId: myrcellaBaratheon.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Natalie Dormer",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/natalie_dormer.png?raw=true",
        age: 42,
        characterId: margaeryTyrell.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Finn Jones",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/finn_jones.png?raw=true",
        age: 36,
        characterId: lorrasTyrell.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Diana Rigg",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/diana_rigg.png?raw=true",
        age: 82,
        characterId: olennaTyrell.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "John Standing",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/john_standing.png?raw=true",
        age: 90,
        characterId: jonArryn.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Kate Dickie",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/kate_dickie.png?raw=true",
        age: 53,
        characterId: lysaArryn.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Lino Facioli",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/lino_facioli.png?raw=true",
        age: 24,
        characterId: robinArryn.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Pedro Pascal",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/pedro_pascal.png?raw=true",
        age: 49,
        characterId: oberynMartell.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Alexander Siddig",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/alexander_siddig.png?raw=true",
        age: 59,
        characterId: doranMartell.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Indira Varma",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/indira_varma.png?raw=true",
        age: 51,
        characterId: elliaMartell.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Tobias Menzies",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/tobias_menzies.png?raw=true",
        age: 50,
        characterId: edmureTully.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Chris Newman",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/chris_newman.png?raw=true",
        age: 71,
        characterId: hosterTully.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Clive Russell",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/clive_russell.png?raw=true",
        age: 79,
        characterId: brynndenTully.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "David Bradley",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/david_bradley.png?raw=true",
        age: 82,
        characterId: walderFrey.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Alexandra Dowling",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/alexandra_dowling.png?raw=true",
        age: 34,
        characterId: roslinFrey.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Patrick Malahide",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/patrick_malahide.png?raw=true",
        age: 79,
        characterId: balonGreyjoy.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Alfie Allen",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/alfie_allen.png?raw=true",
        age: 38,
        characterId: theonGreyjoy.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Gemma Whelan",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/gemma_whelan.png?raw=true",
        age: 43,
        characterId: yaraGreyjoy.id,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Pilou Asbæk",
        imageUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/actors/pilou_asbaek.png?raw=true",
        age: 42,
        characterId: euronGreyjoy.id,
      },
    }),
  ]);

  console.log("Casas, personagens e atores criados, inserindo castelos...");

  const winterfell = await prisma.castle.create({
    data: {
      name: "Winterfell",
      x: 47,
      y: 22,
      emoji: "🐺",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/winterfell.png?raw=true",
      history:
        "Winterfell é a ancestral sede da Casa Stark, localizada no coração do Norte. É um castelo imponente, cercado por uma muralha de pedra e protegido por um fosso.",
      houseId: stark.id,
    },
  });

  const fortalezaVermelha = await prisma.castle.create({
    data: {
      name: "Fortaleza Vermelha",
      x: 58,
      y: 60,
      emoji: "👑",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/red_keep.png?raw=true",
      history:
        "A Fortaleza Vermelha é a sede do Trono de Ferro e a residência oficial dos reis dos Sete Reinos, localizada em Porto Real.",
      houseId: baratheon.id,
    },
  });

  const pontaTempestade = await prisma.castle.create({
    data: {
      name: "Ponta tempestade",
      x: 67,
      y: 68.6,
      emoji: "🦌",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/ponta_tempestade.png?raw=true",
      history:
        "Ponta Tempestade é a sede ancestral da Casa Baratheon, conhecida por sua resistência às tempestades que açoitam a costa.",
      houseId: baratheon.id,
    },
  });

  const jardimDeCima = await prisma.castle.create({
    data: {
      name: "Jardim de cima",
      x: 29,
      y: 80,
      emoji: "🌹",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/jardim_de_cima.png?raw=true",
      history:
        "Jardim de Cima é a sede da Casa Tyrell, conhecida por seus belos jardins e pela fertilidade das Terras do Reach.",
      houseId: tyrell.id,
    },
  });

  const ninhoDaAguia = await prisma.castle.create({
    data: {
      name: "Ninho da Águia",
      x: 57,
      y: 48,
      emoji: "🦅",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/ninho_da_aguia.png?raw=true",
      history:
        "O Ninho da Águia é a sede da Casa Arryn, construído no topo das Montanhas da Lua, sendo considerado inexpugnável.",
      houseId: arryn.id,
    },
  });

  const lancassolar = await prisma.castle.create({
    data: {
      name: "Lançassolar",
      x: 46,
      y: 83,
      emoji: "☀️",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/lancassolar.png?raw=true",
      history:
        "Lançassolar é a sede da Casa Martell em Dorne, conhecida por sua arquitetura única e resistência ao calor do deserto.",
      houseId: martell.id,
    },
  });

  const correrrio = await prisma.castle.create({
    data: {
      name: "Correrrio",
      x: 38,
      y: 51.5,
      emoji: "🐟",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/correrrio.png?raw=true",
      history:
        "Correrrio é a sede da Casa Tully nas Terras Fluviais, estrategicamente localizada entre rios importantes.",
      houseId: tully.id,
    },
  });

  const asGemeas = await prisma.castle.create({
    data: {
      name: "As Gêmeas",
      x: 41,
      y: 41,
      emoji: "👯‍♀️",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/as_gemeas.png?raw=true",
      history:
        "As Gêmeas é a sede da Casa Frey, consistindo em duas torres conectadas por uma ponte sobre o Rio Tridente.",
      houseId: frey.id,
    },
  });

  const pike = await prisma.castle.create({
    data: {
      name: "Pike",
      x: 25,
      y: 45,
      emoji: "🐙",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/pike.png?raw=true",
      history:
        "Pike é a sede da Casa Greyjoy nas Ilhas de Ferro, construída em penhascos rochosos sobre o mar.",
      houseId: greyjoy.id,
    },
  });

  const rochedoCasterly = await prisma.castle.create({
    data: {
      name: "Rochedo Casterly",
      x: 32,
      y: 59,
      emoji: "🦁",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/rochedo_casterly.png?raw=true",
      history:
        "Rochedo Casterly é a ancestral sede da Casa Lannister, famosa por suas minas de ouro e sua imponente arquitetura.",
      houseId: lannister.id,
    },
  });

  const pedraoDragao = await prisma.castle.create({
    data: {
      name: "Pedra do Dragão",
      x: 70,
      y: 56,
      emoji: "🐉",
      imageUrl:
        "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/castles/pedra_do_dragao.png?raw=true",
      history:
        "Pedra do Dragão é a ancestral sede da Casa Targaryen, construída com pedra vulcânica e repleta de simbologia de dragões.",
      houseId: targaryen.id,
    },
  });

  console.log(
    "Casas, personagens, atores e castelos criados, inserindo livros..."
  );

  const books = await Promise.all([
    prisma.book.create({
      data: {
        title: "A Guerra dos tronos",
        volume: 1,
        coverUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/covers/a_game_of_thrones.png?raw=true",
        coverAlt:
          "Capa do livro Guerra dos Tronos - Dois homens na muralha de gelo contemplando o que há além dela.",
        synopsis:
          "O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem... e onde um inimigo morto é algo a ser admirado. Longe de casa e com a família dividida, Eddard se vê cada vez mais enredado nas intrigas mortais de Porto Real, sem saber que perigos ainda maiores espreitam a distância. Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.",
        releaseYear: 1996,
        rating: 4.8,
        pages: 592
      },
    }),
    prisma.book.create({
      data: {
        title: "A Fúria dos reis",
        volume: 2,
        coverUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/covers/a_clash_of_kings.png?raw=true",
        coverAlt:
          "Capa do livro Fúria dos Reis - Uma mulher vermelha queimando estátuas em uma fortaleza",
        synopsis:
          "Um cometa da cor de fogo e sangue corta os céus. E, da antiga cidadela de Pedra do Dragão às costas áridas de Winterfell, reina o caos. Em A fúria dos reis , seis facções disputam o controle de uma terra dividida e o direito de ocupar o Trono de Ferro de Westeros – e estão dispostos a encarar tempestades, levantes e guerras para isso. Nesta história, irmão trama contra irmão e os mortos se levantam para caminhar pela noite. Aqui, uma princesa se disfarça de menino órfão, um cavaleiro se prepara para encarar uma pérfida feiticeira e bárbaros descem das Montanhas da Lua para saquear os campos. Em",
        releaseYear: 1998,
        rating: 4.9,
        pages: 648
      },
    }),
    prisma.book.create({
      data: {
        title: "A Tormenta de espadas",
        volume: 3,
        coverUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/covers/a_storm_of_swords.png?raw=true",
        coverAlt:
          "Capa do livro Tormenta de Espadas - Uma legião de cavaleiros com estandartes coloridos chegando em um castelo com duas torres idênticas.",
        synopsis:
          "O futuro de Westeros está em jogo, e ninguém descansará até que os Sete Reinos tenham explodido em uma verdadeira tormenta de espadas. Dos cinco pretendentes ao trono, um está morto e outro caiu em desgraça, e ainda assim a guerra continua em toda sua fúria, enquanto alianças são feitas e desfeitas. Joffrey, da Casa Lannister, ocupa o Trono de Ferro, como o instável governante dos Sete Reinos, ao passo que seu rival mais amargo, lorde Stannis, jaz derrotado e enfeitiçado pelas promessas da Mulher Vermelha. O jovem Robb, da Casa Stark, ainda comanda o Norte, contudo, e planeja sua batalha contra os Lannister, mesmo que sua irmã seja refém deles em Porto Real. Enquanto isso, Daenerys Targaryen atravessa um continente deixando um rastro de sangue a caminho de Westeros, levando consigo os três únicos dragões existentes em todo o mundo. Enquanto forças opostas avançam para uma gigantesca batalha final, um exército de selvagens chega dos confins da civilização. Em seu rastro vem uma horda de terríveis criaturas místicas – os Outros: um batalhão de mortos-vivos cujos corpos são imparáveis.",
        releaseYear: 2000,
        rating: 4.9,
        pages: 832
      },
    }),
    prisma.book.create({
      data: {
        title: "O festim dos corvos",
        volume: 4,
        coverUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/covers/a_feast_for_crows.png?raw=true",
        coverAlt:
          "Capa do livro O Festim dos Corvos - Um navio chegando em uma cidade feita de ilhas",
        synopsis:
          "Há séculos os sete grandes reinos de Westeros se enfrentam em amargas disputas, batalhas e traições. Agora, com Joffrey Baratheon e Robb Stark fora da jogada e lordes insignificantes competindo pelas Ilhas de Ferro, a guerra que devorou o continente parece ter finalmente chegado ao fim. No entanto, como após todo grande conflito, não demora para que os sobreviventes, os bandidos, os renegados e os carniceiros avancem para disputar o espólio dos mortos. Por toda Westeros os lordes se agitam, formando alianças e fazendo planos, enquanto nomes conhecidos e desconhecidos se apresentam para tomar parte das danças políticas. Todos precisam lançar mão de suas habilidades e poderes para encarar os tempos de terror que se aproximam. Nobres e plebeus, soldados e feiticeiros, assassinos e saqueadores devem arriscar suas fortunas... e suas vidas, pois em um festim de corvos, muitos são os convidados ― e poucos os sobreviventes.",
        releaseYear: 2005,
        rating: 4.8,
        pages: 608
      },
    }),
    prisma.book.create({
      data: {
        title: "A dança dos dragões",
        volume: 5,
        coverUrl:
          "https://github.com/pedro-ols/me-in-westeros-front/blob/main/public/images/covers/a_dance_with_dragons.png?raw=true",
        coverAlt:
          "Capa do livro A Dança dos Dragões - Um pedinte fazendo uma súplica a uma rainha em um salão real.",
        synopsis:
          "É outono em Westeros, e a Guerra dos Cinco Reis parece finalmente entrar na reta final. Stannis Baratheon se instala no Norte e jura conquistar o apoio dos senhores da região para continuar sua luta pelo trono, embora seja atrapalhado pela invasão de homens de ferro em grande parte da costa. Na Muralha, Jon Snow é eleito o 998º Senhor Comandante da Patrulha da Noite, mas inimigos o cercam de todos os lados, tanto na Patrulha quanto para além da Muralha. Enquanto isso, Tyrion Lannister atravessa o Mar Estreito rumo a Pentos, sem objetivos definidos, sem aliados e cada vez mais sem opções. Na Baía dos Escravos, Daenerys Targaryen conquista a cidade de Meereen e decide ficar e governá-la, praticando as habilidades de liderança que serão tão necessárias quando partir para Westeros. No entanto, sua presença já foi notada por muitos senhores nos Sete Reinos, e das Ilhas de Ferro e de Dorne, de Vilavelha e das Cidades Livres, emissários estão a caminho, querendo se unir à sua causa e, se possível, usá-la para os próprios fins. Em todos os cantos conflitos ganham vida e traições vêm daqueles mais próximos. Guerreiros, selvagens, nobres e escravos – todos têm pela frente um longo inverno, enquanto destino, ambição e política ditam o ritmo da dança mais perigosa de todas.",
        releaseYear: 2011,
        rating: 4.8,
        pages: 832
      },
    }),
  ]);

  console.log(
    `Seed concluído! ${await prisma.house.count()} casas, ${await prisma.character.count()} personagens, ${await prisma.actor.count()} atores, ${await prisma.castle.count()} castelos e ${await prisma.book.count()} livros.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
