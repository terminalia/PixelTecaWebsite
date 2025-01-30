class TypewriterAnimation {
    textContainer;
    sentences;
    sentencesCount = 0;
    cssAnim;
    delayTime;
    waitTime;

    constructor(textContainer, sentences, cssAnim, delayTime, waitTime) {
        this.textContainer = document.querySelector(textContainer);
        this.sentences = sentences;
        this.cssAnim = cssAnim;
        this.delayTime = delayTime;
        this.waitTime = waitTime;
    }

    animate() {
        if (this.sentencesCount >= this.sentences.length) {
            this.sentencesCount = 0;
        }

        this.textContainer.innerHTML = '';
        for (let i=0; i<this.sentences[this.sentencesCount].length; i++) {
            let letterContainer = document.createElement('span');
            letterContainer.innerHTML = this.sentences[this.sentencesCount][i];
            if (letterContainer.innerHTML == '%') {
                letterContainer.innerHTML = '"';
            }
            letterContainer.classList.add('typewriter-letter');
            letterContainer.style.animation = this.cssAnim + ' ' + this.delayTime + 's forwards';
            letterContainer.style.animationDelay = this.delayTime * i + 's';
            this.textContainer.appendChild(letterContainer); 
        }

        this.sentencesCount++;
    }

    run() {
        this.animate();
        setInterval(()=> this.animate(), this.waitTime);
    }

    runOnce() {
        this.animate();
    }
}