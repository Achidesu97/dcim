import React, {Component} from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { addDataToAPI,getDataFromAPI, updateDataAPI, deleteDataAPI } from '../../../config/redux/action';


class CustomerList extends Component{

    state = {
        title : '',
        content : '',
        date : '',
        textButton:'SIMPAN',
        noteId : ''
    }

    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getNotes(userData.uid)
    }

    handleSaveNotes = () => {
        const {title, content, textButton, noteId} = this.state;
        const {saveNotes,updateNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'));

        const data = {
            title : title,
            date : new Date().getTime(),
            content : content,
            userId : userData.uid
        }

        if(textButton === 'SIMPAN'){
            saveNotes(data)
        }else {
            data.noteId = noteId;
            updateNotes(data)
        }
        console.log(data);
    }


    onInputChange = (e,type) => {
        this.setState({
            [type] : e.target.value
        })
    }

    updateNotes = (note) => {
        console.log(note)
        this.setState({
            title: note.data.title,
            content: note.data.content,
            textButton:'UPDATE',
            noteId : note.id
        })
    }

    cancelUpdate = () => {
        this.setState({
            title: '',
            content: '',
            textButton:'SIMPAN'
        })
    }

    deleteNote = (e, note) => {
        e.stopPropagation();
        const {deleteNote} = this.props
        const userData = JSON.parse(localStorage.getItem('userData'));
        const data = {
            userId : userData.uid,
            noteId : note.id
        }
        deleteNote(data)
    }

    render(){

        const {title, content, date,textButton} = this.state;
        const {notes} = this.props;
        const {updateNotes,cancelUpdate, deleteNote} = this;
        console.log('notes :', notes)

        return(
            <>
            <h1>CUSTOMER LIST</h1>
            <hr/>
            <br/>
            <br/>
            <div className="container">
            <input type="text" className="title-name" value={title} onChange={(e)=>this.onInputChange(e,'title')} />
            <textarea name="" id="" cols="30" rows="10" className="input-content" value={content} onChange={(e)=>this.onInputChange(e,'content')}> </textarea>
            {
                textButton === 'UPDATE' ? (
                    <button className="save-button" onClick={cancelUpdate}>Cancel</button> 
                ): null
            }
            <button className="save-button" onClick={this.handleSaveNotes}>{textButton}</button> 
            <hr/>
            <br/>
            <br/>
            {
                notes.length > 0 ? (
                    <Fragment>
                        {
                            notes.map(note=>{
                                return (
                                    <div key={note.id} onClick={()=>updateNotes(note)}>
                                        <p className="title">{note.data.title}</p>
                                        <br/>
                                        <p className="date">{note.data.date}</p>
                                        <br/>
                                        <p className="content">{note.data.content}</p>
                                        <button className="delete-btn" onClick={(e)=>deleteNote(e, note)}>Delete</button>
                                    </div>
                                )

                            })

                        }

                    </Fragment>
                ) : null 

            }
            </div>
            </>
        )
    }
}

const reduxState = (state) => ({
    userData : state.user,
    notes : state.notes
})

const reduxDispatch = (dispatch) => ({
        saveNotes : (data) => dispatch(addDataToAPI(data)),
        getNotes : (data) => dispatch(getDataFromAPI(data)),
        updateNotes : (data) => dispatch(updateDataAPI(data)),
        deleteNote : (data) => dispatch(deleteDataAPI(data))
})
    

export default connect(reduxState, reduxDispatch) (CustomerList);