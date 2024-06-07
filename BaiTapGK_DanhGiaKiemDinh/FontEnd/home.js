import BaoHiem from "../DkiBH/baohiem.js";
import User_Infor from "../KhaiBaoTT/khaibao.js";

document.addEventListener("DOMContentLoaded", () => {
  let customers = [
    {
      id: 1,
      name: "Nguyen Van A",
      age: 30,
      sex: "Nam",
      phone: "0123456789",
      address: "Hanoi",
      insuranceType: "Thường",
      insuranceDuration: 2,
      insuranceCost: 1000000,
    },
    {
      id: 2,
      name: "Tran Thi B",
      age: 25,
      sex: "Nữ",
      phone: "0987654321",
      address: "HCMC",
      insuranceType: "VIP",
      insuranceDuration: 3,
      insuranceCost: 2400000,
    },
    {
      id: 3,
      name: "Le Van C",
      age: 40,
      sex: "Nam",
      phone: "0234567890",
      address: "Danang",
      insuranceType: "Thường",
      insuranceDuration: 1,
      insuranceCost: 500000,
    },
    {
      id: 4,
      name: "Pham Thi D",
      age: 35,
      sex: "Nữ",
      phone: "0345678901",
      address: "Cantho",
      insuranceType: "VIP",
      insuranceDuration: 5,
      insuranceCost: 4000000,
    },
    {
      id: 5,
      name: "Hoang Van E",
      age: 28,
      sex: "Nam",
      phone: "0456789012",
      address: "Haiphong",
      insuranceType: "Thường",
      insuranceDuration: 4,
      insuranceCost: 2000000,
    },
  ];
  let nextId = 6; // Khởi tạo ID tiếp theo sau 5 người dùng mẫu

  document
    .getElementById("customer-form")
    .addEventListener("submit", saveCustomer);
  document.getElementById("search-btn").addEventListener("click", search);
  document.querySelector(".close-btn").addEventListener("click", closeModal); // Thêm sự kiện click cho nút đóng

  function openModal(mode, index = -1) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const customerForm = document.getElementById("customer-form");

    if (mode === "add") {
      modalTitle.textContent = "Đăng ký bảo hiểm";
      customerForm.reset();
      customerForm.dataset.index = -1;
      document.getElementById("customer-id").value = nextId; // Hiển thị ID mới
    } else if (mode === "edit") {
      modalTitle.textContent = "Chỉnh sửa khách hàng";
      const customer = customers[index];
      document.getElementById("customer-id").value = customer.id;
      document.getElementById("customer-name").value = customer.name;
      document.getElementById("customer-age").value = customer.age;
      document.getElementById("customer-gender").value = customer.sex;
      document.getElementById("customer-phone").value = customer.phone;
      document.getElementById("customer-address").value = customer.address;
      document.getElementById("customer-insurance").value =
        customer.insuranceType;
      document.getElementById("customer-years").value =
        customer.insuranceDuration;
      customerForm.dataset.index = index;
    }

    modal.style.display = "block";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  function saveCustomer(event) {
    event.preventDefault();

    const index = document.getElementById("customer-form").dataset.index;
    const user = new User_Infor(
      document.getElementById("customer-name").value,
      parseInt(document.getElementById("customer-age").value),
      document.getElementById("customer-gender").value,
      document.getElementById("customer-phone").value,
      document.getElementById("customer-address").value
    );
    const insurance = new BaoHiem(
      document.getElementById("customer-insurance").value,
      parseInt(document.getElementById("customer-years").value)
    );

    if (!user.isValidUser()) {
      alert("Thông tin người dùng không hợp lệ!");
      return;
    }

    if (!insurance.isValidTypeAndDuration()) {
      alert("Thông tin bảo hiểm không hợp lệ!");
      return;
    }

    const customer = {
      id: parseInt(document.getElementById("customer-id").value),
      name: user.name,
      age: user.age,
      sex: user.sex,
      phone: user.phone,
      address: user.add,
      insuranceType: insurance.type,
      insuranceDuration: insurance.duration,
      insuranceCost: insurance.calculateInsuranceCost(),
    };

    if (index === "-1") {
      customers.push(customer);
      nextId++; // Tăng ID tiếp theo
    } else {
      customer.id = customers[index].id; // Giữ nguyên ID khi chỉnh sửa
      customers[index] = customer;
    }

    renderTable();
    closeModal();
  }

  function renderTable() {
    const tbody = document.querySelector("#customer-table tbody");
    tbody.innerHTML = "";

    customers.forEach((customer, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.age}</td>
        <td>${customer.sex}</td>
        <td>${customer.phone}</td>
        <td>${customer.address}</td>
        <td>${customer.insuranceType}</td>
        <td>${customer.insuranceDuration}</td>
        <td>${customer.insuranceCost.toLocaleString()}</td>
        <td class="btn-container">
          <button class="btn edit-btn" onclick="openModal('edit', ${index})">Sửa</button>
          <button class="btn delete-btn" onclick="deleteCustomer(${index})">Xóa</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  function deleteCustomer(index) {
    customers.splice(index, 1);
    renderTable();
  }

  function search() {
    const searchInput = document
      .getElementById("search-input")
      .value.toLowerCase();
    const filteredCustomers = customers.filter(
      (customer) =>
        customer.id.toString().includes(searchInput) ||
        customer.name.toLowerCase().includes(searchInput)
    );

    const tbody = document.querySelector("#customer-table tbody");
    tbody.innerHTML = "";

    filteredCustomers.forEach((customer, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.age}</td>
        <td>${customer.sex}</td>
        <td>${customer.phone}</td>
        <td>${customer.address}</td>
        <td>${customer.insuranceType}</td>
        <td>${customer.insuranceDuration}</td>
        <td>${customer.insuranceCost.toLocaleString()}</td>
        <td class="btn-container">
          <button class="btn edit-btn" onclick="openModal('edit', ${index})">Sửa</button>
          <button class="btn delete-btn" onclick="deleteCustomer(${index})">Xóa</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Close modal when clicking

  // Close modal when clicking outside of it
  window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  };

  // Assign openModal and deleteCustomer to window to make them accessible in HTML
  window.openModal = openModal;
  window.deleteCustomer = deleteCustomer;

  // Render the table with the initial list of customers
  renderTable();
});
