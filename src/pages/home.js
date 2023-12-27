import logo from './PBLlogoWrittenOut.png';

export default function Home() {
    return (

        <div className="App">
          <header className="App-header">

            <p>
              PBL Official Website
            </p>
    
          </header>
          <p className="PageContent">
            Test2
          </p>
          <a href="/" className="site-title"><img src={logo} className="logoInPage" alt="logo"/></a>
        </div>
      );
}