const repertoire = ['All Blues', 'All of Me', 'All the Things You Are', "Armando's Rhumba", 'Autumn Leaves', "Bag's Groove", "Birk's Works", 'Black Orpheus', 'Blue Bossa', 'Blue Monk', 'Body and Soul', 'But Not for Me', 'Cantaloupe Island', 'Caravan', 'Chameleon', 'Cherokee', 'Donna Lee', 'Doxy', 'Epistrophy', 'Equinox', 'Fly Me to the Moon', 'Footprints', 'Georgia on My Mind', 'Giant Steps', 'Girl From Ipanema', 'Hammer Head', 'I Got Rhythm', 'If I Were a Bell', 'In a Sentimental Mood', 'It Could Happen to You', "It's On", 'Little Sunflower', 'Mercy, Mercy, Mercy', 'Milestones', 'Misty', "Moment's Notice", 'Moonglow', 'My Funny Valentine', 'Naima', 'Nature Boy', 'Night in Tunisia', 'On Green Dolphin Street', 'On the Sunny Side of the Street', 'Ornithology', 'Round Midnight', 'So What', 'Someday My Prince Will Come', 'Song for My Father','Soulful', 'Spain', 'Star Eyes', 'Stella by Starlight', 'Strasbourg St. Denis', 'Sunny', 'Take Five', 'Take the A train', 'Tenor Madness', 'There Will Never Be Another You', 'This I Dig of You', 'This Masquerade', 'Wave']
document.getElementById('display-all').addEventListener('click', () => {
    document.getElementById('setlist-display').innerHTML = '';
    const repertoireList = document.createElement('ol');
    for (const piece of repertoire) {
        const newListItem = document.createElement('li');
        const newText = document.createTextNode(piece);
        newListItem.appendChild(newText);
        repertoireList.appendChild(newListItem);
    }
    document.getElementById('setlist-display').appendChild(repertoireList)
})
document.getElementById('generate-setlist').addEventListener('click', () => {
    document.getElementById('setlist-display').innerHTML = '';
    const repertoireCopy = [...repertoire];
    shuffle(repertoireCopy);
    const randomSetlist = document.createElement('ol');
    for (let i = 0; i < 10; i++) {
        const newListItem = document.createElement('li');
        const newText = document.createTextNode(repertoireCopy[i]);
        newListItem.appendChild(newText);
        randomSetlist.appendChild(newListItem);
    }
    document.getElementById('setlist-display').appendChild(randomSetlist);    
})
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
