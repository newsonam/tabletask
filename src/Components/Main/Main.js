import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DataTable from '../Table/DataTable';
import './Main.css';
function Main() {
    return (
        <div className="main">
            <div className='social-input'>
                <div className='socialmedia'>
                    <div className='insta'>
                        Instagram
                        <InstagramIcon />
                    </div>
                    <div className='youtube'>
                        Youtube
                        <YouTubeIcon />
                    </div>
                    <div className='tiktok'>
                        Tiktok
                        <MusicNoteIcon />
                    </div>
                </div>
                <input className="inputuser" type="text" placeholder='Search Users'/>
            </div>
            <div className='right-text'>
                Showing 1-10 of 119.3M profiles
            </div>
            <DataTable />
        </div>
    );
}

export default Main;
