import React from "react";

function Acction() {
  const data = [
    { id: 1, name: "Hoàng Cương Cát", dob: "01/06/2006", gender: "Nam", address: "HaNoi" },
    { id: 2, name: "Nguyen Quang Vinh", dob: "11/02/2006", gender: "Nữ", address: "NamDinh" },
  ];

  const thStyle: React.CSSProperties = {
  padding: "12px",
  borderBottom: "2px solid #ddd",
};

const tdStyle: React.CSSProperties = {
  padding: "12px",
};

const btnEdit: React.CSSProperties = {
  padding: "6px 12px",
  marginRight: "8px",
  backgroundColor: "#f8fafc",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const btnDelete: React.CSSProperties = {
  padding: "6px 12px",
  backgroundColor: "#e53935",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "20px" }}>Danh sach nguoi dung</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f8fafc",color:"black"  }}>
            <th style={thStyle}>STT</th>
            <th style={thStyle}>Họ và Tên</th>
            <th style={thStyle}>Ngày sinh</th>
            <th style={thStyle}>Giới tính</th>
            <th style={thStyle}>Địa chỉ</th>
            <th style={thStyle}>hành động</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.dob}</td>
              <td style={tdStyle}>{item.gender}</td>
              <td style={tdStyle}>{item.address}</td>
              <td style={tdStyle}>
                <button style={btnEdit}>Sua</button>
                <button style={btnDelete}>Xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default Acction;
