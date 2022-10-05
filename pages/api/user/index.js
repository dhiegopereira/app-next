const db = require('../../../utils/db.json');
const fs = require('fs');


export default async function handler(req, res) {
  console.log(req.method);
  switch (req.method) {
    case 'GET':
      res.status(200).json(db);
      break;
    case 'POST':
      db.push(req.body);
      console.log(db);
      await fs.writeFileSync("./utils/db.json", JSON.stringify(db));
      res.status(200).json({message: 'OK'}); 
      break;
    case 'DELETE':
        const aux = db.filter(item => item.email !== req.body.email);
        fs.writeFile("../../../utils/db.json", aux);
        res.status(200).json({message: 'OK'}); 
        break;
    default: 
      res.status(200).json({ message: 'Tudo Ok!' });
  }
}

