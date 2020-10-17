
function handleSubmit(event) {
    event.preventDefault();
    var year = document.getElementById("year");
    var branch = document.getElementById("branch");
    var batch = document.getElementById("batch");
    var sequence = document.getElementById("sequence");
    var pspace = document.getElementById("prn");
  
    var PRN = "";
    PRN = PRN + year.value.slice(2, 4);
    PRN = PRN + branch.value;
    if (batch.value.length === 1) {
      PRN = PRN + "0" + batch.value;
    } else {
      PRN = PRN + batch.value;
    }
    switch (sequence.value.length) {
      case 1:
        PRN = PRN + "000" + sequence.value;
        break;
      case 2:
        PRN = PRN + "00" + sequence.value;
        break;
      case 3:
        PRN = PRN + "0" + sequence.value;
        break;
      default:
        PRN = PRN + sequence.value;
    }
    pspace.innerHTML = PRN;
  }