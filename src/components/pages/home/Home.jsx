import React,{Component,Fragment} from 'react'
import './Home.css';


class Home extends Component{
    render(){
        
        return (
            <Fragment>
                    <div class="row-top">
                        <div class="page-name">
                            <h2>Data</h2>
                            <h2>Center  #1</h2>
                            <hr/>
                            <span>Intiland Tower</span>
                        </div>
                        <div class="table-log">

                        </div>
                    </div>

                    <div class="row">
                        <div class="card-available">
                            <div class="icon-card">
                                <i class="fas fa-bolt"></i>
                            </div>
                            <div class="count">
                                <h3>4</h3>
                            </div>
                            <div class="label">
                                <span>Full Rack</span>
                                <br/>
                                <span>Available</span>
                            </div>
                        </div>

                        <div class="card-available-2">
                                    <div class="icon-card">
                                    </div>
                                    
                                    <div class="count">
                                        <h3>8</h3>
                                    </div>
                                    
                                    <div class="label">
                                        <span>Legran</span>
                                        <br/>
                                        <span>Available</span>
                                    </div>

                        </div>
                            <div class="card-infrastructure">
                                <div class="label-infrastructure">
                                <div class="icon-card">
                                </div>
                                <div class="label">
                                    <h4>Infrastructure</h4>
                                </div>
                            </div>

                            <div class="content-infrastructure">
                                <div class="infra">
                                    <div class="count">9</div>
                                    <div class="icon-card"></div>
                                </div>
                                <div class="infra">
                                    <div class="count">4</div>
                                    <div class="icon-card"></div>
                                </div>
                                <div class="infra">
                                    <div class="count">5</div>
                                    <div class="icon-card"></div>
                                </div>
                                <div class="infra">
                                    <div class="count">10</div>
                                    <div class="icon-card"></div>
                                </div>
                                <div class="infra">
                                    <div class="count">8</div>
                                    <div class="icon-card"></div>
                                </div>
                                <div class="infra">
                                    <div class="count">14</div>
                                    <div class="icon-card"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        <div class="column-1">
                            <div class="card-analytics">
                                chart js
                            </div>
                            <div class="card-analytics">
                                chart js
                            </div>
                        </div>

                        <div class="column-2">
                            <div class="card-customer">
                                <div class="card-header"> customer
                                </div>
                                <div class="card-customer-content">
                                chart
                                </div>
                            </div>
                            <div class="card-amphere">
                                chart amphere
                            </div>
                        </div>

                    </div>
                
            </Fragment>
            )
    }
}

export default Home;