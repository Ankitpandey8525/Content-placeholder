const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOha-IWupNhEyjXUwlyJrJzI4sbQHP_n_ow&usqp=CAU" alt="" />'
  title.innerHTML = 'Chandrayan-2'
  excerpt.innerHTML =
    'ISRO changes Chandrayan-2 success rates every day: Ex-officials slam Sivan'
  profile_img.innerHTML =
    '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvv-641YQSX1dYzYOhz4Bny6b86aWVC5UIkQ&usqp=CAU" alt="" />'
  name.innerHTML = 'K-Sivan'
  date.innerHTML = 'jun 15, 2018 to jun 14, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}