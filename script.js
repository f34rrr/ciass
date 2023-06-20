const keys = ["CIA-1f644232-7033-4e53-9bb1-85a2f0084b43",
"CIA-0859fcc6-a102-4623-abe2-a5227a466810",
"CIA-98470509-a3f2-4a1a-b427-4d5553286802",
"CIA-8b50c52c-ee08-4112-ba60-48c4f599ee09",
"CIA-ce43144d-2c22-4023-a9be-daca79ac6c47"];
const inputkey = prompt('Key Login', '');



  if (keys.includes(inputkey)) {
  alert('Valid');
} else {
  alert('Invalid')
  window.location = "dashboard.html";
}
