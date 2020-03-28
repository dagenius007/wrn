export const getLocation = async () => {
  let loading = true;
  try {
    let response = await fetch("https://ipapi.co/json");
    return await response.json();
  } catch (err) {
    console.error(err);
    return err;
  }
  // let location =  new Promise(resolve => {
  // 	resolve(
  // 		fetch('https://ipapi.co/json')
  // 			.then(res => res.json())
  // 			.then(location => {
  // 				return location;
  // 			}),
  // 	);
  // })
};
