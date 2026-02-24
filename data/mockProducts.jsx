// initializes mock products and a default admin user list in localStorage
export function initializeMockData() {
  if (!localStorage.getItem("isdn_products")) {
    const products = [
      { id: "p1", name: "Crispy Corn Flakes", category: "Cereals", price: 320, image: "https://via.placeholder.com/120?text=Cereal" },
      { id: "p2", name: "Pure Mineral Water 1L", category: "Beverages", price: 80, image: "https://via.placeholder.com/120?text=Water" },
      { id: "p3", name: "Laundry Liquid 2L", category: "Cleaning", price: 650, image: "https://via.placeholder.com/120?text=Detergent" },
      { id: "p4", name: "Handwash 500ml", category: "Personal Care", price: 220, image: "https://via.placeholder.com/120?text=Handwash" },
      { id: "p5", name: "Chocolate Biscuits", category: "Snacks", price: 150, image: "https://via.placeholder.com/120?text=Biscuits" }
    ];
    localStorage.setItem("isdn_products", JSON.stringify(products));
  }

  if (!localStorage.getItem("isdn_users")) {
    const users = [
      { id: "u_admin", name: "Head Office", role: "head_office", nic: "000000000V", address: "Central", contact: "0110000000", province: "Central", email: "head@isdn.com", password: "headpass" },
      { id: "u_rdc", name: "RDC Staff", role: "rdc_staff", nic: "111111111V", address: "North", contact: "0111111111", province: "Northern", email: "rdc@isdn.com", password: "rdcpass" },
      { id: "u_driver", name: "Driver One", role: "driver", nic: "222222222V", address: "South", contact: "0112222222", province: "Southern", email: "driver@isdn.com", password: "driverpass" },
      { id: "u_customer", name: "Retailer A", role: "customer", nic: "333333333V", address: "Colombo", contact: "0771234567", province: "Western", email: "cust@isdn.com", password: "custpass" }
    ];
    localStorage.setItem("isdn_users", JSON.stringify(users));
  }

  if (!localStorage.getItem("isdn_orders")) {
    localStorage.setItem("isdn_orders", JSON.stringify([]));
  }
}
