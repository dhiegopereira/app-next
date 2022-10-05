let db = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Doe', email: 'doe@example.com' },
  { name: 'Zuck ', email: 'zuck@example.com'}
];

export default function handler(req, res) {
  console.log(req.method);
  switch (req.method) {
    case 'GET':
      res.status(200).json(db);
      break;
    case 'POST':
      db.push(req.body);
      res.status(200).json({message: 'OK'}); 
      break;
    case 'DELETE':
        const aux = db.filter(item => item.email !== req.body.email);
        db = aux;
        res.status(200).json({message: 'OK'}); 
        break;
    default: 
      res.status(200).json({ message: 'Tudo Ok!' });
  }
}

