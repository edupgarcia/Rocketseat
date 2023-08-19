const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('OK');
    }, 2000);
  });

// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {});

// async function executaPromise() {
//   //   const response = await minhaPromise();
//   //   console.log(response);

//   // minhaPromise()
//   //   .then(response => {
//   //     console.log(response);
//   //     minhaPromise()
//   //       .then(response => {
//   //         console.log(response);
//   //         minhaPromise()
//   //           .then(response => {
//   //             console.log(response);
//   //           })
//   //           .catch(err => {});
//   //       })
//   //       .catch(err => {});
//   //   })
//   //   .catch(err => {});

//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};

executaPromise();
