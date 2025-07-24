import React ,{useState}from 'react'
import './status.css'
import UpdateIcon from '@mui/icons-material/Update';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
const Status = () => {
    const [activebar, setactivebar] = useState('Pending')
    return (
    <div className='Status-Page'>
        <div className="statusPageWorksDiv">
            <div className="status-bar">
        <div className={`status-Title ${activebar === 'Pending' ? "activeBarStatus" : null}`} onClick={()=>{setactivebar('Pending')}}>Pending</div>
        <div className={`status-Title ${activebar === 'Completed' ? "activeBarStatus" : null}`} onClick={()=>{setactivebar('Completed')}}>Completed</div>
            </div>
            <div className="status-List">
            <div className="status-row-List">
                <div className="status-Name">
                    Nabeel mughal
                </div>
                <div className="status-Docter-detail">
                    <div className="status-docter-name">Mansoor ahmed</div>
                    <div className="status-docter-name">12-21-25</div>
                </div>
                <div className="status-btns">
                    <div className='Icons'>
                        <UpdateIcon/>
                        
                    </div>
                    <div className='Icons' style={{backgroundColor:"red"}}>
                        <DeleteIcon/>
                        
                    </div>
                    <div className='Icons' style={{backgroundColor:"yellow"}}>
                        <ArticleIcon/>
                        
                    </div>
                </div>


                
            </div>      
                        <div className="status-row-List">
                <div className="status-Name">
                    Nabeel mughal
                </div>
                <div className="status-Docter-detail">
                    <div className="status-docter-name">Mansoor ahmed</div>
                    <div className="status-docter-name">12-21-25</div>
                </div>
                <div className="status-btns">
                    <div className='Icons'>
                        <UpdateIcon/>
                        
                    </div>
                    <div className='Icons' style={{backgroundColor:"red"}}>
                        <DeleteIcon/>
                        
                    </div>
                    <div className='Icons' style={{backgroundColor:"yellow"}}>
                        <ArticleIcon/>
                        
                    </div>
                </div>


                
            </div>  
                        <div className="status-row-List">
                <div className="status-Name">
                    Nabeel mughal
                </div>
                <div className="status-Docter-detail">
                    <div className="status-docter-name">Mansoor ahmed</div>
                    <div className="status-docter-name">12-21-25</div>
                </div>
                <div className="status-btns">
                    <div className='Icons'>
                        <UpdateIcon/>
                        
                    </div>
                    <div className='Icons' style={{backgroundColor:"red"}}>
                        <DeleteIcon/>
                        
                    </div>
                    <div className='Icons' style={{backgroundColor:"yellow"}}>
                        <ArticleIcon/>
                        
                    </div>
                </div>


                
            </div>           
            </div> 
        </div>
    </div>
  )
}

export default Status