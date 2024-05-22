import Avatar from '@mui/material/Avatar';
import './Influencer.css';

function Influencer({namedata,imgdata}) {
  return (
    <div className="influencer">
       <Avatar alt="Remy Sharp" src={imgdata} />
       <div className='influencer-data'>
        <h4>{namedata}</h4>
        <h5>{namedata}</h5>
       </div>
    </div>
  );
}

export default Influencer;
