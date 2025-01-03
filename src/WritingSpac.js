import React,{useState} from 'react';
import './WritingSpace.css';
import PoemForm from './PoemForm';
import { Drawer } from 'antd';
function WritingSpace() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="writing" style={{paddingTop:'10%'}}>
      <h2></h2>
      <div style={{display:'flex',justifyContent:'space-evenly',width:'98%',padding:'10px'}}>
       <img className='image' src='https://img.freepik.com/premium-vector/illustartion-coloring-book-page-woman-study_469760-15098.jpg?w=740' alt=''/>
        <div className='writesomething' >
          <h3>Connect to your thoughts and share it with other poets. Write down your mind with a touch of <span>rythm</span> .</h3>
        </div>
      </div>
      <button className='buttonwrite' onClick={showDrawer}>Write</button>
      <Drawer
              title="Your Cart"
              placement="right"
              onClose={onClose}
              open={visible}
              width={500} // Adjust the width as needed
            >
              <PoemForm/>
            </Drawer>
    </div>
  );
}

export default WritingSpace;
