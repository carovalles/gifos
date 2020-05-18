// Variables Ventana Mis Guifos

const mis_guifos = document.getElementById("mis_guifos");
const ventana_camara = document.getElementById("ventana_camara");
const video_camara = document.getElementById("video_camara");
let recorder = {};

const cancelar_boton = document.getElementById("cancelar");
const comenzar_boton = document.getElementById("comenzar");
const mis_guifos_title = document.getElementById("mis_guifos_title");

cancelar_boton.addEventListener("click", e => {
    window.location.href = '/index_home.html';
})

comenzar_boton.addEventListener("click", e => {
    mis_guifos.style.display = "none";
    ventana_camara.style.display = "block";
    mis_guifos_title.style.display = "none";
})

// Generando el video

function getStreamAndRecord () { 

    navigator.mediaDevices.getUserMedia({   
    audio: false,
    video: { height: { max: 480 } }    
    })
    
    .then(function(stream) {    
    video.srcObject = stream;
    video_camara.setAttribute("src", )
    video.play();    
    })

}

getStreamAndRecord ()

// empieza a grabar
captureButton.addEventListener('click', () => { 
    //document.getElementById('testTitle').innerHTML = 'Capturando Tu Guifo'
    camera.style.display = 'none';
    captureButton.style.display = 'none';
    counter[0].style.display = 'flex';
    recording.style.display = 'flex';
    ready.style.display = 'flex';
    recorder.startRecording();
    timer()
})

// termina de grabar
ready.addEventListener('click', () => { 
    capturing.style.display = 'none';
    preview.style.display = 'block';
    clearInterval(countdown)
    recorder.stopRecording()
        .then(resp => {
            recorder.getBlob()
                .then(blob => {
                    form.append('file', blob, 'myGif.gif');
                    console.log(form.get('file'))
                    let urlCreator = window.URL || window.webkitURL;
                    let imageUrl = urlCreator.createObjectURL(blob);
                    document.querySelector("#previewImg").src = imageUrl;
                    document.querySelector("#otherPreviewImg").src = imageUrl;
                    mediaStream.getTracks().forEach(function (track) {
                        track.stop();
                    });
                })
        });
})