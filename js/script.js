const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump')
    
    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)
};


const loop  = setInterval(() => {

    const pipeposition = pipe .offsetleft;
    if(pipeposition <= 120){
        pipe .style .animation = 'none';
    }
}, 10);


document.addEventListener ('keydown', jump)