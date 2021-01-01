import React,{Component,Fragment} from 'react';
import './Home.css';


class Home extends Component{
    render(){
        
        return (
            <Fragment>

                    <div className="row-top">
                        <div className="page-name">
                            <h2>Data</h2>
                            <h2>Center  #1</h2>
                            <hr/>
                            <span>Intiland Tower</span>
                        </div>
                        <div className="table-log">

                        </div>
                    </div>

                    <div className="row">
                        <div className="card-available">
                            <div className="card-header">
                                <i className="fas fa-bolt"></i>
                            </div>
                            <div className="count">
                                <h3>4</h3>
                            </div>
                            <div className="label">
                                <span>Full Rack</span>
                                <br/>
                                <span>Available</span>
                            </div>
                        </div>

                        <div className="card-available-2">
                                    <div className="card-header">
                                    </div>
                                    
                                    <div className="count">
                                        <h3>8</h3>
                                    </div>
                                    
                                    <div className="label">
                                        <span>Legran</span>
                                        <br/>
                                        <span>Available</span>
                                    </div>

                        </div>
                            <div className="card-infrastructure">
                                <div className="card-header">
                                    <h4>Infrastructure</h4>
                                </div>

                            <div className="content-infrastructure">
                                <div className="infra">
                                    <div className="count">9</div>
                                    <div className="icon-card"></div>
                                </div>
                                <div className="infra">
                                    <div className="count">4</div>
                                    <div className="icon-card"></div>
                                </div>
                                <div className="infra">
                                    <div className="count">5</div>
                                    <div className="icon-card"></div>
                                </div>
                                <div className="infra">
                                    <div className="count">10</div>
                                    <div className="icon-card"></div>
                                </div>
                                <div className="infra">
                                    <div className="count">8</div>
                                    <div className="icon-card"></div>
                                </div>
                                <div className="infra">
                                    <div className="count">14</div>
                                    <div className="icon-card"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="column-1">
                            <div className="card-analytics">
                                <div className="card-header">
                                    <h4>Infrastructure</h4>
                                </div>
                            </div>
                            <div className="card-analytics">
                                 <div className="card-header">
                                    <h4>Infrastructure</h4>
                                </div>                            
                            </div>
                        </div>

                        <div className="column-2">
                            <div className="card-customer">
                                <div className="card-header"> 
                                customer
                                </div>
                                <div className="card-customer-content">
                                chart
                                </div>
                            </div>
                            
                            <div className="card-amphere">

                                <div className="card-top">
                                    <div className="card-header">
                                         amphere
                                    </div>
                                </div>

                                <div className="card-bottom">
                                    <div className="card-header">
                                         rack location
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                
            </Fragment>
            )
    }
}

export default Home;