window.addEventListener("load", () => {
  let name = localStorage.getItem("name");
  let desig = localStorage.getItem("desig");
  let Phone = localStorage.getItem("Phone");
  let email = localStorage.getItem("email");
  let address = localStorage.getItem("address");
  let pass = localStorage.getItem("pass");
  let deg = localStorage.getItem("deg");
  let uni = localStorage.getItem("uni");
  let pass1 = localStorage.getItem("pass1");
  let deg1 = localStorage.getItem("deg1");
  let uni1 = localStorage.getItem("uni1");
  let pass2 = localStorage.getItem("pass2");
  let deg2 = localStorage.getItem("deg2");
  let uni2 = localStorage.getItem("uni2");
  let pass3 = localStorage.getItem("pass3");
  let deg3 = localStorage.getItem("deg3");
  let uni3 = localStorage.getItem("uni3");
  let skill1 = localStorage.getItem("skill1");
  let skill2 = localStorage.getItem("skill2");
  let skill3 = localStorage.getItem("skill3");
  let skill4 = localStorage.getItem("skill4");
  let skill5 = localStorage.getItem("skill5");
  let language1 = localStorage.getItem("lang1");
  let language2 = localStorage.getItem("lang2");
  let styear = localStorage.getItem("styear");
  let endyear = localStorage.getItem("endyear");
  let company = localStorage.getItem("company");
  let jobTitle = localStorage.getItem("jobTitle");
  let achv1 = localStorage.getItem("achv1");
  let achv2 = localStorage.getItem("achv2");
  let achv3 = localStorage.getItem("achv3");

  let resName: any = document.getElementById("resName");
  resName.textContent = name;

  let resDesig: any = document.getElementById("resDesig");
  resDesig.textContent = desig;

  let resPhone: any = document.getElementById("resPhone");
  resPhone.textContent = Phone;

  let resEmail: any = document.getElementById("resEmail");
  resEmail.textContent = email;

  let resAddress: any = document.getElementById("resAddress");
  resAddress.textContent = address;

  let resPass: any = document.getElementById("resPass");
  resPass.textContent = pass;

  let resDeg: any = document.getElementById("resDeg");
  resDeg.textContent = deg;

  let resUni: any = document.getElementById("resUni");
  resUni.textContent = uni;

  let resPass1: any = document.getElementById("resPass1");
  resPass1.textContent = pass1;

  let resDeg1: any = document.getElementById("resDeg1");
  resDeg1.textContent = deg1;

  let resUni1: any = document.getElementById("resUni1");
  resUni1.textContent = uni1;

  let resPass2: any = document.getElementById("resPass2");
  resPass2.textContent = pass2;

  let resDeg2: any = document.getElementById("resDeg2");
  resDeg2.textContent = deg2;

  let resUni2: any = document.getElementById("resUni2");
  resUni2.textContent = uni2;

  let resPass3: any = document.getElementById("resPass3");
  resPass3.textContent = pass3;

  let resDeg3: any = document.getElementById("resDeg3");
  resDeg3.textContent = deg3;

  let resUni3: any = document.getElementById("resUni3");
  resUni3.textContent = uni3;

  let resSkill1: any = document.getElementById("resSkill1");
  resSkill1.textContent = skill1;

  let resSkill2: any = document.getElementById("resSkill2");
  resSkill2.textContent = skill2;

  let resSkill3: any = document.getElementById("resSkill3");
  resSkill3.textContent = skill3;

  let resSkill4: any = document.getElementById("resSkill4");
  resSkill4.textContent = skill4;

  let resSkill5: any = document.getElementById("resSkill5");
  resSkill5.textContent = skill5;

  let resLang1: any = document.getElementById("resLang1");
  resLang1.textContent = language1;

  let resLang2: any = document.getElementById("resLang2");
  resLang2.textContent = language2;

  let resStartYear: any = document.getElementById("resStartYear");
  resStartYear.textContent = styear;

  let resEndYear: any = document.getElementById("resEndYear");
  resEndYear.textContent = endyear;

  let resCompany: any = document.getElementById("resCompany");
  resCompany.textContent = company;

  let resJobTitle: any = document.getElementById("resJobTitle");
  resJobTitle.textContent = jobTitle;

  let resAchv1: any = document.getElementById("resAchv1");
  resAchv1.textContent = achv1;

  let resAchv2: any = document.getElementById("resAchv2");
  resAchv2.textContent = achv2;

  let resAchv3: any = document.getElementById("resAchv3");
  resAchv3.textContent = achv3;
});






let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
  window.print();
});
