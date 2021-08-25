const str = 'texto\ntexto\ntexto\ntexto'
document.getElementById('ta').value = str
const a = document.getElementById('ta').value.replace(/\\n/g, '<br>')
document.getElementById('dv').innerHTML = a