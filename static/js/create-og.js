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