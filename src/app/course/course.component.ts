import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.style.scss']
})
export class CourseComponent implements OnInit {
  peerConnectionConfig = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302?transport=udp' },
      {
        urls: 'turn:numb.viagenie.ca:3478?transport=udp',
        username: 'macris120@gmail.com',
        credential: 'admin1'
      }
    ]
  };
  // video: HTMLVideoElement;
  @ViewChild('video')
  videoHtml: HTMLVideoElement;
  socket = new WebSocket('wss://stream-support.herokuapp.com/webRTCHandler');
  rtcPeer = new RTCPeerConnection(this.peerConnectionConfig);

  constructor() {}

  ngOnInit() {
    this.socket.onopen = () => {
      this.socket.send(JSON.stringify({ helloMessage: 'viewer' }));
      // this.videoHtml.play;
    };
    // this.socket.onmessage = gotMessageFromServer;
    console.log('rtcPeer: ');
    console.log(this.rtcPeer);
    console.log('VideoHTML: ');
    console.log(this.videoHtml);
    // this.videoHtml.srcObject;
    this.rtcPeer['onaddstream'] = event => {
      this.videoHtml.srcObject = event.stream;
    };
    this.socket['onmessage'] = mess => {
      this.gotMessageFromServer(mess);
      console.log('Send Mess');
    };
  }
  gotDescription(description) {
    console.log('got description');
    console.log(description);

    this.rtcPeer.setLocalDescription(description);
    this.socket.send(JSON.stringify({ sdp: description }));
  }
  createAnswerError(error) {
    console.log(error);
  }

  gotMessageFromServer(message) {
    console.log(message);

    const signal = JSON.parse(message.data);
    if (signal.sdp) {
      console.log('signal.sdp: ');
      console.log(signal.sdp);
      this.rtcPeer.setRemoteDescription(new RTCSessionDescription(signal.sdp));

      if (signal.sdp.type === 'offer') {
        this.rtcPeer
          .createAnswer()
          .then(() => {
            this.gotDescription(signal.sdp);
          })
          .catch(err => {
            console.log(err);
          });
      } else if (signal.ice) {
        console.log('signal.ice: ');
        console.log(signal.ice);
        this.rtcPeer.addIceCandidate(new RTCIceCandidate(signal.ice));
      }
    }
  }
}
