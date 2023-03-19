import Header from './Header';
import Body from './Body';

function Home() {

    return (
        <>
            <div className="Home">

                <div style={{ 'z-index': '10', 'position': 'sticky', 'top': '0' }}>
                    <Header />
                </div>
                <div>
                    <Body />
                </div>


            </div>
        </>
    );
}

export default Home;
