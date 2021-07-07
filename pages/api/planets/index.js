import planets from '../../../data.json'

export default function planetHandler({ query: { name } }, res) {
    res.status(200).json(planets);
}
