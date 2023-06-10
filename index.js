/*
    Bài tập 1: Quản lý tuyển sinh
*/

document.getElementById("btnTinhDiem").onclick = () => {
  // input: (benchmark, district, object, iScore1, iScore2, iScore3) = number
  let benchmark = +document.getElementById("input-benchmark").value;
  let district = +document.getElementById("district").value;
  let object = +document.getElementById("object").value;
  let iScore1 = +document.getElementById("input-score1").value;
  let iScore2 = +document.getElementById("input-score2").value;
  let iScore3 = +document.getElementById("input-score3").value;
  // output: result: string
  let ketQua = admissions(
    benchmark,
    district,
    object,
    iScore1,
    iScore2,
    iScore3
  );
  // in kết quả ra màn hình
  document.getElementById("result").innerHTML = ketQua;
};
// progress:
function admissions(benchmark, district, object, score1, score2, score3) {
  let result = "";
  let total = score1 + score2 + score3 + district + object;
  if (score1 <= 0 || score2 <= 0 || score3 <= 0) {
    result =
      "Bạn đã không vượt qua được kì tuyển sinh do có điểm một môn nhỏ hơn hoặc bằng 0";
  } else if (total >= benchmark) {
    result = `Bạn đã vượt qua được kì tuyển sinh. Tổng điểm của bạn là ${total}`;
  } else {
    result = `Bạn đã không vượt qua được kì tuyển sinh. Tổng điểm của bạn là ${total}`;
  }
  return result;
}

/*
    Bài tập 2: Tính tiền điện
*/

document.getElementById("btnTinhTienDien").onclick = () => {
  // input: iName = string , numKw = number
  let iName = document.getElementById("input-name").value;
  let numKw = +document.getElementById("input-kw").value;
  // output: ketQua = string
  let ketQua = tinhTienDien(iName, numKw);
  // in kết quả ra màn hình
  document.getElementById("result1").innerHTML = ketQua;
  console.log(ketQua);
};
function tinhTienDien(name, soKw) {
  let result = "";
  let total = 0;
  if (soKw <= 0) {
    alert(`Số KW không hợp lệ vui lòng nhập lại`);
  } else if (soKw <= 50) {
    total = soKw * 500;
  } else if (soKw <= 100) {
    total = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    total = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  result = `Họ tên: ${name}, Tiền điện: ${total.toLocaleString()} VNĐ`;
  return result;
}

/*
    Bài tập 3: Tính thuế thu nhập cá nhân
*/

document.getElementById("btnTinhTienThue").onclick = () => {
  // input: iName = string, totalIncome = number, numOfDependent = number.
  let iName = document.getElementById("input-name2").value;
  let totalIncome = +document.getElementById("input-income").value;
  let numOfDependent = +document.getElementById("input-dependent").value;
  // output: ketQua = string.
  let ketQua = tinhTienThue(iName, totalIncome, numOfDependent);
  // in kết quả ra màn hình
  document.getElementById("result2").innerHTML = ketQua;
};
//progress
function tinhTienThue(name, total, dependent) {
  let result = "";
  let tienSauThue = 0;
  // Thu nhập chịu thế: incomeTax = (tổng thu nhập năm - 4triệu - số người phụ thuộc * 1triệu6)
  let incomeTax = total - 4e6 - dependent * 16e5;
  if (incomeTax <= 0) {
    alert(`Số tiền thu thập không hợp lệ`);
  } else if (incomeTax <= 6e7) {
    tienSauThue = incomeTax * 0.05;
  } else if (incomeTax <= 12e7) {
    tienSauThue = incomeTax * 0.1;
  } else if (incomeTax <= 21e7) {
    tienSauThue = incomeTax * 0.15;
  } else if (incomeTax <= 384e6) {
    tienSauThue = incomeTax * 0.2;
  } else if (incomeTax <= 624e6) {
    tienSauThue = incomeTax * 0.25;
  } else if (incomeTax <= 96e7) {
    tienSauThue = incomeTax * 0.3;
  } else {
    tienSauThue = incomeTax * 0.35;
  }
  result = `Họ tên: ${name}, Tiền thuế thu nhập cá nhân: ${tienSauThue.toLocaleString()} VNĐ`;
  return result;
}

/*
    Bài tập 4: Tính tiền cáp
*/

document.getElementById("btnTinhTienCap").onclick = () => {
  // input : codeCustomer = string, numChannel = number, numConnect = number.
  let codeCustomer = document.getElementById("input-code").value;
  let numChannel = +document.getElementById("input-channel").value;
  let numConnect = +document.getElementById("input-connect").value;
  let area = +document.getElementById("area").value;
  // output : tienCap = string
  let tienCap = "";
  if (area === 0) {
    alert(`Hãy chọn loại khách hàng`);
  } else if (area === 1) {
    tienCap = tinhTienCap(numChannel, numConnect, 4.5, 20.5, 7.5);
  } else {
    tienCap = tinhTienCap(numChannel, numConnect, 15, 75, 50);
  }
  document.getElementById(
    "result3"
  ).innerHTML = `Mã khách hàng: ${codeCustomer}, Tiền cáp: ${new Intl.NumberFormat(
    "en-US"
  ).format(tienCap)}$`;
};

function anHienConnect() {
  let connect = document.getElementById("input-connect");
  let area = +document.getElementById("area").value;
  if (area === 0 || area === 1) {
    connect.classList.add("d-none");
  } else {
    connect.classList.remove("d-none");
  }
}

function tinhTienCap(channel, connect, expenBill, expenServices, expenChannel) {
  let pay = 0;
  if (connect <= 10) {
    pay = expenBill + expenServices + channel * expenChannel;
  } else {
    pay =
      expenBill + expenServices + channel * expenChannel + (connect - 10) * 5;
  }
  return pay;
}
