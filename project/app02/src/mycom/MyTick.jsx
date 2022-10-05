import './My.css';
import MyTime from './MyTime';

function MyTick() {
  return (
    <h2 className='myh2'>
      현재 시간
      <MyTime />
    </h2>
  );
}

export default MyTick;