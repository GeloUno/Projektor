/**
 * Build by Maciek Krasowski
 */

class videoRTC {
    constructor() {
        var remoteVideo;
        var iceCandidates = [];
        var peerConnectionConfig = {
            iceServers: [{
                urls: [
                    "stun.l.google.com:19302",
                    "stun1.l.google.com:19302",
                    "stun2.l.google.com:19302",
                    "stun3.l.google.com:19302",
                    "stun4.l.google.com:19302",
                    "stun.ekiga.net",
                    "stun.ideasip.com",
                    "stun.rixtelecom.se",
                    "stun.schlund.de",
                    "stun.stunprotocol.org:3478",
                    "stun.voiparound.com",
                    "stun.voipbuster.com",
                    "stun.voipstunt.com",
                    "stun.voxgratia.org"
                ]
            },
            { urls: 'turn:numb.viagenie.ca:3478?transport=udp', username: 'macris120@gmail.com', credential: 'admin1' }]
        };
        var peerConnection = new RTCPeerConnection(peerConnectionConfig);
        //local
        //var socket = new WebSocket('wss://localhost:8443/webRTCHandler');
        //prod
        var socket = new WebSocket('wss://stream-support.herokuapp.com/webRTCHandler');
        socket.onopen = function () {
            socket.send(JSON.stringify({ helloMessage: "viewer" }));
        };
        socket.onmessage = gotMessageFromServer;
        peerConnection.onaddstream = gotRemoteStream;
        this.init = function (videoElementId, webSocketUrl) {
            remoteVideo = document.getElementById(videoElementId);
            if (webSocketUrl != undefined) {
                socket = new WebSocket(webSocketUrl);
            }
        };
        function gotRemoteStream(event) {
            console.log('got remote stream');
            console.log(event.stream);
            remoteVideo.srcObject = event.stream;
        }
        function gotDescription(description) {
            console.log('got description');
            peerConnection.setLocalDescription(description, function () {
                socket.send(JSON.stringify({ 'sdp': description }));
            }, function () { console.log('set description error'); });
        }
        function createAnswerError(error) {
            console.log(error);
        }
        function createOfferError(error) {
            console.log(error);
        }
        function gotMessageFromServer(message) {
            console.log(message);
            var signal = JSON.parse(message.data);
            if (signal.sdp) {
                peerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp), function () {
                    if (signal.sdp.type == 'offer') {
                        peerConnection.createAnswer(gotDescription, createAnswerError);
                    }
                });
                iceCandidates.forEach((candidate) => peerConnection.addIceCandidate(candidate));
            }
            else if (signal.ice) {
                iceCandidates.push(new RTCIceCandidate(signal.ice));
            }
        }
        setInterval(function () {
            socket.send(JSON.stringify({ 'beatMessage': 'check!' }));
        }, 4000);
    }
}
export { videoRTC };
