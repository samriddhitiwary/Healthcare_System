import React, { useEffect } from 'react';
import Header from '../Header/Header';

const ConsultOnline = () => {
  useEffect(() => {
    const initJitsi = () => {
      const domain = 'meet.jit.si';

      
      const userData = JSON.parse(sessionStorage.getItem("userdata"));
      const userName = userData ? userData.fname + userData.lname : 'Default Name'; 

      const options = {
        roomName: 'MyCustomRoomName', 
        width: '100%',
        height: 700,
        parentNode: document.getElementById('jitsi-container'),
        userInfo: {
          displayName: userName,
        },
      };

      const api = new window.JitsiMeetExternalAPI(domain, options);

      api.addEventListener('readyToClose', () => {
        console.log('Meeting ended');
      });

      return api;  
    };

    let apiInstance = null;

    
    if (window.JitsiMeetExternalAPI) {
      apiInstance = initJitsi();
    } else {
      console.error('JitsiMeetExternalAPI is not available');
    }

   
    return () => {
      if (apiInstance) {
        apiInstance.dispose(); 
      }
    };

  }, []);

  return (
    <div>
      <Header/>
      <h1 className="text-xl font-bold" style={{ marginTop:"2.5%"}}><b>Joining the Video Conference</b></h1>
      <div id="jitsi-container" className="mt-5" />
    </div>
  );
};

export default ConsultOnline;
