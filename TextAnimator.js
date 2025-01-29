class TextAnimator {
    textContainer;
    sentenceContainer;
    sentences;
    sentencesCount = 0;
    hasIntro = false;

    constructor(textContainer, sentences, hasIntro) {
        this.textContainer = document.querySelector(textContainer);
        this.sentences = sentences;
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
            letterContainer.classList.add('anim');
            letterContainer.style.animationDelay = i / 20 + 's';
            this.sentenceContainer.appendChild(letterContainer);
        }

        this.sentencesCount++;
    }

    run() {
        this.animate();
        setInterval(() => this.animate(), 5000);
    }
}