//import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';  //  //import { Routes, Route, Link } from 'react-router-dom';
import {Header} from './components/Header'
import Modal from 'react-modal';
//import PortalExample from './components/PortalExample';

// import Home from './pages/Home';// import About from './pages/About';// import Contact from './pages/Contact';
//let count = 0;  let itemsList = []
//let countVal = 0; //let disableStr = false; //let {isLoggedIn} = false
let nextId = 0;
let checkduplicates = false;
let optArtist = 0;

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#414551', 
    width:'200px'
  },
};

Modal.setAppElement('#root');


Header.defaultProps = {
  title:'Default Title'
}

function Action(){  
  //function handlePick () {  alert('Guess Click'); }
  return (   ''   );
}

function Options(props){  
  // let spacing = '10'
  // function handleRemoveAll(){  itemsList=[]; props.options.length=0 } 
  // return (    
  // <span style={{marginLeft: spacing+'px'}}>
  //    <button onClick={handleRemoveAll.bind(this)}> Remove All 123</button>
  //      { props.options.map((optt)=> <Option key={optt} optionTxt={optt}/>   )}    
  // </span>
  // );
}

function Option(props){  
  return (    <div className='mb-10 pt-10'>    {props.optionTxt}  </div>    );
}

function AddOption(props){  
  function submitFn(e){
    e.preventDefault();
    const optionVal = e.target.elements.itemname.value.trim();
    //if(optionVal) alert(optionVal)
  }
    return (    
      <div className='mb-10 pt-10'>    
        <form onSubmit={submitFn}>
          <input type="text" name="itemname" />
          <button>Add Option</button>
        </form>
      </div>    
    );
} 

function App (){
  React.state = {greeting : 'Click the button to receive greetings'} 

  let titleTxt = 'Indecision';
  let subTitleTxt = 'Put your life in the hands of a computer';
  let optionsArr = ['One','Two','Three']; // let showMsg = false; //'Listing the detailed message'

  const [name, setName] = useState('');
  let [optItems, setOptItems] = useState([]);
  //const [countVal, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  //const [rendered, setRendered] = useState(false);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  //let optItemsSess = localStorage.getItem('opttSess');  // console.log('---------');
  //optItems = JSON.parse(optItemsSess);
  
  //const [opts, setOpts] = useState(friendsArray); 

  function openModal() {
    setIsOpen(true);
    getRandomFn();
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

 // const incrementFn = () =>   { 
    //setCount(countVal + 1);    //const vvStr = 'GeeksForGeeks welcomes you !!';    //React.setState({greeting : vvStr}) 
 // }

  const getRandomFn = () => {   //console.log(optItems)
    if(optItems.length>0){    
      const randomNum = Math.floor(Math.random() * optItems.length);  
      let varOptArtist = optItems[randomNum];
     optArtist = varOptArtist.id
     //console.log(optItems[randomNum])
    }           
  }

  const addItemFn = () => {  
    //debugger
    checkduplicates = false;
    optItems.forEach(itemObj => {
      for (let key in itemObj) {
        if(key==='name' && itemObj[key]===name){   checkduplicates = true;   }      
      }
    })

    if(checkduplicates==false){
      setOptItems([ ...optItems,  { id: nextId++, name: name } ]);               
    }  
    setName('');
  }
  const removeItemFn = (event) => {   
    //console.log(event.target.id)
    let currentItem = parseInt(event.target.id);
    let newItemObj = optItems.filter((itemData) => {                          
      return itemData.id !== currentItem;
    });     
    setOptItems([]);
    optItems = newItemObj;
    setOptItems([...optItems]);      
  }
  const resetItemFn = () => { setName(''); setOptItems([]); nextId = 0;  localStorage.removeItem('opttSess') }

  //const decrementFn = () => setCount(countVal - 1);
  //const resetFn = () => setCount(0);  
  const toggleFn = () => setToggle(!toggle);
 // let duplicateCnt = 0;

  useEffect(()=>{ if(optItems.length === 0){  }   },[optItems]);

  localStorage.setItem('opttSess', JSON.stringify(optItems));     
  return (
    <div className=''>
      <Header subtitle={subTitleTxt}/>
        <div className='centerContainer'>         
            <div className='subContainer'>
              {/* <h3>Count : {countVal}</h3>
              <button onClick={incrementFn}>+1</button> &nbsp;           <button onClick={decrementFn}>-1</button> &nbsp;           <button onClick={resetFn}>Reset</button> &nbsp;  
              <br/><br/> {React.state.greeting} <br/><br/>
            <button onClick={toggleFn} > Toggle Content</button>
            <div>{toggle ?'Listing the detailed message':''}</div>          
            <Options options={optionsArr}/>  */}
        
            {optItems.length> 0 &&  
              <div className='random-sec pr-0' style={{background:'none'}}>              
                  <button onClick={openModal} className='show-random-div'> What should i do? </button>              
              </div>
            }   
            <div className="opt-container">
            <div className='random-sec pr-0' style={{display:'flex'}}>            
              <div className='option-sec'> Your Options</div> 
              <div>
                  <button className="removeall-cls" onClick={resetItemFn}>Remove All</button>
              </div>
            </div>
            <div>
            </div>
            <div className='add-item-div'>
              <div>
              { checkduplicates && <div className="item-exist">Item already exist !!!</div>}  
              </div>
              <div className='item-list'>
                <ul>
                    {
                      optItems.map(artist => ( 
                      <li key={artist.id}>
                        <span className='removeItemLblCls'>{artist.name}</span>
                        <button className='removeItemCls' id={artist.id} onClick={removeItemFn}>Remove</button>
                      </li> )
                      )
                    }
                  </ul>
              </div>
              <div style={{paddingTop:'20px'}}>
                <input value={name} className="input-text-item" onChange={e => setName(e.target.value)} />
                <button className="add-btn" onClick={addItemFn}>Add</button>
              </div>
            </div>
            </div>                
                
            {/* <div className="clipping-container"> <PortalExample /></div> */}

              <div id='modalDiv'>
                {/* <button onClick={openModal}>Open Modal</button> */}
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="You selected"
                >
                    <div>
                      <span ref={(_subtitle) => (subtitle = _subtitle)}> </span>                     
                    </div>
                  
                    <div className='sel-opt'> <b>Selected option: <br/><br/>{optArtist}</b>   </div>

                    <div className='close-sec' style={{marginTop:'30px',textAlign:'center'}}>                     
                        <button onClick={closeModal} className="close-modal">Close</button>                      
                      {/* <form>
                        <input type="text" name="modalinput"/>
                        <br/><br/>
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                      </form> */}
                    </div>
                </Modal>
              </div>        

            </div>
        </div>
    </div>
  );

  /*          <AddOption />      */
}
/*
this.removeSingleItem(e,'value')

function App_staticpages(){
  return (  
    <div className="App">
        <ul className="App-header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
    </div>   
    );
}
*/
function App_old() {

  const addOne = () => count++; 
  const subOne = () => count--;
  const resetVal = () => count = 0;

  //const [data, setData] = useState(null)

  const [count, setCount] = useState(0);

  // const xhr = new XMLHttpRequest();
  // xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');   //'https://api.github.com/users');        
  // xhr.onload = function() {
  //   if (xhr.status === 200) {  setData(JSON.parse(xhr.responseText));   }
  // };
  // xhr.send();
  
  let itemsList = ['One', 'Two'];
  var itemObj = { item1 :'Item 1', item2 : 'Item 2', location:'chennai'  }
  function getLocation(loc){   return <p style={{color:'red'}}>{loc}</p> }

  // function handleClick() {
  //   setCount(count + 1);
  // }

  const removeAll = () => itemsList=[]
  const showRandom = () => {
    const randomNum = Math.floor(Math.random() * itemsList.length);  alert(itemsList[randomNum])    //console.log(randomNum)
  }
  const onFrmSubmit = (e) => { // console.log(e)
      e.preventDefault();
 
      let optVal = e.target.elements.itemName.value
      if(optVal){
        itemsList.push(optVal);
        e.target.elements.itemName.value='';
      }
      return optVal
    }
  
//if(data){
  return (   
    <div className="containerReact">
       <h1>Indecision App</h1>
 
       <button onClick={addOne}>Add +1 </button> <br/><br/>   <button onClick={subOne}>Minus -1 </button><br/><br/>       <button onClick={resetVal}>Reset</button>       <br/><br/><br/>
       <h3>Count : {count}</h3>

      {itemsList.length > 0 ?  ' Listing items': 'No Items listed'} 

      <br/><br/>
      <button disabled={itemsList.length > 0 ? false:true} onClick={showRandom}> Show Random items</button>  <button onClick={removeAll}> Remove All 456</button>
 
       <ul>
        {itemsList.map((ele, index)=> {
           return ( <li key={ele} style={{textTransform:'capitalize' }}>{ele}</li>  );
        })}
       </ul>

       <form onSubmit={onFrmSubmit}>
        <input type="text" name="itemName"></input>
        <button>Add Item</button>
       </form>

       {getLocation(itemObj.location)}

   
       {/* {data.map((element, index) => {
               return ( <div key={index}>  <h6 style={{textTransform:'capitalize' }}>{element?.title}</h6>   </div>  );
         })}  */}
     </div>
 );
//} 
}
export default App;