let selectedCharacter = null;

function showMessage(messageId) {
  document.getElementById(messageId).style.display = 'block';
}

function hideMessage(messageId) {
  document.getElementById(messageId).style.display = 'none';
}

function selectCharacter(event, character, messageId, imageUrl) {
  event.stopPropagation();
  document.querySelectorAll('.character').forEach(el => el.classList.remove('selected'));
  const clickedElement = event.currentTarget;
  clickedElement.classList.add('selected');
  selectedCharacter = { name: character, image: imageUrl };
  document.getElementById('continue-button').style.display = 'block';
}

function deselectCharacter(event) {
  if (!event.target.closest('.character')) {
    document.querySelectorAll('.character').forEach(el => el.classList.remove('selected'));
    selectedCharacter = null;
    document.getElementById('continue-button').style.display = 'none';
  }
}

function continueToMap() {
  if (selectedCharacter) {
    const { name, image } = selectedCharacter;
    window.location.href = `https://anngeldouche.github.io/StardewP2/?character=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}`;
  }
}
