// โจทย์: ใช้ axios เพื่อ get ค่าจาก API
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1
const axios = require("axios");
const callApiGet = async () => {
  await axios.get(baseUrl).then((res) => {
    console.log(res.data);
  });
};
callApiGet();

// const callApiPost = async () => {
//   await axios.post(baseUrl).then((res) => {
//     console.log(res.data);
//   });
// };
// callApiPost();

// const callApiPut = async () => {
//     await axios.post(baseUrl).then((res) => {
//       console.log(res.data);
//     });
//   };
//   callApiPut();

//   const callApiPact = async () => {
//     await axios.post(baseUrl).then((res) => {
//       console.log(res.data);
//     });
//   };
//   callApiPact();
