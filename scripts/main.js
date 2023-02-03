const students = [
  {
    id: 1,
    name: "Harry",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Ron",
    house: "Gryffindor",
  },
  {
    id: 3,
    name: "Neville",
    house: "Gryffindor",
  },
  {
    id: 4,
    name: "Hermoine",
    house: "Gryffindor",
  },
  {
    id: 5,
    name: "Ernie",
    house: "Hufflepuff",
  },
  {
    id: 6,
    name: "Justin",
    house: "Hufflepuff",
  },
  {
    id: 7,
    name: "Hannah",
    house: "Hufflepuff",
  },
  {
    id: 8,
    name: "Susan",
    house: "Hufflepuff",
  },
  {
    id: 9,
    name: "Terry",
    house: "Ravenclaw",
  },
  {
    id: 10,
    name: "Mandy",
    house: "Ravenclaw",
  },
  {
    id: 11,
    name: "Michael",
    house: "Ravenclaw",
  },
  {
    id: 12,
    name: "Padma",
    house: "Ravenclaw",
  },
  {
    id: 13,
    name: "Draco",
    house: "Slytherin",
    expelled: true,
  },
  {
    id: 14,
    name: "Vincent",
    house: "Slytherin",
  },
  {
    id: 15,
    name: "Gregory",
    house: "Slytherin",
  },
  {
    id: 16,
    name: "Blaise",
    house: "Slytherin",
  },
];

// ### Utility Function
const renderToDom = (divId, htmlString) => {
  const displayContainer = document.querySelector(divId);
  displayContainer.innerHTML = htmlString;
};

const headerContent = () => {
  const htmlString = `<h1>Welcome to Hoggy Hoggy Warts, RELOADED!</h1>
  <p>
    Stupefy alohomora totalus orchideous inflamarae locomotor momentum
    serpensortia totalus. Patronum kedavra legiliments petrificus expecto
    banishing expecto patronum arania mobilicorpus petrificus.
  </p>
  <hr />
  <p>
    Think hard, wish hard, but you may be surprised, because I have the
    last say, for I am the sorting hat.
  </p>
  <div>
    <button
      id="newStudentButton"
      type="submit"
      class="btn btn-primary mb-3"
    >
      Let's Get Sortin'
    </button>
  </div>
  <div id="formContainer" class="hideForm">
    <h2>Enter First Year's First Name</h2>
    <form class="">
      <div class="mb-3 d-flex justify-content-center">
        <label for="inputStudent" class="col-sm-1 col-form-label"
          >Student:</label
        >
        <div class="col-sm-6">
          <input type="text" class="form-control" id="inputStudent" />
        </div>
        <div id="sortButton">
          <button type="submit" class="btn btn-primary mb-3">Sort</button>
        </div>
      </div>
      <div id="formValidation" style="color: red"></div>
    </form>
  </div>
  <div id="filterSection">
    <h2>Filter Students</h2>
    <div id="filterButtonContainer">
      <button id="allStudents" class="btn btn-secondary">All</button>
      <button id="gryffindorStudents" class="btn btn-danger">
        Gryffindor
      </button>
      <button id="hufflepuffStudents" class="btn btn-warning">
        Hufflepuff
      </button>
      <button id="ravenclawStudents" class="btn btn-primary">
        Ravenclaw
      </button>
      <button id="slytherinStudents" class="btn btn-success">
        Slytherin
      </button>
    </div>
  </div>`;

  renderToDom("#headerContent", htmlString);
};

// ### CREATE ARMY
const createArmy = (array) => {
  let htmlString = "";

  array.forEach((student) => {
    htmlString += `<div style="height: 200px; min-width: 200px;" class="card w-25 d-flex flex-column text-center ">
  <img src="assets/images/death_eaters_wbst.webp" class="card-img-top" alt="...">
  <div class="card-body">
       <p class="card-text">${student.name} joined <br/> Morty's Army</p>
    
  </div>
</div>`;
  });

  renderToDom("#mortysArmyContainer", htmlString);
};

// ### CREATE STUDENT CARDS
const createCard = (array) => {
  array.sort((a, b) => (a.house > b.house ? 1 : -1));
  let htmlString = "";

  //for (const student of array) {
  array.forEach((student) => {
    htmlString += ` <div style="height: 200px; min-width: 200px;" class="card w-25 d-flex flex-row text-center ">
      <div class="color--${student.house}1"></div>
      <div class="color--${student.house}2"></div>
      <div class="card-body">
         <h5 class="card-title">${student.name}</h5>
         <p class="card-text">${student.house}</p>
         <a id="expel--${student.id}" class="btn btn-sm btn-danger">Expel</a>
      </div>
     
   </div>
   `;
  });

  renderToDom("#firstYearsContainer", htmlString);
};

// ### New Student - SORT
const sortStudent = (event) => {
  event.preventDefault();
  const empty = document.querySelector("#formValidation");
  const studentName = document.querySelector("#inputStudent");
  if (studentName.value === "") {
    empty.innerHTML = "<p>Please enter a name in the field</p>";
  } else {
    empty.innerHTML = "";
    const randomSelect = Math.floor(Math.random() * 40);
    let randomHouse = "";

    if (randomSelect <= 10) {
      randomHouse = "Gryffindor";
    } else if (randomSelect > 10 && randomSelect <= 20) {
      randomHouse = "Hufflepuff";
    } else if (randomSelect > 20 && randomSelect <= 30) {
      randomHouse = "Ravenclaw";
    } else if (randomSelect > 30 && randomSelect <= 40) {
      randomHouse = "Slytherin";
    }

    const newStudent = {
      id: students.length + 1,
      name: studentName.value,
      house: randomHouse,
    };
    students.push(newStudent);
    createCard(students);
  }
  document.querySelector("form").reset();
};

const eventListenerIntialize = () => {
  const sortButton = document.querySelector("#sortButton");
  sortButton.addEventListener("click", sortStudent);

  // ### SHOW HIDE FORM
  const newStudentButton = document.querySelector("#newStudentButton");
  // *** A way to toggle a class on and off on an element ***
  newStudentButton.addEventListener("click", () => {
    const toggleShow = document.querySelector(".hideForm");
    toggleShow.classList.toggle("showForm");
  });

  // ### FILTER BUTTONS
  const all = document.querySelector("#allStudents");
  const gryffindorStudents = document.querySelector("#gryffindorStudents");
  const hufflepuffStudents = document.querySelector("#hufflepuffStudents");
  const ravenclawStudents = document.querySelector("#ravenclawStudents");
  const slytherinStudents = document.querySelector("#slytherinStudents");

  all.addEventListener("click", () => {
    createCard(students);
  });

  gryffindorStudents.addEventListener("click", () => {
    const griff = students.filter((student) => student.house === "Gryffindor");
    createCard(griff);
  });

  hufflepuffStudents.addEventListener("click", () => {
    const huff = students.filter((student) => student.house === "Hufflepuff");
    createCard(huff);
  });

  ravenclawStudents.addEventListener("click", () => {
    const raven = students.filter((student) => student.house === "Ravenclaw");
    createCard(raven);
  });

  slytherinStudents.addEventListener("click", () => {
    const slytherin = students.filter(
      (student) => student.house === "Slytherin"
    );
    createCard(slytherin);
  });

  //#### EXPEL STUDENT
  const expelled = document.querySelector("#firstYearsContainer");
  const army = [];
  expelled.addEventListener("click", (event) => {
    const toggleArmy = document.querySelector(".hideExpelled");
    toggleArmy.classList.add("showExpelled");

    if (event.target.id.includes("expel")) {
      const [, studentId] = event.target.id.split("--");

      const expelStudent = students.findIndex(
        (student) => student.id === Number(studentId)
      );
      let expelled = students.splice(expelStudent, 1);
      army.push(expelled[0]);
    }
    army.sort((a, b) => (a.name > b.name ? 1 : -1));
    createArmy(army);
    createCard(students);
  });
};

const appStart = () => {
  createCard(students);
  // DISPLAY HEADER CONTENT
  headerContent();
  eventListenerIntialize();
};

appStart();
