class TextAnimator {
    textContainer;
    sentenceContainer;
    sentences;
    sentencesCount = 0;
    hasIntro = false;
    delayTime;
    waitTime;
    cssAnim;

    constructor(textContainer, sentences, cssAnim, delayTime, waitTime, hasIntro) {
        this.textContainer = document.querySelector(textContainer);
        this.sentences = sentences;
        this.cssAnim = cssAnim;
        this.delayTime = delayTime;
        this.waitTime = waitTime;
        this.hasIntro = hasIntro;
        this.sentenceContainer = document.createElement('div');
        this.sentenceContainer.classList.toggle('sentence');
        this.textContainer.appendChild(this.sentenceContainer);
    }


    animate() {
        if (this.sentencesCount >= this.sentences.length) {
            this.sentencesCount = 0;
        }

        this.sentenceContainer.innerHTML = '';

        for (let i = 0; i < this.sentences[this.sentencesCount].length; i++) {
            let letterContainer = document.createElement("div");
            letterContainer.classList.add('letter');
            if (this.hasIntro) {
                if (this.sentencesCount == 0) {
                    letterContainer.classList.add('letter-big');
                }
                else {
                    letterContainer.classList.remove('letter-big');
                }
            }

            letterContainer.innerHTML = this.sentences[this.sentencesCount][i];
            if (letterContainer.innerHTML == ' ') {
                letterContainer.innerHTML = '&nbsp';
            }

            letterContainer.classList.add('startOpacity');
            // letterContainer.classList.add(this.cssAnim);
            letterContainer.style.animation = this.cssAnim + ' ' + this.delayTime + 's forwards';
            letterContainer.style.animationDelay = this.delayTime * i + 's';
            this.sentenceContainer.appendChild(letterContainer);
        }

        this.sentencesCount++;
    }

    run() {
        this.animate();
        setInterval(() => this.animate(), this.waitTime);
    }

    runOnce() {
        this.animate();
    }
}