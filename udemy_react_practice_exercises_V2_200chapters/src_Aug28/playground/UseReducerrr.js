import React,{useEffect, useState, useReducer} from 'react';

const notesReducer = (state, action) => {
    switch(action.type) {
        case 'LIST_NOTES':             
            return action.notes;
        case 'ADD_NOTE':
            return [
                        ...state,
                        { title:action.title,body:action.body }
                   ]
        case 'REMOVE_NOTE':
            return state.filter((note) => note.title !== action.title)
        default:
            return action.notes;
    }
}

function UseReducerrr() {
    const styles = {
        width15: {
            width:'15%',
            display:'inline-block'
        }
    };

    const notesData = JSON.parse(localStorage.getItem('notes'));
    const [notes, dispatch] = useReducer(notesReducer, notesData || []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        });
        // localStorage.setItem('notes', JSON.stringify(notes));            
        // setNotes([ 
        //             ...notes, 
        //             {title, body}
        //         ]);
        setTitle('');
        setBody('');
    }

    const removeNote = (title) => {         
        //setNotes(notes.filter((note) => note !== title))    
        dispatch({
            type: 'REMOVE_NOTE',
            title
        });
    }

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
     })

    // useEffect(() => {
    //     console.log('U E 1 =====> ');
    //     const notes = JSON.parse(localStorage.getItem('notes'));
    //     //console.log('U E 1 ==================> ');       // console.log(notes);

    //     if(notes){
    //         dispatch({type:'LIST_NOTES', notes})  //setNotes(notesData);
    //        // console.log('U E 1 ========================================> ');           // console.log(notes)
    //     }
    // },[]);

    // useEffect(() => {
    //         console.log('U E 2 ===========> ');
    //         console.log(notes);           
    //         //localStorage.setItem('notes', JSON.stringify(notes));            
    // },[notes]);

    return (
        <div className='mlml'>
            <b><u> Reducers</u></b><br/><br/>
            {notes.map((note) => (
                <div key={note.title}>
                    <span style={styles.width15}> {note.title} </span>
                    <span style={styles.width15}> {note.body} </span>
                    <span style={{display:'inline-block',padding:'2px 5px',marginLeft:10, width: '5%',fontSize:'10px', border:'1px solid #456', backgroundColor:'#ff3f3f'}}>
                        <button style={{padding:0, paddingLeft:10,border:0, fontSize:'10px', cursor:'pointer', background:'none'}} onClick={() => removeNote(note.title)}>  
                                Remove
                        </button>
                    </span>
                </div>
            ) )}
            <div style={{marginTop:30}}>
                <form onSubmit={addNote}>
                    <input value={title} onChange={(e)=> setTitle(e.target.value)} /> <br/><br/>
                    
                    <textarea value={body} onChange={(e) => setBody(e.target.value)} /><br/><br/>
                    <button> Add Note</button>
                </form>
            </div>
        </div>
    );
}
export default UseReducerrr;