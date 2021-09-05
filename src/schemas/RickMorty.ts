const RickMortyQuery = `
    query Characters ($name: String!) {
        characters(filter: { name: $name }) {
            results {
                name,
                image
            }
        }
    }
`

export default RickMortyQuery
