import Link from 'next/link';

export default function Header() {
    return (
        <ul>
            <li>
                <Link href="/create">
                    Cadastrar
                </Link>
            </li>
            <li>
                <Link href="/list">
                    Listar
                </Link>
            </li>
        </ul>
    )
}