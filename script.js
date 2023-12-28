let noteButton = document.querySelector('.noteButton')
let notetextInput = document.querySelector('.notetextInput')
let notesGroup = document.querySelector('.notesGroup')




noteButton.addEventListener('click', () => {
  if (notetextInput.value === '') {
    alert(`Please Write Down Title`)
  } else {
    let noteWriting = document.createElement('div')
    noteWriting.classList.add('noteWriting')
    noteWriting.innerHTML = `
<i class="fa-solid fa-trash" id="delteNote"></i>
<i class="fa-solid fa-floppy-disk" id="saveNote"></i>
<i class="fa-solid fa-arrow-up-right-from-square" id="openNote"></i>
    <header class="NoteTitle"><h1 class="headerTitle">${notetextInput.value}<h1></header>
    <div class="noteDescription"> </div>`;
    notesGroup.prepend(noteWriting);

    // Create a new timer
    const timerId = setTimeout(() => {
      noteWriting.classList.toggle('borderActive');
      storingNotes();
    }, 0000);

    // Cancel the timer after it has completed
    setTimeout(() => {
      noteWriting.classList.toggle('borderActive');
      clearTimeout(timerId);
      storingNotes();
    }, 3000);
   notetextInput.value = '';
    storingNotes();

  }
})



notesGroup.addEventListener('click', (elem) => {
  let editNoteWrite = elem.target.closest('.noteWriting');

  if (elem.target.closest('#delteNote')) {
    editNoteWrite.remove();
    storingNotes();
  } else if (elem.target.closest('#openNote')) {
    editNoteWrite.querySelector('.headerTitle').contentEditable = true;
    editNoteWrite.querySelector('.noteDescription').contentEditable = true;

    editNoteWrite.classList.toggle('active');
    if (editNoteWrite.classList.contains('active')) {
      editNoteWrite.querySelector('.headerTitle').contentEditable = true;
      editNoteWrite.querySelector('.noteDescription').contentEditable = true;
      storingNotes();


    } else {
      editNoteWrite.querySelector('.headerTitle').contentEditable = false;
      editNoteWrite.querySelector('.noteDescription').contentEditable = false;
      storingNotes();
    }
  } else if (elem.target.closest('#saveNote')) {
    storingNotes();
    alert('Do You want to Save The Notes?')

  }



});










//Add at local storage

const storingNotes = () => {
  localStorage.setItem('setNotes', notesGroup.innerHTML);
}

const gettingNotes = () => {
  notesGroup.innerHTML = localStorage.getItem('setNotes')
};
gettingNotes();





// notesGroup.addEventListener('click', (event) => {
//   if (event.target.matches('#closeNote')) {
//     event.target.closest('.noteWriting').remove();
//   } else {
//     return 0;
//   }
// });