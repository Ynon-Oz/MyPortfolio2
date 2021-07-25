import "./MyPortrait.css";
import myPic from '../../../Assets/Images/myPortrait-nobg.png';

function MyPortrait(): JSX.Element {
    return (
        <div className="MyPortrait">
			<img src={myPic} alt=""/>
        </div>
    );
}

export default MyPortrait;
