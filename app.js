function submit(){
    const qualification = document.getElementById("Qualification").value;
    document.getElementById("Qualification").value = "SELECT QUALIFICATION";
    const laptop = document.getElementById("laptop").value;
    document.getElementById("laptop").value = "Do you have a laptop";
    const Address = document.getElementById("Address").value;
    document.getElementById("Address").value = "Address";
    const Gender = document.getElementById("Gender").value;
    document.getElementById("Gender").value = "SELECT GENDER";
    const DOB = document.getElementById("DOB").value;
    document.getElementById("DOB").value = "";
    const Fathers_CNIC = document.getElementById("Father's CNIC").value;
    document.getElementById("Father's CNIC").value = "";
    const CNIC = document.getElementById("CNIC").value;
    document.getElementById("CNIC").value = "";
    const Phone = document.getElementById("Phone").value;
    document.getElementById("Phone").value = "";
    const Email = document.getElementById("Email").value;
    document.getElementById("Email").value = "";
    const Name = document.getElementById("Name").value;
    document.getElementById("Name").value = "";
    const Father_Name = document.getElementById("Father Name").value;
    document.getElementById("Father Name").value = "";
    const Course = document.getElementById("Course").value;
    document.getElementById("Course").value = "SELECT COURSE";
    const City = document.getElementById("City").value;
    document.getElementById("City").value = "SELECT CITY";

    alert("Thank you for registering!");
}