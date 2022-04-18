const tagsEle = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== ' ').map(tag => tag.trim());

    tagsEle.innerHTML = '';
    tags.forEach(tag => {
        const tagEle = document.createElement('span');
        tagEle.classList.add('tag');
        tagEle.innerHTML = tag;
        tagsEle.appendChild(tagEle)
    })
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = randomPicker()

        highlight(randomTag);
        setTimeout(() => {
            unHighlight(randomTag)
        }, 100)
    }, 100);
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTags = randomPicker();
            highlight(randomTags)
        }, 100)
    }, times * 100)
}

function randomPicker() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag) {
    tag.classList.add('hightlight');
}

function unHighlight(tag) {
    tag.classList.remove('hightlight');
}