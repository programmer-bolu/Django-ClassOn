const formSections = document.querySelectorAll('.form-section');
const nextButtons = document.querySelectorAll('.next');
const previousButtons = document.querySelectorAll('.previous');
const progressCircle = document.querySelector('.progress-circle');
const progressText = document.querySelector('.progress-text');

let currentSection = 0;

function showSection(index) {
    formSections.forEach((section, i) => {
        section.style.display = i === index ? 'block' : 'none';
    });
    updateProgress(index);
}

function validateSection(index) {
    const inputs = formSections[index].querySelectorAll('input');
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }
    return true;
}

function updateProgress(index) {
    const percentComplete = Math.round(((index + 1) / formSections.length) * 100);
    progressCircle.style.background = `conic-gradient(#139fd7 ${percentComplete}%, #ddd ${percentComplete}%)`;
    progressText.textContent = `${percentComplete}%`;
}

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (validateSection(currentSection)) {
            if (currentSection < formSections.length - 1) {
                currentSection++;
                showSection(currentSection);
            }
        }
    });
});

previousButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentSection > 0) {
            currentSection--;
            showSection(currentSection);
        }
    });
});

showSection(currentSection);