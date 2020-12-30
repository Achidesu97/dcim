import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addDataToAPI } from '../../../config/redux/action';


class CustomerList extends Component{

    state = {
        title : '',
        content : '',
        date : ''
    }

    handleSaveNotes = () => {
        const {title, content} = this.state;
        const data = {
            title : title,
            date : new Date(),
            content : content
        }
        console.log(data);
    }

    onInputChange = (e,type) => {
        this.setState({
            [type] : e.target.value
        })
    }

    render(){

        const {title, content, date} = this.state;

        return(
            <>
            <h1>CUSTOMER LIST</h1>
            <hr/>
            <br/>
            <br/>
            <div className="container">
            <input type="text" className="title-name" value={title} onChange={(e)=>this.onInputChange(e,'title')} />
            <br/>
            <textarea name="" id="" cols="30" rows="10" className="input-content" value={content} onChange={(e)=>this.onInputChange(e,'content')}> </textarea>
            <br/> 
            <button className="save-button" onClick={this.handleSaveNotes}>Simpan</button>
            <hr/>
            <br/>
            <br/>
            <p className="title">Title</p>
            <br/>
            <p className="date">30 Desember 2020</p>
            <br/>
            <p className="content">Content Notes</p>
            </div>
            </>
        )
    }
}

const reduxDispatch = (dispatch) => (
    {
        saveNotes : () => dispatch(addDataToAPI())
    }
)
    

export default connect(null, reduxDispatch) (CustomerList);