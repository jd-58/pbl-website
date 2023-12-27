import logo from './PBLlogoWrittenOut.png';
export default function Navbar() {
return <nav className="nav">
    <a href="/" className="site-title"><img src={logo} className="App-logo" alt="logo"/></a>

    <ul>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/rules">Rules</a>
        </li>
    </ul>
</nav>

}