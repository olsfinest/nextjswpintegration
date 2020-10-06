import Layout from '../components/Layout';
import Prices from '../components/Prices';
import Post from '../components/Post';

const App = (props) =>  (
    <Layout>
        <div className="row">
            <div className="container">
                <div className="col-md-12">
                <h1>Recent Blogs</h1>
                </div>
               
                <Post />

            </div>
        </div>    
    </Layout>

);

App.getInitialProps = async function(query) {

    const res = await fetch('https://www.baguiotransient.net/olsfinesttest/wp-json/wp/v2/posts' + query);
    const data = await res.json();

    return {
        bpi: data.bpi
    }

}

export default App;