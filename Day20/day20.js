let container = document.getElementById("container");

let jsonApi = async () =>
  (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
jsonApi()
  .then((value) => {
    value.forEach((element) => {
      container.innerHTML = `<p> UserId - ${element.userId} <br>
                                    Id - ${element.id} <br>
                                    Heading - ${element.title} <br>
                                    Details - ${element.body} </p>`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
