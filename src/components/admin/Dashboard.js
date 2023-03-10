import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='container' style={{ marginTop: "200px" }}>

            <div className='row text-center mt-5'>
                <div className="card text-dark bg-success mx-2 col-6" style={{ maxWidth: "40%" }}>
                    <Link to='/products/add' style={{ textDecoration: "none" }}>
                        <div className="card-body text-white">
                            ADD PRODUCTS
                        </div>
                    </Link>
                </div>
                
            </div>

        </div>


    )
}

export default Dashboard;