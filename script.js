const persons = [
  {
    id: 1,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    img: "./images/image-tanya.jpg",
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ",
  },
  {
    id: 2,
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    img: "./images/image-john.jpg",
    text: "“ I now feel so confident about starting up as a professional developer. If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. ”",
  },
  {
    id: 3,
    name: "Eva Ramos",
    job: "Front-end Developer",
    img: "./images/image-eva.jpg",
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  },
  {
    id: 4,
    name: "Stefan Jeo",
    job: "Junior Front-end Developer",
    img: "./images/image-stefan.jpg",
    text: "“ The depth the instructors go into is incredible. If you want to lay the best foundation possible I’d recommend taking this course. I now feel so confident about starting up as a professional developer. ”",
  }
]

const personName = document.querySelector('.name');
const job = document.querySelector('.job');
const image = document.querySelector('.main-image');
const para = document.querySelector('.para');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

let count = 0;

const personInf = (item) => {
  const personCount = persons[count];
  personName.textContent = personCount.name;
  image.src = personCount.img;
  para.textContent = personCount.text;
  job.textContent = personCount.job;
}

personInf(count);

previous.addEventListener ('click', () => {
  count--;
  count < 0 ? count = persons.length-1 : count;
  personInf(count);
})

next.addEventListener ('click', () => {
  count++;
  count > persons.length-1 ? count = 0 : count;
  personInf(count);
})