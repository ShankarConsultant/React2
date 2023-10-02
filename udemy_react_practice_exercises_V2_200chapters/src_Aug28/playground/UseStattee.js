import React,{useEffect, useState} from 'react';

function UseStattee() {
    const styles = {
        width15: {
            width:'15%',
            display:'inline-block'
        }
    };
    const notesData = JSON.parse(localStorage.getItem('notes'));
    const [notes, setNotes] = useState(notesData || []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        setNotes([ 
                    ...notes, 
                    {title, body}
                ]);
        setTitle('');
        setBody('');
    }

    const removeNote = (title) => {         setNotes(notes.filter((note) => note !== title))    }

    useEffect(() => {
       localStorage.setItem('notes', JSON.stringify(notes))
    })

    return (
        <div className='mlml'>
            <b><u> Use State </u></b><br/><br/>
            {notes.map((note) => (
                <div key={note.title}>
                    <span style={styles.width15}> {note.title} </span>
                    <span style={styles.width15}> {note.body} </span>
                    <span style={{display:'inline-block',padding:'2px 5px',marginLeft:10, width: '8%',fontSize:'10px', border:'1px solid #456', backgroundColor:'#ff3f3f'}}>
                        <button style={{padding:0, border:0, fontSize:'10px', background:'none'}} onClick={() => removeNote(note)}>  
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
export default UseStattee;