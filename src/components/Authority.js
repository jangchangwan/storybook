import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Authority() {
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    getPlayer();
  }, []);
  const getPlayer = () => {
    const recorder = document.getElementById('recorder');
    const player = document.getElementById('player');

    recorder.addEventListener('change', function (e) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      // Do something with the audio file.
      player.src = url;
    });
  };

  const getLocalStream = () => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true }) // audio : 마이크, video : 카메라
      .then((stream) => {
        window.localStream = stream;
        console.log(stream);
        setAuthError(null);
      })
      .catch((e) => {
        console.log('error : ' + e);
        setAuthError(e);
      });
  };

  return (
    <Container>
      <Input type="file" accept="audio/*" capture id="recorder" />
      <audio id="player" controls></audio>
      <Button onClick={getLocalStream}>마이크 권한 얻기</Button>
      {authError ? <ErrorBox>장치가 연결되어 있지 않습니다.</ErrorBox> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #fff;
`;

const Input = styled.input`
  margin-bottom: 20px;
`;

const ErrorBox = styled.div`
  margin: 20px;
  margin-top: 5px;
  color: red;
  font-weight: bold;
`;

const Button = styled.button`
  margin: 20px;
  margin-bottom: 0px;
  width: 200px;
  height: 32px;
`;
