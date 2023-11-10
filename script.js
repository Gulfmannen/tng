var contacts = [];

var errorSound = document.getElementById("errorSound"); // Detta är ett av ljuden som jag länkat till olika "buttons" med hjälp av html och javascript.

var saveButtonClickSound = document.getElementById("saveButtonClickSound");

// Detta är funktionen där man sparar en lista

function saveContact() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var errorMessage = document.getElementById("error-message");
  var marqueeElements = document.querySelectorAll("marquee");

  if (name && phone) {
    var contact = {
      name: name,
      phone: phone,
    };
    contacts.push(contact);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";

    errorMessage.textContent = "";

    displayContacts();

    saveButtonClickSound.play();

    marqueeElements.forEach(function (marqueeElement) {
      marqueeElement.stop();
    });

    // Startar både marquee elementen efter man klickar på "Spara"
    marqueeElements.forEach(function (marqueeElement) {
      marqueeElement.start();
    });
  } else {
    errorMessage.textContent =
      "Full Stop! Var god vänligen fyll i både fälten för att spara, Make it So.";

    errorSound.play();

    // Pausar båda marquee elementen när error meddelandes kommer upp
    marqueeElements.forEach(function (marqueeElement) {
      marqueeElement.stop();
    });
  }
}

// Detta är funktionen när man ska redigera det man har skrivit

function editContact(index) {
  var contact = contacts[index];
  var editButtonClickSound = document.getElementById("editButtonClickSound");

  document.getElementById("name").value = contact.name;
  document.getElementById("phone").value = contact.phone;

  contacts.splice(index, 1);

  editButtonClickSound.play();

  displayContacts();
}
// Detta är funktionen som gör att man kan ta bort en lista man har skapat

function removeContact(index) {
  var removeButtonClickSound = document.getElementById(
    "removeButtonClickSound"
  );

  contacts.splice(index, 1);
  removeButtonClickSound.play();

  displayContacts();
}

// Denna funktion är för att ta bort alla listor som genererats, med ett klick

function removeAllContacts() {
  var removeAllButtonClickSound = document.getElementById(
    "removeAllButtonClickSound"
  );

  contacts = [];
  removeAllButtonClickSound.play();

  displayContacts();
}

// Denna Funktion displayContacts() skapar och visar en lista över kontakter på en webbsida.
//Varje kontakt visas i en div med namn, telefonnummer samt en knapp för "redigera" och en knapp för att "radera".
//Funktionerna editContact(index) och removeContact(index) används för att ändra eller ta bort kontakter baserat på deras index i arrayen "contacts".

function displayContacts() {
  var contactListDiv = document.getElementById("contact-list");

  contactListDiv.innerHTML = "";

  for (var i = 0; i < contacts.length; i++) {
    var contact = contacts[i];
    var contactItem = document.createElement("div");

    // Css Style för den generade listan efter klickat "Spara"
    contactItem.style.fontFamily = "CrilleeEF-LightItalic";
    contactItem.style.fontSize = "20px";
    contactItem.style.backgroundColor = "#0098f6cc";
    contactItem.style.borderRadius = "15px";
    contactItem.style.border = "4px ridge  white";
    contactItem.style.width = "fit-content"; // Set width to fit content
    contactItem.style.margin = "10px"; // Add margin for spacing
    contactItem.style.padding = "15px"; // Add padding for spacing

    contactItem.innerHTML =
      "<strong>" +
      contact.name +
      "</strong> - " +
      contact.phone +
      ' <button onclick="editContact(' +
      i +
      ')">Redigera</button> ' +
      ' <button onclick="removeContact(' +
      i +
      ')">Radera</button>';

    contactListDiv.appendChild(contactItem);
  }
}
