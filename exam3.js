// โจทย์: คุณมีออบเจ็กต์ตัวอย่างดังนี้:
const person = {
  name: "John",
  age: 25,
  city: "Bangkok",
  job: "Developer",
};

// 3.1 ลบ key job ออกจากออบเจ็กต์
const newPerson = {...person};
delete newPerson.job;
console.log("newPerson", newPerson);
console.log("person", person);
// 3.2 ใช้การ assign (หรือ destructure) เพื่อสร้างออบเจ็กต์ใหม่ที่เพิ่ม key country พร้อมค่าเป็น 'Thailand'
const copy = Object.assign({}, person);
copy.country = "Thailand";
console.log(copy);
// 3.3 อธิบายและทดลองการเปลี่ยนค่าในออบเจ็กต์ที่ประกาศด้วย const (เพื่ออธิบายเรื่อง reference address memory)
// const newPerson = person; const newPerson เป็นการสร้าง object โดยอิงจากตัว object เก่าคือ person
// delete newPerson.job; ลบ job: "Developer", ออกจาก newPerson และ person เนื่องจากเป็นการอิงใช้ object ตัวเดียวกัน
