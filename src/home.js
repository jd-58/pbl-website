import logo from './PBLlogoWrittenOut.png';

export default function Home() {
    return (

        <div className="App">
          <header className="App-header">

            <h1>
              PBL Official Website
            </h1>
    
          </header>
          <p className="pageContent">
            Welcome to the official website of the Pro Beerio League! This is a project started by Jacob, Emma, Mackenzie, Peter, Elias, and Brennan in order to
            keep the spirit of Beerio alive with everyone moving to different physical locations. This league will run off of a custom-built modpack made by Jacob
            in order to facilitate online Beerio (with non-alcoholic seltzer) matches! If you would like to learn more about how the league would be structured and what
            hardware/items you'd need to participate, head to the About page. For information on proposed rule sets, see the Rules page. This website is created and maintained
            by Jacob, but will require some advanced features once the league begins. If you are interested in helping out with the website, contact Jacob!
          </p>
          <a href="/" className="site-title"><img src={logo} className="logoInPage" alt="logo"/></a>
        </div>
      );
}