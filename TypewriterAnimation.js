class TypewriterAnimation {
    textContainer;
    sentences;
    sentencesCount = 0;
    cssAnim;
    delayTime;
    waitTime;
    hasIntro = false;

    constructor(textContainer, sentences, cssAnim, delayTime, waitTime, hasIntro) {
        this.textContainer = document.querySelector(textContainer);
        this.sentences = sentences;
        this.cssAnim = cssAnim;
        this.delayTime = delayTime;
        this.waitTime = waitTime;
        this.hasIntro = hasIntro;
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
            if (this.hasIntro) {
                if (this.sentencesCount == 0) {
                    letterContainer.classList.add('typewriter-letter-big');
                }
                else {
                    letterContainer.classList.remove('typewriter-letter-big');
                }
            }

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