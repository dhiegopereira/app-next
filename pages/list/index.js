function List({data}) {    
    return (
        <>
        <h1>Usuários</h1>
        {
            data.map(i => (
                <p key={i.email}>{i.name}/{i.email}</p>
            ))
        }
        </>
        
    )
}

export async function getStaticProps(context) {
    
        const data = require('../../utils/db.json')
    
    return {
      props: {data}, // will be passed to the page component as props
    }
  }

export default List;