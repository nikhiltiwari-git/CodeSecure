import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import '../App.css';

const Home = () => {

    const username = 'temp';
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('New room created!');
    };

    const joinRoom = () => {
        if (!roomId  ) {
            toast.error('Room Id is required');
            return;
        }
        if (!username) {
            toast.error('Username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <>
        <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

        <div className="homePageWrapper">
            <div className="formWrapper">
                <h4 className="mainLabel">Have a Room Id</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <h4 className="mainLabel">Create a Room Id</h4>
                    <button className="btn joinBtn" onClick={createNewRoom}>
                        Create
                    </button>
                </div>
            </div>
            <footer>
                <h4>
                    Built with 🖤 by CodeSecure
                </h4>
            </footer>
        </div>
        </>
    );
};

export default Home;
