const bcrypt = require("bcrypt");

const saltRounds = 10;

let sourceString = "cachorrinho";

// 1. Gerar um salt
const salt = bcrypt.genSaltSync(saltRounds);

// 2. Criptografar a string original
const hash = bcrypt.hashSync(sourceString, salt);

console.log("Senha em texto claro => ", sourceString);
console.log("Salt => ", salt);
console.log("Senha hasheada => ", hash);

// 3. Verificar se a original bate com a criptografada
console.log("Senhas batem? => ", bcrypt.compareSync(sourceString, hash));
console.log("Senhas batem? => ", bcrypt.compareSync("batatinha", hash));
