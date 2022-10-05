import { useEffect, useState } from 'react';

export default function Contact() {

    const [list, setList] = useState([]);    

    useEffect(() => {
        const getList = async() => {
            const body = await fetch('/api/user');
            const json = await body.json();
            setList(json);
        }        
        getList();
    }, []);
    return (
        <>
        <h1>Usuários</h1>
        {
            list.length && list.map(i => (
                <p key={i.email}>{i.name}/{i.email}</p>
            ))
        }
        </>
        
    )
}