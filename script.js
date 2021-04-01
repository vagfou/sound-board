const sounds = ['arxidi', 'kantilakia', 'klaparxido', 'krouasan', 'mama_ponaw', 'olo_vlakeies', 'poustopapas', 'xristosas']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementById('buttons').
    appendChild(btn)
})