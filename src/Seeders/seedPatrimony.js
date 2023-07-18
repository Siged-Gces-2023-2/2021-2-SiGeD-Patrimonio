const Patrimony = require("../Models/PatrimonySchema.js");
const db = require("../config/dbConnect");

const patrimonies = [
  new Patrimony({
    name: "Mesa de Escritório",
    description: "Patrimônio: 0",
  }),
  new Patrimony({
    name: "Cadeira Ergonômica",
    description: "Patrimônio: 1",
  }),
  new Patrimony({
    name: "Computador Desktop",
    description: "Patrimônio: 2",
  }),
  new Patrimony({
    name: "Monitor de Alta Resolução",
    description: "Patrimônio: 3",
  }),
  new Patrimony({
    name: "Teclado sem Fio",
    description: "Patrimônio: 4",
  }),
  new Patrimony({
    name: "Mouse Óptico",
    description: "Patrimônio: 5",
  }),
  new Patrimony({
    name: "Impressora Multifuncional",
    description: "Patrimônio: 6",
  }),
  new Patrimony({
    name: "Armário de Arquivo",
    description: "Patrimônio: 7",
  }),
  new Patrimony({
    name: "Luminária de Mesa",
    description: "Patrimônio: 8",
  }),
  new Patrimony({
    name: "Telefone",
    description: "Patrimônio: 9",
  }),
  new Patrimony({
    name: "Quadro Branco",
    description: "Patrimônio: 10",
  }),
  new Patrimony({
    name: "Projetor Multimídia",
    description: "Patrimônio: 11",
  }),
  new Patrimony({
    name: "Cofre de Segurança",
    description: "Patrimônio: 12",
  }),
  new Patrimony({
    name: "Aparelho de Fax",
    description: "Patrimônio: 13",
  }),
  new Patrimony({
    name: "Calculadora de Mesa",
    description: "Patrimônio: 14",
  }),
  new Patrimony({
    name: "Fone de Ouvido com Microfone",
    description: "Patrimônio: 15",
  }),
  new Patrimony({
    name: "Organizador de Documentos",
    description: "Patrimônio: 16",
  }),
  new Patrimony({
    name: "Fragmentadora de Papel",
    description: "Patrimônio: 17",
  }),
  new Patrimony({
    name: "Lixeira de Reciclagem",
    description: "Patrimônio: 18",
  }),
  new Patrimony({
    name: "Agenda de Escritório",
    description: "Patrimônio: 19",
  }),
];

db.on("error", console.log.bind(console, "Error on connecting to MongoDB"));
db.once("open", () => {
  console.log("MongoDB is connected");
});

const patrimoniesLength = patrimonies.length;

patrimonies.forEach(async (patrimony, index) => {
  try {
    const result = await patrimony.save();
    if (index === patrimoniesLength - 1) {
      console.log("Patrimonies seeds done!");
      db.close();
    }
  } catch (error) {
    const err = new Error(`${error?.message}`);
    console.log(`Patrimony seed failed - ${err}`);
    db.close();
    process.exit(0);
  }
});
