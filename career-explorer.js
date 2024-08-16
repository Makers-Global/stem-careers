
window.onload = function() {
    const pathSelect = document.getElementById('career-path-select');
    careerData.forEach((path, index) => {
        let option = new Option(path['career-category'] + ' - ' + path['career-path'], index);
        pathSelect.add(option);
    });
};

function showCategories() {
    const categorySelect = document.getElementById('career-category-select');
    categorySelect.innerHTML = '<option value="">Select a Career Category</option>';
    const selectedPathIndex = document.getElementById('career-path-select').value;
    if (selectedPathIndex) {
        const selectedPath = careerData[selectedPathIndex];
        selectedPath['career-list'].forEach((career, index) => {
            let option = new Option(career['career'], index);
            categorySelect.add(option);
        });
    }
    document.getElementById('career-name').textContent = '';
    document.getElementById('career-description').textContent = '';
}

function showCareers() {
    const selectedPathIndex = document.getElementById('career-path-select').value;
    const selectedCareerIndex = document.getElementById('career-category-select').value;
    if (selectedPathIndex && selectedCareerIndex) {
        const selectedCareer = careerData[selectedPathIndex]['career-list'][selectedCareerIndex];
        document.getElementById('career-name').textContent = selectedCareer['career'];
        document.getElementById('career-description').textContent = selectedCareer['description'];
        document.getElementById('career-description-sinhala').textContent = selectedCareer['description-sinhala'];
        document.getElementById('career-description-tamil').textContent = selectedCareer['description-tamil'];
        document.getElementById('career-image').src = selectedCareer['image'];
        document.getElementById('career-info').style.display = 'block';
    }
}
