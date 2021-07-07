import planets from '../../../data.json'

export default function planetHandler({ query: { name } }, res) {
  const planet = planets.filter((p) => p.name === name)
    
  //Planet with name exists
  if (planet.length > 0) {
    res.status(200).json(planet[0]);
  } else {
    res.status(404).json({ message: `Planet with name: ${name} not found.` })
  }
}
