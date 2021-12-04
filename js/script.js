const toggleTheme= document.getElementById('toggle-theme');
const toggleThemeIcon= document.getElementById('toggle-theme-icon');
const toggleThemeText= document.getElementById('toggle-theme-text');

const rootStyles= document.documentElement.style;
//console.log(rootStyles);

const toggleColors= document.getElementById('toggle-colors');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if(toggleThemeIcon.src.includes('/moon.svg')){
        toggleThemeIcon.src='/assets/icons/sun.svg'
        toggleThemeText.textContent= 'Light mode'
    } else {
        toggleThemeIcon.src='/assets/icons/moon.svg'
        toggleThemeText.textContent= 'Dark mode'
    }
})

toggleColors.addEventListener('click', (e) => {
    e.target.classList.contains('toggle-colors__item') &&
        // console.log(e.target.dataset.color);
        rootStyles.setProperty('--primary-color', e.target.dataset.color)
        
})