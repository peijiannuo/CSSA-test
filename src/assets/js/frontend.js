function get_data() {
  // console.log(json)
  const x = localStorage.getItem("js_data");
  // xxxx = JSON.stringify(x)
  xxx = JSON.parse(x);
  console.log(xxx[1]);
}
